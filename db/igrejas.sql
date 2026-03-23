-- Script de Criação e Inserção para MySQL
-- Gerado a partir de tabela.md

CREATE TABLE IF NOT EXISTS igrejas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    grupo VARCHAR(255),
    nome VARCHAR(255),
    telefone VARCHAR(100),
    sms_telefone VARCHAR(100),
    email VARCHAR(255),
    superintendente_nome VARCHAR(255),
    superintendente_img VARCHAR(255),
    tesoureiro_nome VARCHAR(255),
    tesoureiro_img VARCHAR(255),
    secretario_nome VARCHAR(255),
    secretario_img VARCHAR(255),
    lider_jovens_nome VARCHAR(255),
    lider_jovens_img VARCHAR(255),
    pastor_assistente_nome VARCHAR(255),
    pastor_assistente_img VARCHAR(255),
    pastor_super_assistente_nome VARCHAR(255),
    pastor_super_assistente_img VARCHAR(255),
    pastor_regional_nome VARCHAR(255),
    pastor_regional_img VARCHAR(255),
    pastor_nacional_nome VARCHAR(255),
    pastor_nacional_img VARCHAR(255),
    endereco TEXT,
    mapa_url TEXT,
    aniversario VARCHAR(100),
    banco VARCHAR(100)
);

