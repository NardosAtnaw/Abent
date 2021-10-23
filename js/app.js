const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.links-container')
const close = document.querySelector('.close-btn')
const banner = document.querySelector('.banner')
menu.addEventListener('click',() =>{
    sidebar.style.right = '0'
})
close.addEventListener('click', () => {
    sidebar.style.right = '-80vw'
})