const contextMenu = document.querySelector('.container')

document.addEventListener('contextmenu' , (e) => {
    e.preventDefault()
    contextMenu.style.visibility = 'visible'
})

document.addEventListener('click' , () => {
    contextMenu.style.visibility = 'hidden'
})