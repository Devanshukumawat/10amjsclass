let obj = {
    firstName:"Devanshu",
    lastName:"Kumawat",
    age:45,
    id:7867,

    
}

let allDetails =function (city,pincode){
    console.log("First Name :- "+this.firstName+" Last Name :- "+this.lastName+ " Age :- "+this.age+" Id:- "+this.id+" City :- "+city + " Pincode :- "+pincode)
}




let secondObj = {
    firstName:"Aman",
    lastName:"sharma",
    age:56
}

// allDetails.call(obj,"Jaipur","86789")

// allDetails.call(secondObj,"Ajmer","757657")

// allDetails.apply(obj,["jaipur","8786786"])

// allDetails.apply(secondObj,["ajmer",76567])



