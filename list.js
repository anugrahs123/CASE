var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange =()=>{
    if(xhttp.readyState == 4 && xhttp.status ==200 ){
        var x = JSON.parse(xhttp.responseText);
        let y= '';
        for(i=0;i<x.length;i++){
            y+=`<li>
                    <input type="checkbox" class="checkbox">${x[i].title}
                </li>`            
        document.getElementById("lists").innerHTML=y;       }
    }
} 

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();


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
        alert("Todays taske is over.");
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