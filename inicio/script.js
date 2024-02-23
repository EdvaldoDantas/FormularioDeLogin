window.addEventListener('resize',()=>{
    let foot = document.getElementById('rodape')
    let cor1 = document.getElementById('cor01')
    let cor2 = document.getElementById('cor02')
    let corFim1 = document.getElementById('corFim1')
    let corFim2 = document.getElementById('corFim02')
    
    if(window.innerHeight < 420){
        document.body.classList.add('no-scroll')
        foot.style.display = 'none'
    }
    else{
        foot.style.display = "block" 
        cor1.style = `width: 40%;
                      height: 20vh;`

        cor2.style = `width: 50%;
                      height: 15vh;`

        corFim1.style = `width: 39%;
                         height: 14vh;`
        corFim2.style = `width: 39%;
                         height: 19vh;` 
        document.body.classList.remove('no-scroll')
    }

    windowHight = window.innerHeight
})
let windowHight = window.innerHeight 

let btn = document.getElementById('logar')

