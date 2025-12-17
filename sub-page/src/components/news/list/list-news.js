const fullView = document.getElementById('fullView');

if (fullView) {
    fullView.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
        const recipient = JSON.parse(button.getAttribute('data-bs-info'));

        const infoImage = fullView.querySelector('.info-image');
        const infoHeadline = fullView.querySelector('.info-headline');
        const infoDate = fullView.querySelector('.info-date');
        const infoTime = fullView.querySelector('.info-time');
        const infoTitle = fullView.querySelector('.info-title');
        const infoText = fullView.querySelector('.info-text');
        const infoSummary = fullView.querySelector('.info-summary');
        const infoDisplay = fullView.querySelector('.info-display');

        infoImage.src = recipient?.image;
        infoHeadline.textContent = recipient?.headline;
        infoTitle.textContent = recipient?.title;
        infoDate.textContent = `در تاریخ : ${recipient?.date}`;
        infoTime.textContent = `در ساعت : ${recipient?.time}`;
        infoSummary.textContent = recipient?.summary;
        infoDisplay.textContent = recipient?.display;
        infoText.textContent = recipient?.text;
    })
}