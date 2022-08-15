//PASSENGER COUNTER APP
//let count = 0
// count + 1
//count += 1
// .innerText=5
//console.log(count)

let countEl = document.getElementById("count-el")
// console.log(countEl)



 let count = 0
function increment() {
   
    count += 1
    countEl.innerText = count
    console.log("clicked")
    console.log(count)
 }
 let saveEl = document.getElementById("save-el")
 console.log(saveEl)

  function save(){
    let entire = count + " - "
    saveEl.innerText += entire
    countEl.textContent = 0
  }
  
  let me = 'STEPHANIE '
  let surname = 'ALBERT'
  let fullname = me + surname
  console.log(fullname)

  function log(){
    let name = 'Linda!'
    let greeting = "Hi there "
    console.log(greeting + name )
  }
  log()

let myPoints = 3
 function add3Points(){
  myPoints += 3
 }

 function remove1Points(){
  myPoints -= 1
 }

 add3Points()
 add3Points()
 add3Points()
 remove1Points()
 remove1Points()
 console.log(myPoints)
 console.log("2" + 2)
 console.log(11 + 7)
 console.log(6 + '5')
 console.log( 'My points: ' + 5 + 9)  
 console.log(2 + 2)
 console.log("11" + "14")

let error = document.getElementById("error")
console.log(error)

function errorId(){
  error.innerText = "Sorry, something went wrong please try again"
}

// let num1 = 8
// let num2 = 2
//  document.getElementById("num1-el").innerText = num1
// document.getElementById("num2-el").textContent = num2

// function add(){
//   console.log(num1 + num2)
//   sum.innerText += num1 + num2

// }
// function subtract(){
//   console.log(num1 - num2)
//   sum.innerText += num1 - num2
// }
// function divide(){
//   console.log(num1 / num2)
//   sum.innerText += num1 / num2
// }
// function multipy(){
//   console.log(num1 * num2)
//   sum.innerText += num1 *  num2
// }
// let sum = document.getElementById("sum-el")
// console.log(sum)

//  var name = 'pere'
//  console.log(name)

//  let message = 'you have three new notifications'
//  console.log(message)

//  console.log(message + ", " + name)
//  let messageToUser = message + " " + name + "!"
//  console.log( messageToUser)
//  console.log(message + " " + name + "!")
//  function count(){
//  console.log(5)
//  console.log(4)
//  console.log(3)
//  console.log(2)
//  console.log(1)
// }
// count()

//  function call() {
//      console.log(42)
//  }
// call()
// lap1 = 34
// lap2 = 33
// lap3 = 36
// function lapse(){
   
//     let totalTime = lap1 + lap2 +lap3
//     //  return totalTime
//     console.log(totalTime)
// }
// lapse()

// var lapseCompleted = 0
// function incrementlapse(){
//     lapseCompleted ++
//     console.log(lapseCompleted)
// }
// incrementlapse()
// incrementlapse()
// incrementlapse()

// let count = 5 * 7
// let firstBatch = 5

// 
// let myAge = 18
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)
//  var username = 42
//  var greeting = "Hi, my name is "
//  let myGreeting = greeting + username
//  console.log(myGreeting)

//  let welcomeEl = document.getElementById("welcome-el")
//   var name = "Stephanie Albert"
//   var greeting = "Welcome back "
//   welcomeEl.innerText = greeting + name