const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function() {
        const img = card.querySelector('img');
        const imagSrc = img.src;
        const imgName = imagSrc.split('/').pop().split('.')[0];
        window.location.href =  `/SmallProjects/${imgName}/index.html`;
    });
});