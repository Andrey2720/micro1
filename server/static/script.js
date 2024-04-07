let btn = document.getElementById('btn')
let dateInp = document.getElementById('Ddate')
let money = document.getElementById('money')
let btnHistory = document.getElementById('goHistory')

btn.onclick = async function() {

    const date = dateInp.value
    const moneyVal = money.value
    console.log(date)
    console.log(typeof(moneyVal))

    let content = {
        date:date,
        money:moneyVal
    }

    fetch("http://localhost:3001", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    body: JSON.stringify(content)
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

    
}

btnHistory.onclick = async function() {
    window.location.href='/graph'
}


