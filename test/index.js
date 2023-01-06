document.querySelectorAll('.block').forEach((el) => {

    el.addEventListener('click', () => {

        document.querySelectorAll('.block').forEach((child) => {
            child.classList.remove('block-opened');
        });

        el.classList.toggle('block-opened');

    });

});