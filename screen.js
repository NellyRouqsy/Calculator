let screen = document.getElementById("screen")


function addNum (number) {
   screen.value += number
}

let toCancel = ( )=>{
   return screen.value = " "
}

const toDelete = ()=>{
   screen.value = screen.value.slice(0,-1)
}

const toMinus = ()=>{
   screen.value = screen.value * -1
}

const addPercent = ()=>{
   screen.value = screen.value/100
}

const toCalculate = ()=>{
   screen.value = eval(screen.value)
}