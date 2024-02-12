function uniqueId(length){
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

    let Id = ""

    for(let i =1; i<=length; i++){
        let randomNum = Math.floor(Math.random()*characters.length)
        Id += characters.charAt(randomNum)
    }

    return Id

}

 let myId = uniqueId(4)

 console.log(myId)






