//myobj


let myObj = {
    id:"787hkjhj",
    ProductName:"TV",
    Price:"$7788",
    Rating:"4.9",
    address:{
        city:"Jaipur",
        pincode:89767
    }
}
// let secondObj = Object.assign({},myObj)
// let secondObj = {...myObj}
// myObj.address.city = "Kota"

let secondObj = JSON.parse(JSON.stringify(myObj))

myObj.address.city = "Kota"

console.log(myObj)
console.log(secondObj)