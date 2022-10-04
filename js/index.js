document.querySelectorAll('.accordeon').forEach((el) => {
    el.addEventListener('click', () => {
        let cont = el.nextElementSibling;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            cont.style.maxHeight = cont.scrollHeight + 'px'
        }
    })
})  

let num = 1

function add(){
    num += 1
    if (num < 17) {
        let elem = document.createElement('div')
        elem.classList.add('crcl')
        document.querySelector('.circle-container').appendChild(elem);
    } else{
        alert('Достигнут лимит!')
        num = 16
    }
}

function del(){
    num -= 1
    if(num > 0) {
        let elem = document.querySelector('.crcl')
        elem.remove()
    } else {
        alert('Вы не можете убрать 1 елемент!')
        num = 0
    }
}
