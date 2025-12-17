const fullView = document.getElementById('fullView');

if (fullView) {
    fullView.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
        const recipient = JSON.parse(button.getAttribute('data-bs-info'));

        const infoImage = fullView.querySelector('.info-image');
        const infoDate = fullView.querySelector('.info-date');
        const infoName = fullView.querySelector('.info-name');
        const infoText = fullView.querySelector('.info-text');

        infoImage.src = recipient?.image;
        infoDate.textContent = `سال خدمت: ${recipient?.date}`;
        infoName.textContent = recipient?.name;
        infoText.textContent = recipient?.text;
    })
}