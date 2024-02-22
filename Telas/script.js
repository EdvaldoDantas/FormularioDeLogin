const x =  document.getElementById('subir')
const y = document.getElementById('descer')
window.addEventListener("resize", ()=>{
    if(window.innerWidth < 250){
        x.style.display = 'none'
       y.style.display = 'none' 
    }
    else{
       x.style.display = 'block'
       y.style.display = 'block'  
    }
})
x.addEventListener('click', ()=>{
    y.style.display = 'none'
   
    setTimeout(()=>{
       let x = document.querySelector('.up')
       x.classList.add('esconder')
      
    },200)
    
})