INSERT INTO igrejas (grupo, nome, telefone, sms_telefone, email, superintendente_nome, superintendente_img, tesoureiro_nome, tesoureiro_img, secretario_nome, secretario_img, lider_jovens_nome, lider_jovens_img, pastor_assistente_nome, pastor_assistente_img, pastor_super_assistente_nome, pastor_super_assistente_img, pastor_regional_nome, pastor_regional_img, pastor_nacional_nome, pastor_nacional_img, endereco, mapa_url, aniversario, banco) VALUES
    ('África', 'AD GUINEA-BISSAU', NULL, NULL, NULL, 'Robson Ferreira Santos', 'assets/unnamed.jpg', 'Vilmar Garcia Couto', 'assets/unnamed(1).jpg', 'EB4888BA-D041-4A9E-B1CA-72544139197A', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Robson Ferreira Santos', 'assets/unnamed.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
    ('DURANGUESADO', 'AD DURANGO', NULL, NULL, NULL, 'Vilmar Garcia Couto', 'assets/unnamed(1).jpg', 'Malena Villarreal', 'assets/unnamed(2).jpg', 'David Rocha Borges Couto', 'assets/unnamed(3).jpg', 'Fernando Bonifacio', 'assets/unnamed(4).jpg', NULL, NULL, NULL, NULL, 'Vilmar Garcia Couto', 'assets/unnamed(1).jpg', 'Efferson Santos', 'assets/unnamed(5).jpg', 'Polígono Industrial de Industrial de Mallabiena, 13, 48215 Iurreta, Biscay, Espanha', 'https://maps.app.goo.gl/25L48QVzuTMpugmR7', NULL, NULL),
    ('DURANGUESADO', 'AD ELORRIO', NULL, NULL, NULL, 'Robson Ferreira Santos', 'assets/unnamed.jpg', 'Anai Marian Otalora Acha', 'assets/unnamed(6).jpg', 'Anai Marian Otalora Acha', 'assets/unnamed(6).jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'Vilmar Garcia Couto', 'assets/unnamed(1).jpg', 'Efferson Santos', 'assets/unnamed(5).jpg', 'Urkizuaran Kalea, 5, 48230 Elorrio, Bizkaia, Espanha', 'https://maps.app.goo.gl/C8xCptgmHqcTwshV9', NULL, NULL),
    ('GRAN BILBAO', 'AD BARAKALDO', NULL, NULL, NULL, 'Efferson Santos', 'assets/unnamed(5).jpg', 'Samara Oliveira Neri De Paula', 'assets/unnamed(7).jpg', 'Fabiula Nogueira Costa', 'assets/unnamed(8).jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'Efferson Santos', 'assets/unnamed(5).jpg', 'Efferson Santos', 'assets/unnamed(5).jpg', 'Retuerto Kalea, 58, 1 planta, 48903 San Vicente de Barakaldo, Biscay, Espanha', 'https://maps.app.goo.gl/VfjGXPAjaPWmgd3NA', NULL, NULL),
    ('GRAN BILBAO', 'AD BILBAO', NULL, NULL, NULL, 'Edinso Yanez', 'assets/unnamed(9).jpg', 'Genesis Zeledón Peralta', 'assets/unnamed(10).jpg', 'Margarita Peralta', 'assets/unnamed(11).jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'Efferson Santos', 'assets/unnamed(5).jpg', 'Efferson Santos', 'assets/unnamed(5).jpg', NULL, NULL, NULL, NULL),
    ('GRAN BILBAO', 'AD BOLUETA', NULL, NULL, NULL, 'Illisnois Pérez Tamé', 'assets/unnamed(12).jpg', 'Marcia De Melo Oliveira Silva', 'assets/unnamed(13).jpg', 'Yulianny Molero', 'assets/unnamed(14).jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'Efferson Santos', 'assets/unnamed(5).jpg', 'Efferson Santos', 'assets/unnamed(5).jpg', 'Crt. Bilbao Galdakao, n2, 3 izq , edificio Bolueta, 48004, bilbao', NULL, NULL, NULL),
    ('GUIPÚZCOA', 'AD IRÚN', NULL, NULL, NULL, 'Josenildo Souza De Jesus', 'assets/unnamed(16).jpg', 'Maria Lourdes Osório Ferrufino', 'assets/unnamed(17).jpg', 'Adelina Neta Dos Santos De Jesus', 'assets/unnamed(18).jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'Onias Ferreira Da Silva', 'assets/unnamed(15).jpg', 'Efferson Santos', 'assets/unnamed(5).jpg', 'Aduana Kalea, 27, 20302 Irun, Gipuzkoa, Espanha', 'https://maps.app.goo.gl/VwpA4s3B1PVRkBDj6', NULL, NULL),
    ('REGIONAL 01', 'COMADEFE', NULL, NULL, NULL, 'Robson Ferreira Santos', 'assets/unnamed.jpg', 'Vilmar Garcia Couto', 'assets/unnamed(1).jpg', 'EB4888BA-D041-4A9E-B1CA-72544139197A', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
    ('REGIONAL 01', 'AD ALHANDRA', NULL, NULL, NULL, 'Eliel Veras Oliveira', 'assets/unnamed(20).jpg', 'Karen Waleska Silva Freitas', 'assets/unnamed(21).jpg', 'Pablo Camargo Ferreira', 'assets/unnamed(22).jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'Sanzio Elmo Sousa Soares', 'assets/unnamed(19).jpg', NULL, NULL, 'R. Combatentes 06, 2600-427 Alhandra', 'https://maps.app.goo.gl/Pnvhb1SsWV2v1V4f7?g_st=ic', NULL, NULL),
    ('REGIONAL 01', 'AD ALVERCA', NULL, NULL, NULL, 'Jackson Elias Pereira', 'assets/unnamed(23).jpg', 'Alexandra Gonçalves', 'assets/unnamed(24).jpg', 'Débora Santos Pereira', 'assets/unnamed(25).jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'Sanzio Elmo Sousa Soares', 'assets/unnamed(19).jpg', NULL, NULL, 'R. José António do Carmo 19, 2615-106 Alverca do Ribatejo', 'https://maps.app.goo.gl/PwNmbjorJx5yifDm8?g_st=ic', NULL, NULL),
    ('REGIONAL 01', 'AD PORTO ALTO', NULL, NULL, NULL, 'David Rodrigues Vieira', 'assets/unnamed(26).jpg', 'Guilherme De Oliveira Neves', 'assets/unnamed(27).jpg', 'Vivian Florentino Arruda Rocha', 'assets/unnamed(28).jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'Sanzio Elmo Sousa Soares', 'assets/unnamed(19).jpg', NULL, NULL, 'Av. Nações Unidas, Porto Alto, 2135-197 Samora Correia', 'https://maps.app.goo.gl/W4qjSm68Lg9Pyv5d7?g_st=ic', NULL, NULL),
    ('REGIONAL 01', 'AD SEDE_CENTRAL', NULL, NULL, NULL, 'Sanzio Elmo Sousa Soares', 'assets/unnamed(19).jpg', 'José Silva', 'assets/unnamed(29).jpg', 'Talia Almeida Neves', 'assets/unnamed(30).jpg', NULL, NULL, NULL, NULL, 'Sanzio Elmo Sousa Soares', 'assets/unnamed(19).jpg', 'Sanzio Elmo Sousa Soares', 'assets/unnamed(19).jpg', NULL, NULL, 'R. Alexandre Herculano 17, 2005-246 Santarém', 'https://maps.app.goo.gl/rhLToDPEvUGJohXaA', NULL, NULL),
    ('REGIONAL 01', 'REDE SEMEAR Outros Países ou Cidades', NULL, NULL, NULL, 'Robson Ferreira Santos', 'assets/unnamed.jpg', 'Vilmar Garcia Couto', 'assets/unnamed(1).jpg', 'Hilmar Sathler Cesar', 'assets/unnamed(31).jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
    ('REGIONAL 02', 'AD CATUJAL', NULL, NULL, NULL, 'Tiago Pereira Da Silva', 'assets/unnamed(33).jpg', 'Laiane Jussara Morais Da Costa Silva', 'assets/unnamed(34).jpg', 'Sara Teixeira', 'assets/unnamed(35).jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'João Paulo Santos Moreira', 'assets/unnamed(32).jpg', NULL, NULL, 'R. José Gomes Ferreira 72, 2680-352 Unhos', 'https://maps.app.goo.gl/DxXPhiQU3M8yCxtHA?g_st=ic', NULL, NULL),
    ('REGIONAL 02', 'AD MONTIJO', NULL, NULL, NULL, 'Thiago Portela Medeiros', 'assets/unnamed(36).jpg', 'Guilherme Antonio Ferreira', 'assets/unnamed(37).jpg', 'Rones Pinto Dos Santos', 'assets/unnamed.png', NULL, NULL, NULL, NULL, NULL, NULL, 'João Paulo Santos Moreira', 'assets/unnamed(32).jpg', NULL, NULL, 'R. José Joaquim Marques 40 A, 2870-362 Montijo', 'https://maps.app.goo.gl/QS3EYryRUkM1gT269?g_st=ic', NULL, NULL),
    ('REGIONAL 02', 'AD ODIVELAS', NULL, NULL, NULL, 'Apolo Antoni Almeida', 'assets/unnamed(38).jpg', 'Allan Conrado Reinaldo', 'assets/unnamed(39).jpg', 'Natália Cristina Rocha Da Paz', 'assets/unnamed(40).jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'João Paulo Santos Moreira', 'assets/unnamed(32).jpg', NULL, NULL, 'Rua Major João Luís de Moura, Armazéns B, 1685-253 Famões', 'https://maps.app.goo.gl/2eFgu7vtUGNwBhvj8?g_st=ic', NULL, NULL);
