window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.elemento', {
    duration: 1200,
    delay: 200,
    distance: '90px'
})

revelar.reveal('.texto', {
    duration: 1200,
    delay: 300,
    distance: '90px'
})

// BOTÕES
revelar.reveal('.btn01', {
    duration: 1200,
    delay: 400,
    distance: '90px'
})
// FIM

// CAIXAS
revelar.reveal('.cx01', {
    duration: 1200,
    delay: 500,
    distance: '90px'
})

revelar.reveal('.cx02', {
    duration: 1200,
    delay: 600,
    distance: '90px'
})

revelar.reveal('.cx03', {
    duration: 1200,
    delay: 700,
    distance: '90px'
})
// FIM

// BOX 
revelar.reveal('.box01', {
    duration: 1200,
    delay: 500,
    distance: '90px'
})

revelar.reveal('.box02', {
    duration: 1200,
    delay: 600,
    distance: '90px'
})

revelar.reveal('.box03', {
    duration: 1200,
    delay: 700,
    distance: '90px'
})

revelar.reveal('.box04', {
    duration: 1200,
    delay: 800,
    distance: '90px'
})

revelar.reveal('.box05', {
    duration: 1200,
    delay: 900,
    distance: '90px'
})

revelar.reveal('.box06', {
    duration: 1200,
    delay: 1000,
    distance: '90px'
})
// FIM


// BOTÃO MENU 
const buttonMenu = document.querySelector(".btn_menu")
const navMenu = document.querySelector('.nav_list_menu')
const mascara = document.querySelector('.mascara')

buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('active')
    navMenu.classList.toggle('list_active')
    mascara.classList.toggle('mascara_active')
})

navMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('active')
    navMenu.classList.toggle('list_active')
    mascara.classList.toggle('mascara_active')
})

mascara.addEventListener('click', () => {
    buttonMenu.classList.remove('active')
    navMenu.classList.remove('list_active')
    mascara.classList.remove('mascara_active')
})






