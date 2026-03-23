import sys
from bs4 import BeautifulSoup
import re

def extract():
    with open(r'd:\projects\guimatech\adefe-site\SGIFAE - Gestão Integrada.html', 'r', encoding='utf-8', errors='ignore') as f:
        soup = BeautifulSoup(f, 'lxml')
        
    print("Parsing HTML...")
    
    header_cols = soup.find_all(class_=re.compile('TableView__header-column'))
    headers = []
    
    for h in header_cols:
        col_name = h.get('data-testonly-column') or h.get('data-testonly-action')
        if not col_name:
            col_name = h.text.strip()
            
        if col_name:
            if "(" in col_name and "Action" not in col_name:
                name = col_name.split('(')[0].strip()
            else:
                name = col_name
            
            # Avoid duplicate action buttons clobbering each other, but for markdown it's fine.
            headers.append(name.strip())
            
    if not headers:
        print("No headers found")
        return
        
    print(f"Found {len(headers)} headers: {headers}")

    rows_container = soup.find('div', class_=re.compile('TableView__reactListWrapper'))
    if not rows_container:
        elements = soup.find_all(['div', 'span'], class_=re.compile('(GroupedHeaderRow|TableViewRow)'))
    else:
        elements = rows_container.find_all(['div', 'span'], class_=re.compile('(GroupedHeaderRow|TableViewRow)'))
        
    with open(r'd:\projects\guimatech\adefe-site\tabela.md', 'w', encoding='utf-8') as out:
        out.write("| " + " | ".join(headers) + " |\n")
        out.write("| " + " | ".join(['---']*len(headers)) + " |\n")
        
        row_count = 0
        for el in elements:
            classes = el.get('class', [])
            
            # Use string representation of classes for easier checking
            class_str = " ".join(classes)
            
            if 'GroupedHeaderRow' in class_str and 'GroupedHeaderRow__type-view' not in class_str:
                group_name = el.get('data-testid', '').replace('grouped-header-row-container-', '')
                if not group_name:
                    text_el = el.find('span', class_='TextTypeDisplay__text')
                    if text_el:
                        group_name = text_el.text.strip()
                if group_name:
                    out.write(f"| **Grupo: {group_name}** |" + " |" * (len(headers) - 1) + "\n")
                continue
                
            if el.name == 'span' and el.get('data-testonly-row-index') is not None:
                cols = el.find_all('div', class_=re.compile('TableViewRow__column'), recursive=False)
                if not cols:
                    continue
                    
                col_data = []
                for col in cols:
                    text = ""
                    text_spans = col.find_all('span', class_='TextTypeDisplay__text')
                    if text_spans:
                        text = " ".join(s.text.strip() for s in text_spans)
                    else:
                        ref_display = col.find('div', class_=re.compile('RefTypeDisplay|TextTypeDisplay'))
                        if ref_display:
                            # if it only has text and no nested elements with their own text except what we get
                            # We can just get text, but drop image text if mixed
                            text = ref_display.text.strip()
                            
                    img_tag = col.find('img')
                    img = ""
                    if img_tag:
                        src = img_tag.get('src', '')
                        img = f"![img]({src})"
                        
                    cell = ""
                    if img:
                        cell += img
                    if text:
                        cell += " " + text
                        
                    col_data.append(cell.strip().replace('\n', ' '))
                
                while len(col_data) < len(headers):
                    col_data.append("")
                if len(col_data) > len(headers):
                    col_data = col_data[:len(headers)]
                    
                out.write("| " + " | ".join(col_data) + " |\n")
                row_count += 1
                
        print(f"Extracted {row_count} rows.")

if __name__ == '__main__':
    extract()
