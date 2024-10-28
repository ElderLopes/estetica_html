const services = [
    {
        title: "Lavagem simples",
        shortDescription: "É um processo de lavagem mais rápida, onde se prioriza mais a lataria do veículo...",
        fullDescription: "Lavagem simples: é um processo de lavagem mais rápida, onde se prioriza mais a lataria do veículo. O interior é aspirado e os pneus ganham atenção também.",
        image: "../assets/Lavacao.jpg" 
    },
    {
        title: "Lavagem completa",
        shortDescription: "Inclui aplicação de uma proteção a escolha do cliente, cera líquida...",
        fullDescription: "Lavagem completa: além dos itens da lavagem simples, inclui aplicação de uma proteção a escolha do cliente, cera líquida, cera em pasta ou selante de pintura e limpeza tradicional na interna.",
        image: "../assets/Lavacao.jpg" 
    },
    {
        title: "Lavagem detalhada",
        shortDescription: "Ideal para quem busca uma limpeza eficiente com atenção a detalhes...",
        fullDescription: "Lavagem detalhada: serviço ideal para quem busca uma limpeza eficiente com atenção a detalhes. É um método de lavagem pesada para descontaminar a lataria, emblemas, retrovisores, borrachas dos vidros, entradas de portas, e remoção de chuva ácida dos vidros. Inclui aplicação de proteção a escolha do cliente (cera líquida, cera em pasta ou selante de pintura).",
        image: "../assets/LavacaoDetalhada.jpg" 
    },
    {
        title: "Lavagem FULL Jotta88",
        shortDescription: "Limpeza completa com atenção a mais detalhes e proteção...",
        fullDescription: "Lavagem FULL Jotta88: inclui todos os itens da lavagem detalhada, além de limpeza e proteção do motor, remoção das borrachas das portas, lanternas traseiras e rodas para tratamento das caixas de rodas. Os plásticos externos recebem revitalização, e o chassis é limpo e protegido com verniz. Inclui aplicação de um selante com durabilidade de até 9 meses.",
        image: "../assets/Lavacao.jpg" 
    },
    {
        title: "Lavação e proteção do motor",
        shortDescription: "Limpeza do motor com proteção, evitando danos ao veículo...",
        fullDescription: "Lavação e proteção do motor: limpeza cuidadosa do motor, evitando acúmulo de impurezas que podem prejudicar a parte elétrica e componentes do veículo. Inclui proteção com vitrificador ou verniz, conforme a escolha do cliente.",
        image: "../assets/LavacaoMotor.jpg" 
    },
    {
        title: "Higienização parcial",
        shortDescription: "Higienização parcial com remoção dos bancos e hidratação...",
        fullDescription: "Higienização parcial: remoção dos bancos para higienização e, no caso de couro, aplicação de hidratação. O restante do veículo recebe uma limpeza tradicional.",
        image: "../assets/Higienizacao.jpg" 
    },
    {
        title: "Higienização completa",
        shortDescription: "Remoção dos bancos e higienização de todo o interior...",
        fullDescription: "Higienização completa: remoção dos bancos para higienização, com hidratação de couro se necessário. Inclui higienização do teto, portas, painel, remoção do Step para limpeza do porta-malas, e limpeza do carpete.",
        image: "../assets/Higienizacao.jpg" 
    },
    {
        title: "Higienização completa com remoção do carpete",
        shortDescription: "Higienização completa com remoção do carpete para troca de feltros...",
        fullDescription: "Higienização completa com remoção do carpete: além de todos os serviços da higienização completa, o carpete é removido para troca dos feltros. Ideal para veículos com infiltração ou que sofreram com enchentes.",
        image: "../assets/Higienizacao.jpg" 
    },
    {
        title: "Polimento dos faróis",
        shortDescription: "Restaura a transparência e luminosidade dos faróis...",
        fullDescription: "Polimento dos faróis: restaura a transparência e capacidade de iluminação dos faróis, aumentando a visibilidade noturna e evitando multas. Segundo o CTB, conduzir o veículo com defeito no sistema de iluminação é infração média.",
        image: "../assets/PolimentoFarol.jpg" // Caminho para a imagem
    },
    {
        title: "Tratamento nas caixas de rodas",
        shortDescription: "Limpeza profunda das caixas de rodas e suspensão...",
        fullDescription: "Tratamento nas caixas de rodas: indicado para caixas de rodas com sujeira difícil de remover. A remoção das rodas permite uma limpeza profunda, eliminando piche, tintas, concretos, óleo diesel, entre outras sujeiras.",
        image: "../assets/TratamentoCaixaDeRoda.jpg" 
    },
    {
        title: "Tratamento de Chassis",
        shortDescription: "Revitalização do chassis, prevenindo ferrugem e deterioração...",
        fullDescription: "Tratamento de Chassis: serviço que revitaliza o chassi, prevenindo a oxidação, corrosão e ressecamento dos plásticos. Ajuda a manter o carro livre de ferrugem e outros danos a longo prazo.",
        image: "../assets/TratamentoChassis.jpg" 
    },
    {
        title: "Polimento Comercial",
        shortDescription: "Polimento de uma etapa para remover marcas leves e promover brilho...",
        fullDescription: "Polimento Comercial: ideal para veículos à venda, este serviço remove marcas de lavagem e chuva ácida com um polimento de uma etapa. Promove brilho, sem o processo mais intenso de polimento técnico.",
        image: "../assets/Polimento.jpg" 
    },
    {
        title: "Polimento (Espelhamento)",
        shortDescription: "Polimento de três etapas para remover riscos e promover brilho intenso...",
        fullDescription: "Polimento técnico (Espelhamento): polimento de três etapas (corte, refino e brilho) para remover riscos que não afetaram o verniz. Promove um brilho intenso e aparência nova ao veículo.",
        image: "../assets/Polimento.jpg" 
    },
    {
        title: "Vitrificação de Pintura",
        shortDescription: "Protege a pintura do veículo contra agentes externos...",
        fullDescription: "Vitrificação de Pintura: uma película protetora de nano-revestimento que evita danos causados por fezes de aves, raios solares e outros agentes externos. Com manutenção adequada, a vitrificação pode durar de 1 a 5 anos.",
        image: "../assets/Vitrificacao.jpg" 
    },
    {
        title: "PPF (Paint Protection Film)",
        shortDescription: "Película de proteção de pintura que age como um escudo contra impactos leves...",
        fullDescription: "PPF: uma película transparente de poliuretano que protege a pintura contra pequenos impactos e raspões. Ideal para veículos de alto valor, preserva o brilho e evita manchas causadas por fezes de pássaros e seiva de árvores. Também possui capacidade regenerativa para pequenos riscos.",
        image: "../assets/imagcelularporche.jpeg" // Caminho para a imagem
    },
    {
        title: "Martelinho de Ouro",
        shortDescription: "Reparo de amassados sem necessidade de repintura...",
        fullDescription: "Martelinho de Ouro: técnica para eliminar pequenos amassados sem repintura. Repara danos leves, como batidas e arranhões, e é uma solução rápida e econômica. Preserva a pintura original do veículo.",
        image: "../assets/MartelinhoDeOuro.jpg" 
    },
    {
        title: "Polimento do Pára-Brisa",
        shortDescription: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
        fullDescription: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        image: "../assets/PolimentoParaBrisa.jpg" 
    }
];

