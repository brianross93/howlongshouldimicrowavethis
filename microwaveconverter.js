

const recCookTime = document.querySelector('#rec-time')
const recWat = document.querySelector('#rec-wat')
const userWat = document.querySelector('#user-wat')
const displayArea = document.querySelector('#result-field >p')

let subButton = document.querySelector('button')


subButton.addEventListener('click', calc_Time)
console.log(displayArea)

function calc_Time() {
    let kilojoules = recWat.value * recCookTime.value
    let recTime = kilojoules/userWat.value
    displayArea.innerHTML = recTime.toFixed() + ' seconds'
    console.log(kilojoules)
    console.log(recWat)
    console.log(recCookTime)
    console.log(userWat)
}