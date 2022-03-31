function contar(){
    let ini = document.getElementById('txtin')
    let fim = document.getElementById('txtfi')
    let passo = document.getElementById('txtpa')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert ('[ERRO!] Faltam dados!')
    }else{
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0){
            window.alert('Passo inválido, considerando passo 1')
            p = 1
        }
        if (i<f){
            //Contagem crescente
            for (let c = i; c <=f; c+=p){
                res.innerHTML += `${c} \u{1F4AB}	`
            }
           
        }else {
            //Contagem regressiva
            for (let c = i; c>=f; c-= p){
                res.innerHTML +=`${c} \u{1F4AB}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }
}