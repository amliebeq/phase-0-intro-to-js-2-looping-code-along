// Code your solutions in this file
function countDown(number) {
    let i = number
    while (i >= 0) {
        console.log(i--);
    }
}
function writeCards(name, event) {
    let array = []
    for (let i = 0; i < name.length; i++) {
        array.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return array
}