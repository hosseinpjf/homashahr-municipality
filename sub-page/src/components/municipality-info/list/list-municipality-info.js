const fullView = document.getElementById('fullView');

if (fullView) {
    fullView.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
        const recipient = JSON.parse(button.getAttribute('data-bs-info'));

        const infoPopulation = fullView.querySelector('.info-population');
        const infoArea = fullView.querySelector('.info-area');

        infoPopulation.textContent = `جمعیت: ${recipient?.population}`;
        infoArea.textContent = `مساحت: ${recipient?.area}`;
    })
}