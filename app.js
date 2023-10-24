const contextMenu = document.querySelector('.container')

document.addEventListener('contextmenu' , (e) => {
    e.preventDefault()
    let x = e.offsetX
    let y = e.offsetY
    contextMenu.style.left = `${x}px`
    contextMenu.style.top = `${y}px`
    contextMenu.style.visibility = 'visible'
})

document.addEventListener('click' , () => {
    contextMenu.style.visibility = 'hidden'
})