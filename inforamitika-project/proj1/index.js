document.querySelector('.yes').addEventListener('click', () => {
    document.querySelector('.popup-container').style.display = 'none';
});

document.querySelector('.no').addEventListener('click', () => {
    window.close();
});




document.querySelectorAll('.accordeon-button').forEach((a) => {
    a.addEventListener('click', () => {

        let getCont = a.nextElementSibling;
        let getOpener = a.querySelector('.opener');
        
        if (getCont.style.maxHeight) {

            document.querySelectorAll('.accordeon-content').forEach((a) => {
                a.style.maxHeight = null;
                document.querySelectorAll('.opener').forEach((a) => {
                    a.textContent = '+';
                });
            });

        } else {

            document.querySelectorAll('.accordeon-content').forEach((a) => {
                a.style.maxHeight = null;
                document.querySelectorAll('.opener').forEach((a) => {
                    a.textContent = '+';
                });
            });

            getCont.style.maxHeight = 100 + 'px';
            getOpener.textContent = '-';
            
        };

    });
});
