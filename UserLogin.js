const check=(callback)=>{
    let user=document.getElementById("user").value
    let password=document.getElementById("password").value

    if(user=='admin' && password=="1234"){
       return callback()
    }
    else{
        alert("credientials invalid")
        return true
    }

}

function callback(){
    window.location.href='./list.html'
    return false
}