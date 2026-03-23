import csv
import re
import unicodedata
import os

def normalize_name(name):
    if not name: return ""
    name = unicodedata.normalize('NFKD', str(name)).encode('ASCII', 'ignore').decode('utf-8').upper()
    name = re.sub(r'[^A-Z0-9]', '', name)
    return name

def main():
    csv_file = r'd:\projects\guimatech\adefe-site\db\igrejas.csv'
    txt_file = r'd:\projects\guimatech\adefe-site\db\endereços.txt'
    out_file = r'd:\projects\guimatech\adefe-site\db\igrejas_html.txt'
    
    enderecos_data = {}
    with open(txt_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    current_church = None
    for line in lines:
        line = line.strip()
        if line.startswith('🔵'):
            current_church = line.replace('🔵', '').strip()
            norm = normalize_name(current_church)
            enderecos_data[norm] = {'nome': current_church, 'endereco': '', 'link': ''}
        elif current_church and line.startswith('📬ENDEREÇO:'):
            enderecos_data[normalize_name(current_church)]['endereco'] = line.replace('📬ENDEREÇO:', '').strip()
        elif current_church and line.startswith('📍COMO CHEGAR:'):
            enderecos_data[normalize_name(current_church)]['link'] = line.replace('📍COMO CHEGAR:', '').strip()
            
    manual_maps = {
        normalize_name("ADEFE SEDE_CENTRAL"): normalize_name("ADEFE VILA FRANÇA DE XIRA"),
        normalize_name("ADEFE SANTO ESTÊVÃO"): normalize_name("ADEFE SANTO ESTEVÃO"),
        normalize_name("ADEFE AMÓS"): normalize_name("ADEFE AMÓS (CARREGADO)"),
    }

    html_output = []
    
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            igreja = row.get('Igreja', '').strip()
            norm_igreja = normalize_name(igreja)
            
            lookup_key = manual_maps.get(norm_igreja, norm_igreja)
            end_info = enderecos_data.get(lookup_key)
            if not end_info:
                # tentar match parcial apenas como fallback
                for k in enderecos_data:
                    if norm_igreja in k or k in norm_igreja:
                        end_info = enderecos_data[k]
                        break
            if not end_info:
                end_info = {}
                
            endereco_csv = row.get('EnderecoIgreja', '').strip()
            cidade = row.get('CidadeIgreja', '').strip()
            cod_postal = row.get('CodigoPostal', '').strip()
            pais = row.get('Pais', '').strip()
            tel = row.get('TelefoneIgreja', '').strip()
            email = row.get('EmailIgreja', '').strip()
            pastor = row.get('Superintendente', '').strip()
            google_maps = row.get('GoogleMaps', '').strip()

            # Build embed URL: use OpenStreetMap (free, no API key, no iframe block)
            map_short_link = end_info.get('link', '').strip()
            map_embed_url = ""
            map_link = ""

            if google_maps and google_maps not in ("0.000000, 0.000000", "0.000000,0.000000", ""):
                try:
                    parts = google_maps.replace(' ', '').split(',')
                    lat = float(parts[0])
                    lng = float(parts[1])
                    delta = 0.008
                    bbox = f"{lng-delta},{lat-delta},{lng+delta},{lat+delta}"
                    map_embed_url = f"https://www.openstreetmap.org/export/embed.html?bbox={bbox}&layer=mapnik&marker={lat},{lng}"
                    map_link = f"https://www.openstreetmap.org/?mlat={lat}&mlon={lng}#map=16/{lat}/{lng}"
                except Exception:
                    pass

            if not map_embed_url and map_short_link:
                map_link = map_short_link

            if map_embed_url:
                map_tag = f'''<div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-top: 10px;">
\t\t<iframe src="{map_embed_url}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen loading="lazy"></iframe>
\t</div>'''
            elif map_link:
                map_tag = f'\t\t<h4><a href="{map_link}" target="_blank">📍 Ver no mapa</a></h4>'
            else:
                map_tag = ""
                    
            end_display = end_info.get('endereco', '')
            if not end_display:
                end_display = endereco_csv
                
            city_display = f"<h4>{cidade}</h4>" if cidade else ""
            country_display = f"<h4>{pais}</h4>" if pais else ""
            
            pastores_text = "Pr. " + pastor if pastor and not pastor.startswith("Pr") else pastor
            
            imagem_super = row.get('ImagemSuperintendente', '').strip()
            img_tag = ""
            if imagem_super:
                img_tag = f'\t\t<img src="{imagem_super}" alt="Superintendente" style="width: 100%; height: auto; display: block; margin-bottom: 10px;" />\n'

            pastor_title = """<div class="mag-box-title the-global-title">
\t\t\t<h3>Pastores</h3>
\t\t</div>"""

            contatos_title = """<div class="mag-box-title the-global-title">
\t\t\t<h3>Contatos</h3>
\t\t</div>"""

            html = f"""<div class="mag-box-container clearfix">
\t<div class="entry clearfix">
\t\t{pastor_title}
{img_tag}
\t\t<h4><span style="color: #000000;">■ <strong>PASTORES</strong></span><br>
\t\t{pastores_text}</h4>
\t\t<h3 style="text-align: center;">___</h3>
\t\t{contatos_title}
\t\t<h4><span style="color: #000000;"> ■ <strong>{igreja.upper()}</strong></span></h4>
\t\t<h4>Endereço: {end_display}</h4>
\t\t<h4>Código Postal: {cod_postal}</h4>
\t\t{city_display}
\t\t{country_display}
\t\t<h4>Tel.: {tel}</h4>
\t\t<h4>E-mail: {email}</h4>
{map_tag}
\t</div>
</div>"""
            html_output.append(html)
            
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write('\n\n'.join(html_output))
        
    print(f"Sucesso! HTML gerado com {len(html_output)} igrejas em {out_file}")

if __name__ == '__main__':
    main()
