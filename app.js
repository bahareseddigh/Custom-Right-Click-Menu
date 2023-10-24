const contextMenu = document.querySelector('.container')
const subMenu = document.querySelector('.share-menu')

document.addEventListener('contextmenu' , (e) => {
    e.preventDefault()
    let x = e.offsetX
    let y = e.offsetY

    let winWidth = window.innerWidth
    let winHeight = window.innerHeight

    let cmWidth = contextMenu.offsetWidth
    let cmHeight = contextMenu.offsetHeight

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x
    // 850 > 1000 - 300 ? 700 : 850
    // 200 > 1000 - 300 ? 700 : 200

    y = y > winHeight - cmHeight ? winHeight - cmHeight : y

    if(x > (winWidth - cmWidth - subMenu.offsetWidth)){
        subMenu.style.left = '-172px'
    }
    else{
        subMenu.style.left = '260px'
    }

    contextMenu.style.left = `${x}px`
    contextMenu.style.top = `${y}px`
    contextMenu.style.visibility = 'visible'
})

document.addEventListener('click' , () => {
    contextMenu.style.visibility = 'hidden'
})