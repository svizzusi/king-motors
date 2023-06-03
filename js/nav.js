let openham = document.querySelector('.openham');
let closeham = document.querySelector('.closeham');
let navList = document.querySelector('.nav-list');

openham.addEventListener('click', () => {
    navList.style.display = 'flex';
    openham.style.display = 'none';
    closeham.style.display = 'block';
})
closeham.addEventListener('click', () => {
    navList.style.display = 'none';
    openham.style.display = 'block';
    closeham.style.display = 'none';
})