let navBar = document.querySelector('.sidebar');
let h1side = document.querySelector('.h1-sidebar');
document.querySelectorAll('.h2-sidebar').forEach((el) => {
    navBar.addEventListener('mouseover', () => {
        h1side.style.display = 'block';
        el.style.display = 'block';
        navBar.style.maxWidth = '350px';
        navBar.addEventListener('mouseout', () => {
            el.style.display = 'none';
            h1side.style.display = 'none';
            navBar.style.maxWidth = '93px';
        });
    });
});