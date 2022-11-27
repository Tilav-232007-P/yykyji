let menu = document.querySelector('.burger_menu')
let two = document.querySelector('.two_menu')
let one = document.querySelector('.head .burger_menu .one_menu')
let three = document.querySelector('.head .burger_menu .three_menu')
let k = document.querySelector('.key')
let as = document.querySelector('aside')
let gg = document.querySelector('.contain')
menu.onclick = () =>{
    one.classList.toggle('key')
    three.classList.toggle('key_2')
    two.classList.toggle('opa')
    as.classList.toggle('rg')
    gg.classList.toggle('not_active')
}