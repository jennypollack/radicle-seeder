let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
let feb20 = new Date('February 20, 2021')
let today = new Date()
let daysPassed = Math.round(Math.abs((today - feb20) / oneDay));

console.log(daysPassed)

let n = (0.1 + daysPassed/365*0.9) * 5000
console.log(n)

// for(d = 0; d < 366; d++){
//     let n = (0.1 + d/365*0.9) * 5000
// }

if(n <= 5000) {
    console.log(`it has been ${daysPassed} days since launch!`)
    console.log(`as of today, ${n} of your 5000 rad are unlocked`)
}
