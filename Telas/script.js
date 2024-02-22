const x =  document.getElementById('subir')
const y = document.getElementById('descer')
window.addEventListener("resize", ()=>{
   
})
x.addEventListener('click', ()=>{
    y.style.display = 'none'
   
    setTimeout(()=>{
       let x = document.querySelector('.up')
       x.classList.add('esconder')
      
    },200)
    
})
