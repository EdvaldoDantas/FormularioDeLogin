let menu_escondido = document.getElementById('menu-escondido')
let menu = document.getElementById('menu')
let fechado = true
menu_escondido.style.display = 'none'
menu.addEventListener('click',()=>{
    if(fechado){
        menu_escondido.style.display = 'block'
        fechado = false
    }
    else {
        menu_escondido.style.display = 'none'
        fechado = true
    }
})
document.addEventListener('click',(event)=>{
   const cli = menu.contains(event.target)
   if(!cli){
      menu_escondido.style.display = 'none'
   }
})
document.addEventListener('scroll',()=>{
    menu_escondido.style.display = 'none'
})