let currentIndex = 0;
const visibleCards = 4; // Mostrar 4 cards por vez
const carousel = document.querySelector('.inner');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');
let autoSlideInterval;

const phoneNumber = "554788085196";

// Carregar os serviços no carrossel
function loadServices() {
    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.shortDescription}</p>
            <img src="${service.image}" alt="${service.title}" class="card-image">
        `;
        card.addEventListener('click', () => openModal(service));
        carousel.appendChild(card);
    });
}

// Função para mover para o próximo grupo de cards
function goToNext() {
    currentIndex = (currentIndex + visibleCards) % services.length;
    updateCarousel();
    resetAutoSlide();
}

// Função para mover para o grupo anterior de cards
function goToPrevious() {
    currentIndex = (currentIndex - visibleCards + services.length) % services.length;
    updateCarousel();
    resetAutoSlide();
}

// Atualizar a posição do carrossel
function updateCarousel() {
    const cardWidth = document.querySelector('.card').offsetWidth + 15; // Considerar a margem direita
    const translateX = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}

// Abrir modal com informações completas do serviço
function openModal(service) {
    modalTitle.textContent = service.title;
    modalDescription.textContent = service.fullDescription;
    modal.style.display = 'block';
}

// Fechar modal
closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Configurar o intervalo para mover automaticamente a cada 8 segundos
function startAutoSlide() {
    autoSlideInterval = setInterval(goToNext, 8000); // Mudar de card a cada 8 segundos
}

// Reiniciar o intervalo automático após interação
function resetAutoSlide() {
    clearInterval(autoSlideInterval);  // Limpar o intervalo atual
    startAutoSlide();  // Reiniciar o intervalo
}
function handleWhatsAppClick() {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
}

// Controle dos botões do carrossel
document.getElementById('next-btn').addEventListener('click', goToNext);
document.getElementById('prev-btn').addEventListener('click', goToPrevious);

// Carregar o conteúdo inicial
loadServices();
updateCarousel();
startAutoSlide();  // Iniciar a navegação automática assim que o carrossel for carregado
