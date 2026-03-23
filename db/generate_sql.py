import re
import os

def extract_cell(text):
    text = text.strip()
    img_path = ""
    
    if text.startswith("!["):
        start_idx = text.find("](")
        if start_idx != -1:
            start_url = start_idx + 2
            end_url_space = text.find(") ", start_url)
            if end_url_space != -1:
                img_path = text[start_url:end_url_space].strip()
                text = text[end_url_space+1:].strip()
            else:
                if text.endswith(")"):
                    img_path = text[start_url:-1].strip()
                    text = ""
                else:
                    last_paren = text.rfind(")")
                    if last_paren != -1 and last_paren > start_url:
                        img_path = text[start_url:last_paren].strip()
                        text = text[last_paren+1:].strip()
                        
    if img_path.startswith("./"):
        img_path = img_path[2:]
        
    link_match = re.search(r'\[.*?\]\((.*?)\)', text)
    if link_match:
        text = link_match.group(1).strip()
        
    return text, img_path

def generate():
    md_path = r'd:\projects\guimatech\adefe-site\tabela.md'
    if not os.path.exists(md_path):
        print(f"Error: {md_path} not found.")
        return

    with open(md_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    headers = []
    data_rows = []
    
    current_group = ""
    
    for line in lines:
        line = line.strip()
        if not line: continue
        
        if line.startswith('| **Grupo:'):
            match = re.search(r'\*\*Grupo:\s*(.*?)\*\*', line)
            if match:
                current_group = match.group(1).strip()
            continue
            
        cols = [c.strip() for c in line.split('|')[1:-1]]
        if not cols: continue
        
        if not headers:
            headers = cols
            continue
            
        if cols[0].startswith('---'):
            continue
            
        record = {}
        for i, h in enumerate(headers):
            val_text, val_img = extract_cell(cols[i] if i < len(cols) else "")
            record[h] = {"text": val_text, "img": val_img}
            
        record['Grupo'] = {"text": current_group, "img": ""}
        data_rows.append(record)
        
    sql_lines = []
    sql_lines.append("-- Script de Criação e Inserção para MySQL")
    sql_lines.append("-- Gerado a partir de tabela.md\n")
    
    sql_lines.append("CREATE TABLE IF NOT EXISTS igrejas (")
    sql_lines.append("    id INT AUTO_INCREMENT PRIMARY KEY,")
    sql_lines.append("    grupo VARCHAR(255),")
    sql_lines.append("    nome VARCHAR(255),")
    sql_lines.append("    telefone VARCHAR(100),")
    sql_lines.append("    sms_telefone VARCHAR(100),")
    sql_lines.append("    email VARCHAR(255),")
    sql_lines.append("    superintendente_nome VARCHAR(255),")
    sql_lines.append("    superintendente_img VARCHAR(255),")
    sql_lines.append("    tesoureiro_nome VARCHAR(255),")
    sql_lines.append("    tesoureiro_img VARCHAR(255),")
    sql_lines.append("    secretario_nome VARCHAR(255),")
    sql_lines.append("    secretario_img VARCHAR(255),")
    sql_lines.append("    lider_jovens_nome VARCHAR(255),")
    sql_lines.append("    lider_jovens_img VARCHAR(255),")
    sql_lines.append("    pastor_assistente_nome VARCHAR(255),")
    sql_lines.append("    pastor_assistente_img VARCHAR(255),")
    sql_lines.append("    pastor_super_assistente_nome VARCHAR(255),")
    sql_lines.append("    pastor_super_assistente_img VARCHAR(255),")
    sql_lines.append("    pastor_regional_nome VARCHAR(255),")
    sql_lines.append("    pastor_regional_img VARCHAR(255),")
    sql_lines.append("    pastor_nacional_nome VARCHAR(255),")
    sql_lines.append("    pastor_nacional_img VARCHAR(255),")
    sql_lines.append("    endereco TEXT,")
    sql_lines.append("    mapa_url TEXT,")
    sql_lines.append("    aniversario VARCHAR(100),")
    sql_lines.append("    banco VARCHAR(100)")
    sql_lines.append(");\n")
    
    sql_lines.append("INSERT INTO igrejas (grupo, nome, telefone, sms_telefone, email, superintendente_nome, superintendente_img, tesoureiro_nome, tesoureiro_img, secretario_nome, secretario_img, lider_jovens_nome, lider_jovens_img, pastor_assistente_nome, pastor_assistente_img, pastor_super_assistente_nome, pastor_super_assistente_img, pastor_regional_nome, pastor_regional_img, pastor_nacional_nome, pastor_nacional_img, endereco, mapa_url, aniversario, banco) VALUES")
    
    values_lines = []
    for r in data_rows:
        def esc(val):
            if not val:
                return "NULL"
            return "'" + val.replace("'", "''") + "'"
            
        def t(col): return r.get(col, {"text": "", "img": ""})["text"]
        def i(col): return r.get(col, {"text": "", "img": ""})["img"]
            
        vals = [
            esc(t('Grupo')),
            esc(t('Igreja Display')),
            esc(t('Call Phone')),
            esc(t('Send SMS')),
            esc(t('Compose Email')),
            esc(t('Superintendente')), esc(i('Superintendente')),
            esc(t('Tesoureiro')), esc(i('Tesoureiro')),
            esc(t('Secretário')), esc(i('Secretário')),
            esc(t('LiderJovens')), esc(i('LiderJovens')),
            esc(t('Pastor Assistente')), esc(i('Pastor Assistente')),
            esc(t('Pastor Super Assistente')), esc(i('Pastor Super Assistente')),
            esc(t('Pastor Regional')), esc(i('Pastor Regional')),
            esc(t('Pastor Nacional')), esc(i('Pastor Nacional')),
            esc(t('Endereço')),
            esc(t('View Map')),
            esc(t('Aniversários_Igrejas')),
            esc(t('Banco'))
        ]
        values_lines.append("    (" + ", ".join(vals) + ")")
        
    sql_lines.append(",\n".join(values_lines) + ";\n")
    
    out_path = r'd:\projects\guimatech\adefe-site\igrejas.sql'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(sql_lines))
        
    print(f"Sucesso! Gerado arquivo: {out_path}")

if __name__ == '__main__':
    generate()
