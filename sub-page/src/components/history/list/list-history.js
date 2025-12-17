const fullView = document.getElementById('fullView');

if (fullView) {
    fullView.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
        const recipient = JSON.parse(button.getAttribute('data-bs-info'));

        const infoTitle = fullView.querySelector('.info-title')
        const infoText = fullView.querySelector('.info-text')

        infoTitle.textContent = `${recipient?.title}:`;
        infoText.textContent = recipient?.text;
    })
}