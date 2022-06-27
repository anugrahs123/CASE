
$(document).ready(()=>{
    $.get(`https://jsonplaceholder.typicode.com/todos`,(res,status,xhr)=>{

    let data=''
    res.forEach(element => {
        data+=`<li>
                      <input type="checkbox" class="checkbox">${element.title}
              </li>`
              document.getElementById("lists").innerHTML=data

            
        });
    })
})

let checkno= 0;

const alertCheck=()=>{
    return new Promise((resolve,reject)=>{
        if(checkno===5){ resolve(checkno);}
        else if(checkno>5) {reject();}
    })
}

const promiseCheck=()=>{
    alertCheck()
    .then((x)=>{
        alert("You have completed "+x+" todos!");
    })
    .catch(()=>{
        alert("Today's Tasks is over.");
    })
}



$("#lists").on('change','.checkbox',()=>{
if($(".checkbox").prop("checked")==true){
    checkno++;
    console.log(checkno);
}
else{
    checkno--;
}
promiseCheck();

})