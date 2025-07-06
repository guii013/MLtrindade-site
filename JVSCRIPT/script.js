document.addEventListener('DOMContentLoaded', () => {
    // Número de WhatsApp
    const numeroWhatsApp = '5511958007259';
  
    // Botões dos serviços
    const btnChaveiro = document.querySelector('.btn-chaveiro');
    const btnCarreto = document.querySelector('.btn-carreto');
    const btnMateriais = document.querySelector('.btn-materiais');
  
    if (btnChaveiro) {
      btnChaveiro.addEventListener('click', () => {
        window.open(`https://wa.me/${numeroWhatsApp}?text=Olá! Gostaria de saber mais sobre o serviço de chaveiro.`, '_blank');
      });
    }
  
    if (btnCarreto) {
      btnCarreto.addEventListener('click', () => {
        window.open(`https://wa.me/${numeroWhatsApp}?text=Olá! Estou interessado no serviço de carreto. Pode me passar mais informações?`, '_blank');
      });
    }
  
    if (btnMateriais) {
      btnMateriais.addEventListener('click', () => {
        window.open(`https://wa.me/${numeroWhatsApp}?text=Olá! Quero informações sobre materiais para obras.`, '_blank');
      });
    }
    btnChaveiro.addEventListener('click', () => {
        console.log("Clique no botão Chaveiro");
        window.open(`https://wa.me/${numeroWhatsApp}?text=Olá! Gostaria de saber mais sobre o serviço de chaveiro.`, '_blank');
      });
    });