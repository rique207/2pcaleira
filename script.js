// Inicializar AOS (Animação ao Rolagem)
AOS.init({
    duration: 1000, // Duração da animação (em ms)
    offset: 200,    // Distância para iniciar a animação
});

// Funções para o zoom das imagens
function openZoom(src) {
    const modal = document.getElementById("zoomModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = src;
}

function closeZoom() {
    const modal = document.getElementById("zoomModal");
    modal.style.display = "none";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Captura os valores do formulário
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Define os parâmetros do e-mail
    const subject = encodeURIComponent("Novo Pedido de Contato - 2PCaleira");
    const body = encodeURIComponent(
        `Nome: ${name}\n` +
        `Morada: ${address}\n` +
        `Telefone: ${phone}\n` +
        `Email: ${email}\n\n` +
        `Pedido:\n${message}`
    );

    // Monta a URL para abrir o aplicativo Gmail
    const mailtoLink = `mailto:suporte@2pcaleira.com?subject=${subject}&body=${body}`;

    // Tenta abrir o link mailto, que pode abrir o app do Gmail dependendo do dispositivo
    window.location.href = mailtoLink;
});
