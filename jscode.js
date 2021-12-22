$(document).ready(()=>{
    const username = document.getElementById("username");
    const pass = document.getElementById("password");
    const check={
        usernamechk: "admin",
        passchk: "12345"
    }

    const login=()=>{
        window.location.href="./list.html"
    }

    const check1=(e,fn)=>{
        if(username.value===check.usernamechk && pass.value===check.passchk){
           e.preventDefault();

            fn();
        }
        else{
            alert("invalid");
        }
    }
    
    $("#qwe").on('click',(e)=>{
        check1(e,login);
    })
}
)