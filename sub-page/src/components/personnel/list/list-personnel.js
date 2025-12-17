const fullView = document.getElementById('fullView');

if (fullView) {
    fullView.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
        const recipient = JSON.parse(button.getAttribute('data-bs-info'));

        const infoImage = fullView.querySelector('.info-image');
        const infoName = fullView.querySelector('.info-name');
        const infoRole = fullView.querySelector('.info-role');

        infoImage.src = recipient?.image;
        infoName.textContent = recipient?.name;
        infoRole.textContent = recipient?.role;
    })
}