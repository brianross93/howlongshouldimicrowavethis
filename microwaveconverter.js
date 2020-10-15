

const recCookTime = document.querySelector('#rec-time')
const recWat = document.querySelector('#rec-wat')
const userWat = document.querySelector('#user-wat')
const displayArea = document.querySelector('#result-field >p')
const recMins = document.querySelector('#rec-mins')
const recSec = document.querySelector('#rec-secs')

let subButton = document.querySelector('button')


subButton.addEventListener('click', calc_Time)
console.log(displayArea)



function calc_Time() {
    //ENERGY = WATTAGE * SECONDS
    //SECONDS = ENERGY/WATTAGE
    //First convert minutes into seconds and then use seconds to perform math calc
    let convMinTime = recMins.value * 60
    console.log(convMinTime)
    let convSecTime = parseInt(recSec.value)
    console.log(convSecTime)
    let convCookTime = convMinTime + convSecTime
    console.log(convCookTime)
    
    let kilojoules = recWat.value * parseInt(convCookTime)
    
    

    //What the Minutes would be FORMAT: 5.89 minutes
    let recTimeMins = Math.floor((kilojoules/userWat.value) /60)

    //Time conversion from decimal value to base 60
    // Subtract total time from rounded down time to get the decimals by themselves
    //then multiply the decimals by 60
    let recTimeSecs =  (((kilojoules/userWat.value) /60) - recTimeMins) * 60

    if (recTimeSecs < 10) {
        displayArea.innerHTML = recTimeMins.toFixed() + ' :0' + recTimeSecs.toFixed() 
    }

    else {
    displayArea.innerHTML = recTimeMins.toFixed() + ' :' + recTimeSecs.toFixed() 
    }


}

// const str1 = '4:30'
// const str2 = '4'
// const str3 = '10:30:05'
// const a = str1.split(':') // ['4', '30']
// const b = str2.split(':') // ['4']
// const c = str3.split(':') // ['10', '30', '05']
// function getMinsAndSecs(str) {
// 	str.trim()
// 	const a = str.split(':')
// 	const mins = parseInt(a[0])
// 	const secs = parseInt(a[1])
// }