document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DA BARRA DE PESQUISA ---
    const formularioDePesquisa = document.querySelector('form.d-flex');
    const campoDePesquisa = document.querySelector('input[type="search"]');

    // Função auxiliar para selecionar elementos com fallback
    const getText = (selector, fallback = '') => {
        const el = document.querySelector(selector);
        return el ? el.textContent : fallback;
    };

    // Mapeia todas as seções e seus textos para busca
    const conteudosPesquisaveis = [
        { elemento: document.querySelector('#galeria-verificacao'), texto: 'Galeria de fotos carrossel' },
        { elemento: document.querySelector('h1#list-menu'), texto: 'Carinho e Amor é o nosso lema' },
        { elemento: document.querySelector('h2'), texto: getText('h2') },  // Removido :contains
        { elemento: document.querySelector('h1.article'), texto: 'Educação com carinho e amor' },
        { elemento: document.querySelector('section > p'), texto: getText('section > p') },
        { elemento: document.querySelector('h2.text-center'), texto: 'Veja alguns de nossos projetos' },
        { elemento: document.querySelector('.method h1.subtitle-aguia'), texto: 'EDUCAÇÃO, FERRAMENTA PARA TRANSFORMAÇÃO' },
        { elemento: document.querySelector('.method h2.subtitle-aguia'), texto: 'Metodologia e Filosofia' },
        { elemento: document.querySelector('section.method'), texto: 'Base de valores; Aprendizagem ativa; Conteúdo com sentido; Alfabetização fônica; Materiais variados; Literatura Viva; Linguagem e matemática na prática; Tecnologia e criatividade; Formação integral.' },
    ];

    // Galeria fixa
    const galeriaImagensFixas = document.querySelector('.container.text-center > .row').parentNode;

    // Lista baseada no ALT das imagens da galeria fixa
    const textosGaleria = [...document.querySelectorAll('#aguia-photo')].map(img =>
        img.alt ? img.alt.toLowerCase() : ''
    );

    // Evento de pesquisa
    formularioDePesquisa.addEventListener('submit', (event) => {
        event.preventDefault();

        const termo = campoDePesquisa.value.toLowerCase().trim();

        // Campo vazio → mostra tudo
        if (termo === '') {
            conteudosPesquisaveis.forEach(item => {
                if (item.elemento) item.elemento.style.display = 'block';
            });
            galeriaImagensFixas.style.display = 'block';
            return;
        }

        // Verifica cada item de texto
        conteudosPesquisaveis.forEach(item => {
            if (!item.elemento) return;

            const textoDoItem = item.texto.toLowerCase();
            item.elemento.style.display = textoDoItem.includes(termo) ? 'block' : 'none';
        });

        // Verifica galeria fixa pelo ALT das imagens
        const encontrouNaGaleria = textosGaleria.some(txt => txt.includes(termo));

        galeriaImagensFixas.style.display = encontrouNaGaleria ? 'block' : 'none';
    });
});
