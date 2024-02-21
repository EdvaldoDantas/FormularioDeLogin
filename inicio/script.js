window.addEventListener('resize',()=>{
    let foot = document.getElementById('rodape')
    let cor1 = document.getElementById('cor01')
    let cor2 = document.getElementById('cor02')
    let corFim1 = document.getElementById('corFim1')
    let corFim2 = document.getElementById('corFim02')
    
    if(window.innerHeight < 400) {
            cor1.style = `width: 25%;
                          height: 18vh;`
            cor2.style = `width: 30%;
                         height: 15vh;`
            
            corFim1.style = `width: 30%;
                            height: 10vh;`
            corFim2.style = `width: 30%;
                            height: 15vh;` 
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
    }

    windowHight = window.innerHeight
})
let windowHight = window.innerHeight