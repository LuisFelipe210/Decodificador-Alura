# Decodificador de Texto

Este projeto é um decodificador de texto simples, desenvolvido em HTML, CSS e JavaScript. Ele permite criptografar e descriptografar mensagens utilizando uma substituição de caracteres específica.

## Funcionalidades

- **Criptografar Texto**: Converte texto inserido pelo usuário em uma forma criptografada, substituindo letras por padrões específicos.
- **Descriptografar Texto**: Converte o texto criptografado de volta para sua forma original.
- **Interface Simples**: A interface é intuitiva, com orientações claras para o usuário.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do projeto.
- **CSS3**: Estilização da interface.
- **JavaScript**: Lógica para criptografia e descriptografia.

## Regras de Criptografia

A criptografia é feita substituindo letras específicas por padrões, como descrito abaixo:

- A letra **"e"** é substituída por **"enter"**.
- A letra **"i"** é substituída por **"imes"**.
- A letra **"a"** é substituída por **"ai"**.
- A letra **"o"** é substituída por **"ober"**.
- A letra **"u"** é substituída por **"ufat"**.

Exemplo:
- Texto original: `gato`
- Texto criptografado: `gaitober`

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

/
├── assets/                 # Imagens utilizadas na interface
├── css/
│   └── main.css            # Arquivo de estilização
├── script.js               # Arquivo JavaScript com a lógica de criptografia
└── index.html              # Arquivo HTML principal

## Como Utilizar

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/LuisFelipe210/decodificador.git
2. Abra o Arquivo index.html no seu navegador preferido.
3. Digite o Texto: Insira o texto que deseja criptografar ou descriptografar no campo de entrada.
4. Clique nos Botões: Use os botões “Criptografar” e “Descriptografar” para processar o texto.
