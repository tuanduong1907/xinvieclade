const btnMenu = document.querySelector('.btn-menu-mobile')
const listMenu = document.querySelector('.container__list-menu')
const btnCloseMenu = document.querySelector('.container__list-menu-close')

btnMenu.addEventListener('click', showMenuMoblie)
document.body.addEventListener('click', closeMenuMoblie)
listMenu.addEventListener('click', handlePreventBubbling)
btnCloseMenu.addEventListener('click', closeMenuMoblie)

// Function
function showMenuMoblie(e) {
    e.stopPropagation()
    listMenu.classList.toggle('active')
}
function closeMenuMoblie(e) {
    e.stopPropagation()
    listMenu.classList.remove('active')
}


function handlePreventBubbling(e) {
    e.stopPropagation()
}