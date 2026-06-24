(function () {
  var FLAGS = {
    'Portugal': '<img src="assets/images/flag-portugal.webp" alt="PT" class="flag-icon">', 
    'Spain': '<img src="assets/images/flag-spain.avif" alt="ES" class="flag-icon">', 
    'Belgium': '<img src="assets/images/flag-belgica.svg" alt="BE" class="flag-icon">',
    'Luxembourg': '<img src="assets/images/flag-Luxembourg.png" alt="LU" class="flag-icon">', 
    'France': '<img src="assets/images/flag-france.svg" alt="FR" class="flag-icon">', 
    'Germany': '<img src="assets/images/flag-alemanha.avif" alt="DE" class="flag-icon">', 
    'Guinea-Bisáu': '<img src="assets/images/flag-guinea-bissau.png" alt="GW" class="flag-icon">'
  };

  var PAIS_PT = {
    'Portugal': 'Portugal', 'Spain': 'Espanha', 'Belgium': 'Bélgica',
    'Luxembourg': 'Luxemburgo', 'France': 'França', 'Germany': 'Alemanha', 'Guinea-Bisáu': 'Guiné-Bissau'
  };

  var IGREJAS = [
    {nome:"ADEFE ALENQUER",tel:"+351916696168",email:"alenquer@adefeeuropa.com",endereco:"Av. 25 de Abril 40A, 2580-373 Alenquer",cidade:"Alenquer",cp:"2580-373",regiao:"REGIONAL 04",pais:"Portugal",coords:"",pastor:"Jucelio Leandro Da Silva",regional:"Telmo Santos Martins",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2FToItvJvErx-%20Jucelio%20Leandro%20da%20Silva.Fotografia%20para%20perfil.165330.jpg"},
    {nome:"ADEFE ALGUEIRÃO",tel:"+351960494621",email:"algueirao@adefeeuropa.com",endereco:"Av. Marginal 8, 2725-397 Algueirão-Mem Martins",cidade:"Algueirão",cp:"2725-397",regiao:"REGIONAL 03",pais:"Portugal",coords:"38.797742,-9.341746",pastor:"Paulo Jose Souza Pinheiro",regional:"Jaime Do Espírito Santo",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F00CFEE61E7.Fotografia%20para%20perfil.191510.jpg"},
    {nome:"ADEFE ALHANDRA",tel:"+351916696168",email:"alhandra@adefeeuropa.com",endereco:"R. Combatentes 06, 2600-427 Alhandra",cidade:"Alhandra",cp:"2600-427",regiao:"REGIONAL 01",pais:"Portugal",coords:"38.929228,-9.011489",pastor:"Rogger Santos",regional:"Sanzio Elmo Sousa Soares",img:"/assets/images/rogger-santos.jpeg"},
    {nome:"ADEFE ALMEIRIM",tel:"+351963090805",email:"almeirim@adefeeuropa.com",endereco:"R. das Faias 22, 2080-086 Almeirim",cidade:"Almeirim",cp:"2080-086",regiao:"REGIONAL 06",pais:"Portugal",coords:"39.210027,-8.628212",pastor:"Joésio Barbosa De Souza",regional:"João Áquila Lima Dos Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F48ded7b5Jo%C3%A9sio.Fotografia%20para%20perfil.210508.jpg"},
    {nome:"ADEFE ALVERCA",tel:"+351961024820",email:"alverca@adefeeuropa.com",endereco:"R. José António do Carmo 19, 2615-106 Alverca",cidade:"Alverca",cp:"2615-106",regiao:"REGIONAL 01",pais:"Portugal",coords:"38.898512,-9.039381",pastor:"Jackson Elias Pereira",regional:"Sanzio Elmo Sousa Soares",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F0076FCF103-%20Jackson%20Elias%20Pereira.Fotografia%20para%20perfil.174919.jpg"},
    {nome:"ADEFE AMÓS",tel:"+351963920744",email:"amos@adefeeuropa.com",endereco:"R. Pinto Barreiro 62, 2580-499 Carregado",cidade:"Carregado",cp:"2580-499",regiao:"REGIONAL 04",pais:"Portugal",coords:"39.022047,-8.976575",pastor:"Eliel Pereira Dos Santos Costa",regional:"Telmo Santos Martins",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F005A04E07D-%20Eliel%20Pereira%20Dos%20Santos%20Costa.Fotografia%20para%20perfil.210239.jpg"},
    {nome:"ADEFE ARRUDA DOS VINHOS",tel:"+351963920744",email:"arrudadosvinhos@adefeeuropa.com",endereco:"Recta da Fresca 7, 2630-240 Arruda dos Vinhos",cidade:"Arruda dos Vinhos",cp:"2630-240",regiao:"REGIONAL 04",pais:"Portugal",coords:"38.994202,-9.081027",pastor:"Hércules Freire Pires",regional:"Telmo Santos Martins",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2FiNzppAAPZI.Fotografia%20para%20perfil.174439.jpg"},
    {nome:"ADEFE ASSAFORA",tel:"+351963321725",email:"assafora@adefeeuropa.com",endereco:"Caminho das Cornadelas 1, 2705-459 São João das Lampas",cidade:"Assafora",cp:"2705-459",regiao:"REGIONAL 03",pais:"Portugal",coords:"",pastor:"Dione Barreira Viana Borges",regional:"Jaime Do Espírito Santo",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2Fcad743d4DioneBarreiraViana.Fotografia%20para%20perfil.194158.jpg"},
    {nome:"ADEFE AZAMBUJA",tel:"+351963920744",email:"azambuja@adefeeuropa.com",endereco:"R. Prof. Dr. Egas Moniz 1A, 2050-312 Azambuja",cidade:"Azambuja",cp:"2050-312",regiao:"REGIONAL 04",pais:"Portugal",coords:"39.070190,-8.865265",pastor:"Francisco Rocha Soares",regional:"Telmo Santos Martins",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F0023EB8563-%20Francisco%20Rocha%20Soares.Fotografia%20para%20perfil.162714.jpg"},
    {nome:"ADEFE AUBANGE",tel:"+352691140233",email:"aubange@adefeeuropa.com",endereco:"Rue du Village 8A, Aubange",cidade:"Aubange",cp:"0",regiao:"Setor 01 Belgica",pais:"Belgium",coords:"49.568881,5.805924",pastor:"Guilherme Rosa Miranda",regional:"Jonatas Da Rocha Lemos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2FESZLqmhjIV.Fotografia%20para%20perfil.164914.jpg"},
    {nome:"ADEFE BAD KREUZNACH",tel:"+352691140233",email:"badkreuznach@adefeeuropa.com",endereco:"Dürerstraße 21, 55543 Bad Kreuznach",cidade:"Bad Kreuznach",cp:"55543",regiao:"Setor 01 ALEMANHA",pais:"Germany",coords:"49.842784,7.882284",pastor:"Nuno Ameixa",regional:"Jonatas Da Rocha Lemos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F7Op4iRmHcf.Fotografia%20para%20perfil.174851.jpg"},
    {nome:"ADEFE BARAKALDO",tel:"+34614229615",email:"barakaldo@adefeeuropa.com",endereco:"Retuerto Kalea 58, 48903 Barakaldo, Bizkaia",cidade:"Barakaldo",cp:"48903",regiao:"GRAN BILBAO",pais:"Spain",coords:"43.287512,-3.005168",pastor:"Efferson Santos",regional:"Efferson Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2FhkESG1TrXh-%20Efferson%20Santos.Fotografia%20para%20perfil.195510.jpg"},
    {nome:"ADEFE BENAVENTE",tel:"+351963920744",email:"benavente@adefeeuropa.com",endereco:"Largo de Santo André 6, 2135-066 Benavente",cidade:"Benavente",cp:"2135-066",regiao:"REGIONAL 05",pais:"Portugal",coords:"38.980498,-8.810773",pastor:"Jabson Gonçalves Ferreira",regional:"Mário Paulino De Oliveira",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F001EAEF78D-%20Jabson%20Gon%C3%A7alves%20Ferreira.Fotografia%20para%20perfil.161509.jpg"},
    {nome:"ADEFE BILBAO",tel:"+34606353658",email:"bilbao@adefeeuropa.com",endereco:"Entrecanales Doctor Kalea 8, 48002 Bilbao, Bizkaia",cidade:"Bilbao",cp:"48002",regiao:"GRAN BILBAO",pais:"Spain",coords:"43.254410,-2.946570",pastor:"Edinso Yanez",regional:"Efferson Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F5ba164caEdinso%20Gregorio.Fotografia%20para%20perfil.205347.jpg"},
    {nome:"ADEFE BOLUETA",tel:"+34603353658",email:"bolueta@adefeeuropa.com",endereco:"Ctra. Bilbao-Galdakao 2, 48004 Bilbao, Edifício Bolueta",cidade:"Bilbao",cp:"48004",regiao:"GRAN BILBAO",pais:"Spain",coords:"43.247123,-2.909488",pastor:"Illisnois Pérez Tamé",regional:"Efferson Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2FMGKNeT1InO.jpg"},
    {nome:"ADEFE BOMBARRAL",tel:"+351914020732",email:"bombarral@adefeeuropa.com",endereco:"R. do Comércio 22, 2540-110 Bombarral",cidade:"Bombarral",cp:"2540-110",regiao:"REGIONAL 07",pais:"Portugal",coords:"39.269240,-9.156716",pastor:"Azelina Cardoso Marinho Xavier",regional:"Rui Filipe Bruno Nascimento",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F000FD90467-%20Azelina%20Cardoso%20Marinho%20Xavier.Fotografia%20para%20perfil.224018.jpg"},
    {nome:"ADEFE BRAGA",tel:"+351927503536",email:"braga@adefeeuropa.com",endereco:"R. da Quinta de Santa Maria 176, 4700-249 Braga",cidade:"Braga",cp:"4700-249",regiao:"REGIONAL 08",pais:"Portugal",coords:"",pastor:"Sandro Gonçalves Menezes",regional:"Thiago Da Silva Dos Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2Fcebb6defSandro.Fotografia%20para%20perfil.095510.jpg"},
    {nome:"ADEFE CALDAS DA RAINHA",tel:"+351963389234",email:"caldasdarainha@adefeeuropa.com",endereco:"R. Dr. Augusto Saudade Silva 1, 2500-805 Caldas da Rainha",cidade:"Caldas da Rainha",cp:"2500-805",regiao:"REGIONAL 07",pais:"Portugal",coords:"39.404409,-9.140071",pastor:"Joilson Conceicao De Oliveira",regional:"Rui Filipe Bruno Nascimento",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F7bddX9f7JOILSON.Fotografia%20para%20perfil.183351.jpg"},
    {nome:"ADEFE CARTAXO",tel:"+351963920744",email:"cartaxo@adefeeuropa.com",endereco:"R. Batalhoz 44, 2070-069 Cartaxo",cidade:"Cartaxo",cp:"2070-069",regiao:"REGIONAL 06",pais:"Portugal",coords:"",pastor:"Diego Pinto De Souza",regional:"João Áquila Lima Dos Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F66bb69b2Diego.Fotografia%20para%20perfil.223219.jpg"},
    {nome:"ADEFE CATUJAL",tel:"+351963920744",email:"catujal@adefeeuropa.com",endereco:"R. José Gomes Ferreira 72, 2680-352 Unhos",cidade:"Unhos",cp:"2680-352",regiao:"REGIONAL 02",pais:"Portugal",coords:"38.808390,-9.130258",pastor:"Tiago Pereira Da Silva",regional:"João Paulo Santos Moreira",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F4f067440Tiago.Fotografia%20para%20perfil.235155.jpg"},
    {nome:"ADEFE CORUCHE",tel:"+351924386574",email:"coruche@adefeeuropa.com",endereco:"Av. Luís de Camões 18, 2100-102 Coruche",cidade:"Coruche",cp:"2100-102",regiao:"REGIONAL 05",pais:"Portugal",coords:"",pastor:"Tavares De Adilson Vasconcelos",regional:"Mário Paulino De Oliveira",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F9da48483Adilson%20Tavares%20de.Fotografia%20para%20perfil.171741.jpg"},
    {nome:"ADEFE DURANGO",tel:"+34606353658",email:"durango@adefeeuropa.com",endereco:"Polígono Industrial Mallabiena 13, 48215 Iurreta, Bizkaia",cidade:"Iurreta",cp:"48215",regiao:"DURANGUESADO",pais:"Spain",coords:"43.180467,-2.648409",pastor:"Vilmar Garcia Couto",regional:"Vilmar Garcia Couto",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F007V414900-%20Vilmar%20Garcia%20Couto.Fotografia%20para%20perfil.131944.png"},
    {nome:"ADEFE ELORRIO",tel:"+34606353658",email:"elorrio@adefeeuropa.com",endereco:"Urkizuaran Kalea 5, 48230 Elorrio, Bizkaia",cidade:"Elorrio",cp:"48230",regiao:"DURANGUESADO",pais:"Spain",coords:"43.127570,-2.539225",pastor:"Vilmar Garcia Couto",regional:"Vilmar Garcia Couto",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F007V414900-%20Vilmar%20Garcia%20Couto.Fotografia%20para%20perfil.131944.png"},
    {nome:"ADEFE FARO",tel:"+351914058750",email:"faro@adefeeuropa.com",endereco:"Estr. da Sra. da Saúde 12, 8000-500 Faro",cidade:"Faro",cp:"8000-000",regiao:"REGIONAL 09",pais:"Portugal",coords:"",pastor:"Wagner Luiz Bento",regional:"",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F557PIBQbqG.Fotografia%20para%20perfil.171930.jpg"},
    {nome:"ADEFE FRANÇA",tel:"+33744768182",email:"france@adefeeuropa.com",endereco:"61 Rue de Lagrange, 57100 Manom",cidade:"Manom",cp:"57100",regiao:"Setor 01 França",pais:"France",coords:"",pastor:"Alfredo Indiveri",regional:"",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F002FEA886D-%20Alfredo%20Indiveri.Fotografia%20para%20perfil.164955.jpg"},
    {nome:"ADEFE FUNDÃO",tel:"+351963920744",email:"fundao@adefeeuropa.com",endereco:"R. Cidade da Covilhã, 6230-346 Fundão",cidade:"Fundão",cp:"6230-346",regiao:"REGIONAL 10",pais:"Portugal",coords:"",pastor:"Itamar Cleriston De Macedo E Souza",regional:"Itamar Cleriston De Macedo E Souza",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2FZB4NveLEXR.Fotografia%20para%20perfil.172853.jpg"},
    {nome:"ADEFE GUIMARÃES",tel:"+351931180202",email:"guimaraes@adefeeuropa.com",endereco:"R. do Paço, 4805-299 Guimarães",cidade:"Guimarães",cp:"4805-299",regiao:"REGIONAL 08",pais:"Portugal",coords:"41.466614,-8.322271",pastor:"Agnelson De Oliveira Santos",regional:"Thiago Da Silva Dos Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2Fb42a3a53Agnelson.Fotografia%20para%20perfil.003202.jpg"},
    {nome:"ADEFE GUINEA-BISSAU",tel:"+245955191025",email:"guinea-bissau@adefeeuropa.com",endereco:"Estrada Granja de Pessube, Bissau",cidade:"Bissau",cp:"0000",regiao:"África",pais:"Guinea-Bisáu",coords:"-15.59767,11.86357",pastor:"Robson Ferreira Santos",regional:"",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F007A971372-%20Abrah%C3%A1n%20Robson%20Ferreira%20Santos.Fotografia%20para%20perfil.015254.jpg"},
    {nome:"ADEFE IRÚN",tel:"+34606353658",email:"irun@adefeeuropa.com",endereco:"Aduana Kalea 27, 20302 Irún, Gipuzkoa",cidade:"Irún",cp:"20302",regiao:"GUIPÚZCOA",pais:"Spain",coords:"43.338470,-1.797901",pastor:"Josenildo Souza De Jesus",regional:"Onias Ferreira Da Silva",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F4a9096c9Josenildo%20Souza%20de%20Jesus.Fotografia%20para%20perfil.175529.jpg"},
    {nome:"ADEFE KAYL",tel:"+352691140233",email:"kayl@adefeeuropa.com",endereco:"31 Grand-Rue, 3650 Kayl",cidade:"Kayl",cp:"3650",regiao:"Setor 02 Luxemburgo",pais:"Luxembourg",coords:"",pastor:"Jonatas Da Rocha Lemos",regional:"",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2Fp3W1kwwUVM-%20Jonatas%20Lemos.Fotografia%20para%20perfil.120318.jpg"},
    {nome:"ADEFE LEIRIA",tel:"+351928034587",email:"leiria@adefeeuropa.com",endereco:"Estr. da Carreira de Tiro 262, 2415-592 Leiria",cidade:"Leiria",cp:"2415-592",regiao:"REGIONAL 07",pais:"Portugal",coords:"39.762863,-8.818903",pastor:"Eliel Veras Oliveira",regional:"Rui Filipe Bruno Nascimento",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2FW62fWgn9mo-%20Eliel%20Veras%20Oliveira.Fotografia%20para%20perfil.173150.jpg"},
    {nome:"ADEFE LOULÉ",tel:"+351963920744",email:"loule@adefeeuropa.com",endereco:"R. de Nossa Sra. de Fátima 191, 8125-003 Loulé",cidade:"Loulé",cp:"8125-003",regiao:"REGIONAL 09",pais:"Portugal",coords:"37.072729,-8.099290",pastor:"Wagner Luiz Bento",regional:"",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F557PIBQbqG.Fotografia%20para%20perfil.171930.jpg"},
    {nome:"ADEFE LOURINHÃ",tel:"+351963090805",email:"lourinha@adefeeuropa.com",endereco:"R. Miguel Bombarda 26, 2530-161 Lourinhã",cidade:"Lourinhã",cp:"2530-161",regiao:"REGIONAL 07",pais:"Portugal",coords:"39.2417176,-9.3115803",pastor:"Carlos Henrique Oliveira Soares",regional:"Rui Filipe Bruno Nascimento",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F0009E39DB3-%20Carlos%20Henrrique.Fotografia%20para%20perfil.225301.jpg"},
    {nome:"ADEFE MARINHA GRANDE",tel:"+351962227840",email:"marinhagrande@adefeuropa.com",endereco:"R. Alves Redol 5, 2430-107 Marinha Grande",cidade:"Marinha Grande",cp:"2430-107",regiao:"REGIONAL 07",pais:"Portugal",coords:"39.750830,-8.918790",pastor:"Rubeval Araujo Lourenço",regional:"Rui Filipe Bruno Nascimento",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F18735697Rubeval.Fotografia%20para%20perfil.151850.jpg"},
    {nome:"ADEFE MEM MARTINS",tel:"+351960494621",email:"memmartins@adefeeuropa.com",endereco:"Largo Artur Soares Ribeiro 1, 2725-229 Mem Martins",cidade:"Mem Martins",cp:"2725-229",regiao:"REGIONAL 03",pais:"Portugal",coords:"38.475602,-9.201983",pastor:"Marcos Antônio Venancio",regional:"Jaime Do Espírito Santo",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F00A258941E-%20Marcos%20Ant%C3%B4nio%20Ven%C3%A2ncio.Fotografia%20para%20perfil.173758.jpg"},
    {nome:"ADEFE MIRANDA DO DOURO",tel:"+351931180202",email:"mirandadodouro@adefeuropa.com",endereco:"R. José Inácio Pinto 11, 5210-204 Miranda do Douro",cidade:"Miranda do Douro",cp:"5210-204",regiao:"REGIONAL 08",pais:"Portugal",coords:"41.499972,-6.270777",pastor:"Milton Cesar Eduardo Siqueira",regional:"Thiago Da Silva Dos Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2Fd3da38ddMILTON.Fotografia%20para%20perfil.212410.jpg"},
    {nome:"ADEFE MONTIJO",tel:"+351926893432",email:"montijo@adefeeuropa.com",endereco:"R. José Joaquim Marques 45A, 2870-362 Montijo",cidade:"Montijo",cp:"2870-362",regiao:"REGIONAL 02",pais:"Portugal",coords:"38.704477,-8.972316",pastor:"Thiago Portela Medeiros",regional:"João Paulo Santos Moreira",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2Fee457e4eThiagoPortela.Fotografia%20para%20perfil.213745.jpg"},
    {nome:"ADEFE ODIVELAS",tel:"+351961583902",email:"odivelas@adefeeuropa.com",endereco:"R. Major João Luís de Moura, Armazéns B, 1685-253 Famões",cidade:"Odivelas",cp:"1685-253",regiao:"REGIONAL 02",pais:"Portugal",coords:"38.786686,-9.208350",pastor:"Apolo Antoni Almeida",regional:"João Paulo Santos Moreira",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2Fe5ec35ecAntonilson.Fotografia%20para%20perfil.014345.jpg"},
    {nome:"ADEFE PENICHE",tel:"+351963920744",email:"peniche@adefeeuropa.com",endereco:"R. Galhetas Lt C3, 2520-348 Peniche",cidade:"Peniche",cp:"2520-348",regiao:"REGIONAL 07",pais:"Portugal",coords:"39.360000,-9.388333",pastor:"Alessandro Ricardo Bergamo",regional:"Rui Filipe Bruno Nascimento",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F91fc4d59Alessandro%20Ricardo.Fotografia%20para%20perfil.225701.jpg"},
    {nome:"ADEFE PORTO ALTO",tel:"+351963920744",email:"portoalto@adefeeuropa.com",endereco:"Av. Nações Unidas 51, 2135-196 Porto Alto",cidade:"Porto Alto",cp:"2135-196",regiao:"REGIONAL 01",pais:"Portugal",coords:"38.918936,-8.871487",pastor:"David Rodrigues Vieira",regional:"Sanzio Elmo Sousa Soares",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F6faccbebDavid.Fotografia%20para%20perfil.231742.jpg"},
    {nome:"ADEFE RIO DE MOURO",tel:"+351938621980",email:"riodemouro@adefeeuropa.com",endereco:"Av. Santa Isabel 91, 2635-047 Rio de Mouro",cidade:"Rio de Mouro",cp:"2635-047",regiao:"REGIONAL 03",pais:"Portugal",coords:"38.755200,-9.344378",pastor:"Jaime Do Espírito Santo",regional:"Jaime Do Espírito Santo",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2FNtg8iPXMLj-%20Jaime%20do%20Esp%C3%ADrito%20Santo.Fotografia%20para%20perfil.173234.jpg"},
    {nome:"ADEFE SALVATERRA",tel:"+351964176507",email:"salvaterra@adefeeuropa.com",endereco:"Av. Dr. Roberto da Fonseca 96, 2120-115 Salvaterra de Magos",cidade:"Salvaterra de Magos",cp:"2120-115",regiao:"REGIONAL 05",pais:"Portugal",coords:"39.027657,-8.793490",pastor:"Edson Cerqueira De Lemos Junior",regional:"Mário Paulino De Oliveira",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F836e9dadEdson%20Cerqueira.Fotografia%20para%20perfil.203107.jpg"},
    {nome:"ADEFE SANTARÉM",tel:"+351963920745",email:"santarem@adefeeuropa.com",endereco:"R. Alexandre Herculano 17, 2005-246 Santarém",cidade:"Santarém",cp:"2005-246",regiao:"REGIONAL 06",pais:"Portugal",coords:"39.238942,-8.687274",pastor:"João Áquila Lima Dos Santos",regional:"João Áquila Lima Dos Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F0019231D9A-%20Jo%C3%A3o%20%C3%81quila%20Lima%20dos%20Santos.Fotografia%20para%20perfil.192116.jpg"},
    {nome:"ADEFE SANTO ESTÊVÃO",tel:"+351914579674",email:"santoestevao@adefeeuropa.com",endereco:"R. Manuel Martins Alves 16, Santo Estêvão",cidade:"Santo Estêvão",cp:"",regiao:"REGIONAL 05",pais:"Portugal",coords:"",pastor:"David Alves Rodrigues",regional:"Mário Paulino De Oliveira",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F3551fa4fDavid%20Alves%20Rodrigues.Fotografia%20para%20perfil.191027.jpg"},
    {nome:"ADEFE SEDE CENTRAL",tel:"+351963920744",email:"vilafrancadexira@adefeeuropa.com",endereco:"Av. dos Bombeiros Voluntários 8, 2600-214 Vila Franca de Xira",cidade:"Vila Franca de Xira",cp:"2600-214",regiao:"REGIONAL 01",pais:"Portugal",coords:"38.966067,-8.981729",pastor:"Sanzio Elmo Sousa Soares",regional:"Sanzio Elmo Sousa Soares",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2Fn2ldFwHJb9.jpg"},
    {nome:"ADEFE SEIXAL",tel:"+351925305137",email:"seixal@adefeeuropa.com",endereco:"Av. 1º de Maio 64, 2845-604 Amora",cidade:"Amora/Seixal",cp:"2845-604",regiao:"REGIONAL 02",pais:"Portugal",coords:"38.617152,-9.111910",pastor:"Celso Gomes Santos",regional:"João Paulo Santos Moreira",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2FW81Bh9cQ5A.Fotografia%20para%20perfil.173020.jpg"},
    {nome:"ADEFE STEINSEL",tel:"+352691140233",email:"steinsel@adefeeuropa.com",endereco:"50 Rue des Prés, 7333 Steinsel",cidade:"Steinsel",cp:"7333",regiao:"Setor 02 Luxemburgo",pais:"Luxembourg",coords:"49.672864,6.126717",pastor:"Milton Silva",regional:"Jonatas Da Rocha Lemos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F39a98ff0Milton%20Silva.Fotografia%20para%20perfil.211214.jpg"},
    {nome:"ADEFE TORRES VEDRAS",tel:"+351927517984",email:"torresvedras@adefeeuropa.com",endereco:"R. Dias Neiva 12, 2560-319 Torres Vedras",cidade:"Torres Vedras",cp:"2560-319",regiao:"REGIONAL 07",pais:"Portugal",coords:"",pastor:"Carlos Henrique Oliveira Soares",regional:"Rui Filipe Bruno Nascimento",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2F0009E39DB3-%20Carlos%20Henrrique.Fotografia%20para%20perfil.225301.jpg"},
    {nome:"ADEFE TROFA",tel:"+351931180202",email:"trofa@adefeeuropa.com",endereco:"Av. de Paradela 297, 4785-248 Trofa",cidade:"Trofa",cp:"4785-248",regiao:"REGIONAL 08",pais:"Portugal",coords:"",pastor:"Daniel Da Silva Simas",regional:"Thiago Da Silva Dos Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2Ff4fdf159DANIEL.Fotografia%20para%20perfil.225732.jpg"},
    {nome:"ADEFE VILA DAS AVES",tel:"+351931180202",email:"viladasaves@adefeeuropa.com",endereco:"R. Dom Nuno Álvares Pereira 21, 4795-059 Vila das Aves",cidade:"Vila das Aves",cp:"4795-059",regiao:"REGIONAL 08",pais:"Portugal",coords:"",pastor:"Thiago Da Silva Dos Santos",regional:"Thiago Da Silva Dos Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2FuXqM2qNDCz.Fotografia%20para%20perfil.223536.jpg"},
    {nome:"ADEFE VILA NOVA DE GAIA",tel:"+351931180202",email:"vilanovadegaia@adefeeuropa.com",endereco:"R. Emissor 172, 4400-436 Canidelo",cidade:"Vila Nova de Gaia",cp:"4400-436",regiao:"REGIONAL 08",pais:"Portugal",coords:"41.133318,-8.646740",pastor:"Thiago Da Silva Dos Santos",regional:"Thiago Da Silva Dos Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2FuXqM2qNDCz.Fotografia%20para%20perfil.223536.jpg"},
    {nome:"ADEFE VISEU",tel:"+351931180202",email:"viseu@adefeeuropa.com",endereco:"R. 21 de Agosto, 3510-120 Viseu",cidade:"Viseu",cp:"3510-120",regiao:"REGIONAL 08",pais:"Portugal",coords:"40.659282,-7.916736",pastor:"Gelciney Silvério",regional:"Thiago Da Silva Dos Santos",img:"https://www.appsheet.com/template/gettablefileurl?appName=SGFAE-SystemManagementFinanceandPeopleofADEFEEUROPA-4463353&tableName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA&fileName=Cadastro%20Geral%20de%20Membros%20e%20Obreiros%20Fi%C3%A9is%20da%20ADEFE%20EUROPA_Images%2Fea63d121Gelciney.Fotografia%20para%20perfil.091558.jpg"}
  ];

  var activePais = 'all';
  var searchTerm = '';

  function sortPaises(paises) {
    return paises.sort(function (a, b) {
      if (a === 'Portugal') return -1;
      if (b === 'Portugal') return 1;
      return a.localeCompare(b);
    });
  }

  function groupData(list) {
    var g = {};
    list.forEach(function (ig) {
      if (!g[ig.pais]) g[ig.pais] = {};
      if (!g[ig.pais][ig.regiao]) g[ig.pais][ig.regiao] = [];
      g[ig.pais][ig.regiao].push(ig);
    });
    return g;
  }

  function filterIgrejas() {
    var q = searchTerm.toLowerCase();
    return IGREJAS.filter(function (ig) {
      var matchPais = activePais === 'all' || ig.pais === activePais;
      var matchSearch = !q ||
        ig.nome.toLowerCase().indexOf(q) !== -1 ||
        ig.cidade.toLowerCase().indexOf(q) !== -1 ||
        ig.pastor.toLowerCase().indexOf(q) !== -1;
      return matchPais && matchSearch;
    });
  }

  function openModal(ig) {
    var mapHtml = '';
    if (ig.coords) {
      var p = ig.coords.split(',');
      var lat = parseFloat(p[0]), lon = parseFloat(p[1]);
      mapHtml = '<div class="ratio ratio-16x9 mt-3 rounded overflow-hidden">' +
        '<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=' +
        (lon - 0.008) + ',' + (lat - 0.008) + ',' + (lon + 0.008) + ',' + (lat + 0.008) +
        '&layer=mapnik&marker=' + lat + ',' + lon + '" loading="lazy" style="border:0"></iframe></div>';
    }
    var html = '<div class="igm-top">' +
      '<h5 class="igm-nome">' + ig.nome + '</h5>' +
      '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>' +
      '</div>' +
      '<div class="igm-content">' +
      '<div class="igm-photo-col">' +
      '<img src="' + ig.img + '" alt="Pr. ' + ig.pastor + '" class="igm-photo" />' +
      '<p class="igm-pastor-name">Pr. ' + ig.pastor + '</p>' +
      '</div>' +
      '<div class="igm-info-col">' +
      '<p><strong><i class="bx bx-map-pin"></i> Endereço:</strong> ' + ig.endereco + '</p>' +
      (ig.cp ? '<p><strong><i class="bx bx-mail-send"></i> Código Postal:</strong> ' + ig.cp + '</p>' : '') +
      '<p><strong><i class="bx bx-buildings"></i> Cidade:</strong> ' + ig.cidade + ' — ' + (PAIS_PT[ig.pais] || ig.pais) + '</p>' +
      '<p><strong><i class="bx bx-phone"></i> Tel.:</strong> <a href="tel:' + ig.tel + '">' + ig.tel + '</a></p>' +
      '<p><strong><i class="bx bx-envelope"></i> E-mail:</strong> <a href="mailto:' + ig.email + '">' + ig.email + '</a></p>' +
      (ig.regional ? '<p><strong><i class="bx bx-user-pin"></i> Pastor Regional:</strong> ' + ig.regional + '</p>' : '') +
      '</div></div>' +
      (mapHtml ? '<div class="igm-map">' + mapHtml + '</div>' : '');
    document.getElementById('igrejaModalContent').innerHTML = html;
    new bootstrap.Modal(document.getElementById('igrejaModal')).show();
  }

  function renderTabs() {
    var container = document.getElementById('igrejas-pais-filter');
    var paises = sortPaises(Object.keys(groupData(IGREJAS)));
    var html = '<button class="igr-filter-btn' + (activePais === 'all' ? ' active' : '') + '" data-pais="all">Todos (' + IGREJAS.length + ')</button>';
    paises.forEach(function (pais) {
      var flag = FLAGS[pais] || '';
      var count = IGREJAS.filter(function (i) { return i.pais === pais; }).length;
      html += '<button class="igr-filter-btn' + (activePais === pais ? ' active' : '') + '" data-pais="' + pais + '">' + flag + ' ' + (PAIS_PT[pais] || pais) + ' (' + count + ')</button>';
    });
    container.innerHTML = html;
  }

  function renderGrid() {
    var filtered = filterIgrejas();
    var grouped = groupData(filtered);
    var paises = sortPaises(Object.keys(grouped));
    var container = document.getElementById('igrejas-grid');

    if (filtered.length === 0) {
      container.innerHTML = '<p class="text-center py-4 text-muted">Nenhuma igreja encontrada.</p>';
      return;
    }

    var html = '';
    paises.forEach(function (pais) {
      var flag = FLAGS[pais] || '';
      var regioes = Object.keys(grouped[pais]).sort();
      var totalPais = 0;
      regioes.forEach(function (r) { totalPais += grouped[pais][r].length; });

      html += '<div class="igr-country">' +
        '<div class="igr-country-bar">' +
        '<span class="igr-flag">' + flag + '</span>' +
        '<span class="igr-country-name">' + (PAIS_PT[pais] || pais) + '</span>' +
        '<span class="igr-count">' + totalPais + ' igreja' + (totalPais > 1 ? 's' : '') + '</span>' +
        '</div>';

      regioes.forEach(function (regiao) {
        var igrejas = grouped[pais][regiao];
        html += '<div class="igr-region">' +
          '<h6 class="igr-region-title">' + regiao + '</h6>' +
          '<div class="igr-list">';
        igrejas.forEach(function (ig) {
          html += '<button class="igr-item" data-idx="' + IGREJAS.indexOf(ig) + '">' +
            'AD ' + ig.nome.replace('ADEFE ', '') +
            '</button>';
        });
        html += '</div></div>';
      });

      html += '</div>';
    });

    container.innerHTML = html;
  }

  function init() {
    renderTabs();
    renderGrid();

    // Filtro por país
    document.getElementById('igrejas-pais-filter').addEventListener('click', function (e) {
      var btn = e.target.closest('.igr-filter-btn');
      if (!btn) return;
      activePais = btn.getAttribute('data-pais');
      renderTabs();
      renderGrid();
    });

    // Pesquisa
    var searchTimeout;
    document.getElementById('igrejas-search').addEventListener('input', function (e) {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function () {
        searchTerm = e.target.value;
        renderGrid();
      }, 250);
    });

    // Modal ao clicar numa igreja
    document.getElementById('igrejas-grid').addEventListener('click', function (e) {
      var btn = e.target.closest('.igr-item');
      if (!btn) return;
      openModal(IGREJAS[parseInt(btn.getAttribute('data-idx'))]);
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
