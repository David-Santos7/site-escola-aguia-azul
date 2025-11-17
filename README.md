🦅 Colégio Águia Azul
📖 Sobre o Projeto

O site institucional do Colégio Águia Azul foi desenvolvido com o objetivo de apresentar de forma clara e acessível a identidade educacional da escola, sua história, metodologia, estrutura física, além de divulgar projetos pedagógicos, eventos e atividades do cotidiano escolar.

O colégio se fundamenta em valores cristãos e utiliza a metodologia da Mackenzie Educação, priorizando uma formação integral que abrange aspectos cognitivos, emocionais, sociais e espirituais.

O lema da instituição é:

“Educar é preparar para o hoje e inspirar o amanhã.”

O projeto foi construído priorizando responsividade, visual moderno, navegação intuitiva e acessibilidade, garantindo que pais, alunos e visitantes possam encontrar informações de maneira fácil e rápida.

⚙️ Funcionalidades

O site é formado por páginas e seções integradas, cada uma com propósito informativo e visual:

Página Inicial (index.html)
📷 Apresenta a galeria de fotos, vídeos institucionais, descrição da proposta pedagógica, além de um módulo de pesquisa interna que permite localizar conteúdos por palavra-chave.

Página Sobre a Escola (sobre.html)
📚 Fornece uma descrição detalhada da história, princípios, metodologia Mackenzie, projetos educacionais e valores formativos.

Página de Contato (contato.html)
✉️ Inclui um formulário funcional, com validação no frontend e processamento via PHP para envio de mensagens diretamente à administração.

Carrosséis, cards de vídeo e galerias fixas
As mídias são apresentadas com animações sutis, estrutura responsiva e carregamento otimizado.

Busca interna inteligente (JavaScript)
🔍 A barra de pesquisa permite encontrar rapidamente títulos, textos, cards e imagens, filtrando dinamicamente o conteúdo exibido na página.

🛠️ Tecnologias Utilizadas

Para garantir um resultado moderno, rápido e responsivo, o projeto utiliza:

HTML5: Estrutura semântica das páginas e organização dos conteúdos.

CSS3: Estilização personalizada, baseada em design limpo e responsivo.

Bootstrap 5.3:

sistema de grid

navbar

cards

spacing utilities

responsividade nativa

JavaScript Puro (ES6+):

lógica da barra de pesquisa

carrosséis personalizados

manipulação de DOM

interações dinâmicas

PHP:

processamento backend do formulário de contato

envio seguro de mensagens via e-mail

Fontes personalizadas carregadas via @font-face.

Vídeos e imagens otimizados dentro da estrutura de assets.

🗂️ Estrutura do Projeto

A organização dos arquivos foi construída para manter clareza, manutenção fácil e padronização:

colégio-águia-azul/
├── assets/
│   ├── css/
│   │   ├── sobre.css
│   │   ├── slide.css
│   │   └── style.css
│   ├── font/
│   │   ├── Happy School.ttf
│   │   ├── JandaManateeSolid.ttf
│   │   └── Heroes Legend.ttf
│   ├── image/
│   │   ├── aguia-azul.png
│   │   ├── ClipEscola_logo.png
│   │   ├── mackenzie-logo.png
│   │   └── ... outras imagens
│   ├── js/
│   │   ├── formulario.js
│   │   ├── main.js
│   │   └── busca.js (caso separado)
│   └── videos/
│       ├── gincana.mp4
│       ├── projetos.mp4
│       └── ... outros vídeos
├── backend/
│   └── processa.php
├── contato.html
├── index.html
├── sobre.html
└── README.md

📌 Detalhes

assets/: Arquivos estáticos (CSS, JS, imagens, vídeos e fontes).

backend/: Scripts de processamento PHP.

HTMLs: Estrutura principal do site.

README.md: Documento oficial do projeto (este arquivo).

🚀 Como Executar o Projeto

Para visualizar o projeto localmente:

Baixe ou clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git


Abra a pasta do projeto:

cd colegio-aguia-azul


Clique duas vezes em index.html
ou abra com uma extensão de servidor local (como Live Server).

✔ Para funcionamento do formulário:

Para que o formulário envie mensagens corretamente, é necessário:

Servidor com suporte a PHP 7+

Configuração de SMTP / mail() habilitada

Sem isso, o formulário somente exibirá mensagens locais sem envio real.

🤝 Contribuição

Contribuições são sempre bem-vindas!
Se desejar melhorar o projeto:

Abra uma issue

Envie um pull request

Sugira funcionalidades ou correções

O objetivo é manter o site sempre atualizado e funcional.

📄 Licença

Este projeto está sob a licença MIT.
A licença completa pode ser encontrada no arquivo LICENSE.