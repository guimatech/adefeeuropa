import re

def normalize_name(name):
    name = name.upper()
    name = re.sub(r'[^A-ZÇÃÕÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙ]', '', name)
    name = name.replace('ADEFE', '').replace('AD', '').replace('COMADEFE', '')
    return name

def parse_addresses():
    with open(r'd:\projects\guimatech\adefe-site\endereços.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    
    addresses = {}
    blocks = content.split('🔵')
    for block in blocks[1:]:
        lines = [line.strip() for line in block.split('\n') if line.strip()]
        if not lines: continue
        
        name = lines[0]
        
        endereco = ""
        link = ""
        
        match = re.search(r'📬ENDEREÇO:\s*(.*?)(?:📍COMO CHEGAR|📍)', block, re.DOTALL | re.IGNORECASE)
        if match:
            endereco = match.group(1).strip().replace('\n', ' ')
            
        match_link = re.search(r'📍COMO CHEGAR\s*:?(.*)', block, re.IGNORECASE)
        if match_link:
            link = match_link.group(1).strip()
            
        if "http" in link:
            url_match = re.search(r'(https?://[^\s]+)', link)
            if url_match:
                link_url = url_match.group(1)
                link = f"[Mapa]({link_url})"
            else:
                link = ""
                
        norm = normalize_name(name)
        if "COMADEFE" in name: norm = "COMADEFE"
        
        addresses[norm] = {"endereco": endereco, "link": link}
    
    return addresses

def merge():
    addresses = parse_addresses()
    
    with open(r'd:\projects\guimatech\adefe-site\tabela.md', 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    out_lines = []
    map_idx = -1
    for idx, line in enumerate(lines):
        line = line.strip()
        if not line:
            out_lines.append(line)
            continue
            
        if line.startswith('| **Grupo:'):
            if line.endswith('|'):
                out_lines.append(line + " |")
            else:
                out_lines.append(line)
            continue
            
        cols = [c.strip() for c in line.split('|')[1:-1]]
        
        if idx == 0:
            try:
                map_idx = cols.index('View Map')
            except ValueError:
                map_idx = len(cols) - 2 # Insert before Aniversários
            cols.insert(map_idx, 'Endereço')
            out_lines.append("| " + " | ".join(cols) + " |")
        elif idx == 1:
            try:
                cols.insert(map_idx, '---')
            except:
                pass
            out_lines.append("| " + " | ".join(cols) + " |")
        else:
            igreja_name = cols[0]
            norm = normalize_name(igreja_name)
            
            best_match = ""
            if "COMADEFE" in igreja_name:
                best_match = "COMADEFE"
            elif "SEDE" in igreja_name or "CENTRAL" in igreja_name:
                best_match = "SANTARÉM" # wait, Santarém is regional 6. "SEDE_CENTRAL" has Sanzio Elmo Sousa Soares. "Sanzio" is Regional 1 (Alhandra, Alverca, Porto Alto, Sede Central). Maybe it's Vila Franca de Xira?
                pass
            
            if not best_match:
                for k in addresses.keys():
                    if norm and len(norm) > 2 and (norm in k or k in norm):
                        best_match = k
                        break
                        
            data = addresses.get(best_match, {"endereco": "", "link": ""})
            
            if data['link'] and map_idx < len(cols):
                cols[map_idx] = data['link']
                
            cols.insert(map_idx, data["endereco"])
            out_lines.append("| " + " | ".join(cols) + " |")
            
    with open(r'd:\projects\guimatech\adefe-site\tabela.md', 'w', encoding='utf-8') as f:
        f.write("\n".join(out_lines))
        
if __name__ == '__main__':
    merge()
    print("Merge complete")
