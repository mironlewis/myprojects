// ACCORDEON 

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

// CIRCLE

let num = 1

function add(){
    num += 1
    if (num <= 18) {
        let elem = document.createElement('div')
        elem.classList.add('crcl')
        document.querySelector('.circle-container').appendChild(elem);
    } else {
        alert('Достигнут лимит!')
        num = 18
    }
    console.log(num)
}

function del(){
    num -= 1
    if(num >= 1) {
        let elem = document.querySelector('.crcl')
        elem.remove()
    } else {
        num = 1
    }
}

// RED-BLUE

let num2 = 0

function add2(){

    num2 += 1
    
    let create_div = document.createElement('div')
    let create_color_red = document.createElement('div')
    let create_color_blue = document.createElement('div')
    let create_text = document.createElement('h1')

    create_div.classList.add('card' + num2)
    create_color_red.classList.add('color-red')
    create_color_blue.classList.add('color-blue')
    create_text.classList.add('h1-red_blue')

    let get_value1 = document.getElementById('red-blue-option').value
    let get_value2 = document.getElementById('range').value

    if (num2 <= 8) {
        document.querySelector('.red_blue-container').appendChild(create_div)
        if (get_value1 == 1) {
            document.querySelector('.card' + num2).appendChild(create_color_red);
        } else {
            document.querySelector('.card' + num2).appendChild(create_color_blue);
        }

        document.querySelector('.card' + num2).appendChild(create_text)
        create_text.innerHTML = get_value2

    } else {
        alert('Достигнут лимит!')
        num2 = 8
    }
}

function del2() {
    if (num2 > 0) {
        document.querySelector('.card' + num2).remove()
        num2 -= 1
    }
}

function delete_vse() {
    while (num2 > 0) {
        document.querySelector('.card' + num2).remove()
        num2 -= 1
    }
}