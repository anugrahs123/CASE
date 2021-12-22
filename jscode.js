$(document).ready(()=>{
    const username = document.getElementById("username");
    const pass1 = document.getElementById("password");
    const check={
        usernamechk: "admin",
        pass1chk: "12345"
    }

    const login=()=>{
        window.location.href="list.html"
    }

    const check1=(e,fn)=>{
        if(username.value===check.usernamechk && pass1.value===check.pass1chk){
           e.preventDefault();

            fn();
        }
        else{
            alert("invalid");
        }
    }
    
    $("#btn").on('click',(e)=>{
        check1(e,login);
    })
}
)