// let obj = {
//     firstName:"Devanshu",
//     lastName:"Kumawat",
//     age:45,
//     id:7867,

    
// }

// let allDetails =function (city,pincode){
//     console.log("First Name :- "+this.firstName+" Last Name :- "+this.lastName+ " Age :- "+this.age+" Id:- "+this.id+" City :- "+city + " Pincode :- "+pincode)
// }




// let secondObj = {
//     firstName:"Aman",
//     lastName:"sharma",
//     age:56
// }

// allDetails.call(obj,"Jaipur","86789")

// allDetails.call(secondObj,"Ajmer","757657")

// allDetails.apply(obj,["jaipur","8786786"])

// allDetails.apply(secondObj,["ajmer",76567])


let myValue =function (city,pincode){
    console.log("First Name :- "+this.firstName+" Last Name :- "+this.lastName+" Age :- "+this.age+ " Id :- "+this.id+" City :- "+city+" Pincode :- "+ pincode)
}

let Student1 = {
    firstName:"Devanshu",
    lastName:"Kumawat",
    age:45,
    id:7867,
   
    
}

let student2 = {
    firstName:"Manny",
    lastName:"Sharma",
    age:34,
    id:87879
}


// myValue.call(Student1,"Jaipur","787989")
// myValue.call(student2,"kota","897797")

// myValue.apply(Student1,["Jaipur","878790"])

// myValue.apply(student2,["jaipur","54564"])

// let a = myValue.bind(student2,"Kota","90890")
// console.log(a)
// a()

