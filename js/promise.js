// let myPromise = new Promise()

// console.log(myPromise)



// fetch("hhtp://dummydata.js").then().catch().finally()




// let myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task complete")
//         resolve({
//             name:"Devanshu",
//             age:7,
//             id:"76"
//         })
//     },2000)
// })

// myPromise.then((data)=>{
//     console.log(data)
// })


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Db connected")

//         let task = true
//         if(task){
//             resolve({
//                 name:"dev",
//                 age:8
//             })
//         }
//         else{
//             reject("Error Task not completed")
//         }

        
//     },2000)
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Finally always run")
// })


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task complete")

//         let task = false

//         if(task){
//             resolve({
//                 name:"Devanshu",
//                 age:67,
//                 id:"7hu78"
//             })
//         }
//         else{
//             reject("Error....!")
//         }

        
//     },2000)

// }).then((data)=>{
//     console.log(data)
// }).catch((myError)=>{
//     console.log(myError)
// }).finally(()=>{
//     console.log("Finally always run")
// })

// let myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task complete")

//         let task = false

//         if(task){
//             resolve({
//                 name:"Devanshu",
//                 age:67,
//                 id:"7hu78"
//             })
//         }
//         else{
//             reject("Error....!")
//         }

        
//     },2000)

// })

// async function Data(){

//     try {

//         let result = await myPromise
//     console.log(result)
        
//     } catch (myError) {
//         console.log(myError)
//     }

    
// }

// Data()

// async function myData(){

//     try {
//         let result = await fetch("https://dummyjson.com/products/")
//         let data = await result.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
   
// }

// myData()


// fetch("https://dummyjson.com/products/").then((data)=>{
//     return data.json()
// }).then((result)=>{
//     console.log(result)
// }).catch((erroe)=>{
//     console.log(erroe)
// })






