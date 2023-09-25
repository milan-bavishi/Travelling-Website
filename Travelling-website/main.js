const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

const btn = document.querySelector('.button'); 
    btn.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });