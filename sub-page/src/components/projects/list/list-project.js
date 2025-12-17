const fullView = document.getElementById('fullView');

if (fullView) {
    fullView.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
        const recipient = JSON.parse(button.getAttribute('data-bs-info'));

        const infoImage = fullView.querySelector('.info-image');
        const infoDate = fullView.querySelector('.info-date');
        const infoTitle = fullView.querySelector('.info-title');
        const infoText = fullView.querySelector('.info-text');

        infoImage.src = recipient?.image;
        infoTitle.textContent = recipient?.title;
        infoDate.textContent = `در تاریخ : ${recipient?.date}`;
        infoText.textContent = recipient?.text;
    })
}