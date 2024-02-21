
function myCall(){
    console.log("Hiii Call back function")
}

function mySecondCall(){
    console.log("Hii.. Second call back function")
}

function myFn(a,b,Hello){
    let c = a*b
    console.log(c)
   Hello()
}

/*

function myFn(9,7){
    let c = 9*7
    console = 63
   
    mysecondCall()
}

function myFn(9,7){
    let c = 9*7
    console = 63
    mycall()

}

*/

// myFn(9,7,myCall)
// myFn(8,8,mySecondCall)
// myFn(2,2,mySecondCall)


// function myCall(){
//     console.log("Hiii Call back function")
// }

// function mySecondCall(){
//     console.log("Hii.. Second call back function")
// }


// function myFn(a,b){
//     let c = a*b
//     console.log(c)
//     myCall()
  
   
// }

// myFn(9,5)