const distanciaInput = document.getElementById('distanciaInput');
const valorDistancia = document.getElementById('valorDistancia');
const statusPainel = document.getElementById('statusPainel');
const tampaLixeira = document.getElementById('tampaLixeira');
const maoIcone = document.getElementById('maoIcone');

const DISTANCIA_LIMITE = 30; // Distância em cm para acionar o motor

function atualizarSimulacao() {
    const distancia = parseInt(distanciaInput.value, 10);
    valorDistancia.textContent = distancia;

    // Move o ícone da mão visualmente conforme a distância (5cm a 100cm)
    const posicaoEsquerda = 55 - (distancia * 0.45);
    maoIcone.style.left = `${posicaoEsquerda}%`;

    // Lógica do Sensor Ultrassônico
    if (distancia <= DISTANCIA_LIMITE) {
        tampaLixeira.classList.add('aberta');
        statusPainel.classList.add('ativo');
        statusPainel.textContent = `Objeto detectado a ${distancia} cm! (Tampa Aberta)`;
    } else {
        tampaLixeira.classList.remove('aberta');
        statusPainel.classList.remove('ativo');
        statusPainel.textContent = `Aguardando aproximação — Distância: ${distancia} cm (Tampa Fechada)`;
    }
}

// Escuta mudanças no controle deslizante
distanciaInput.addEventListener('input', atualizarSimulacao);

// Inicializa a posição correta ao carregar a página
atualizarSimulacao();

