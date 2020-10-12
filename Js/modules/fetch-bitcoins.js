export default function initFetchBitcoin(){

    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(json =>{
    
        const btn = document.querySelector('.btn-preco')
        btn.innerText = (100/json.BRL.sell).toFixed(4)
    
        console.log(json.BRL.sell)
    }).catch(erro =>{
        console.log(Error(erro))
    })
}


// https://blockchain.info/ticker