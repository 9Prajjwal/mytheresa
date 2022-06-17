
let SignUP = async ()=>{

    event.preventDefault();

    let person = document.getElementById("form");
    
    let Name =person.at.value+ " " + person.fn.value + " " + person.ln.value;
    let Email =person.em.value;
    let Password =person.pass.value;
    let Username = person.em.value;
   

    let form_data ={
        name:Name,
        email:Email,
        password:Password,
        username:Username,
    }

    console.log(form_data)

    form_data=JSON.stringify(form_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{

    method:"POST",
    body:form_data,
    headers:{
        "Content-Type":"application/json"
    },
    });

    let data= await res.json();

    if(data.error==true){
        alert(`${data.message}`);
        return;
    }

    if(data.error==false){
        alert("Registration successful");
        window.location.reload();
    }

    person.reset();
};



let login = async () => {

    if(document.getElementById("em1").value=="" && document.getElementById("pass1").value==""){
        alert("Email and password fields can not be empty");
        return;
    }

    if(document.getElementById("em1").value==""){
        alert("Enter Your Email");
        return;
    }

    if(document.getElementById("pass1").value==""){
        alert("Enter Your password");
        return;
    }


    let user_data={
        username: document.getElementById("em1").value,
        password: document.getElementById("pass1").value,
    };

    user_data=JSON.stringify(user_data);

    let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method:"POST",
        body:user_data,
        headers:{
            "Content-Type":"application/json"
        }
    });

    let data=await res.json();
    console.log("hello",data)

    if(data.error==true){
        alert(`${data.message}`);
        return;
    }

    

    let username= document.getElementById("em1").value;
    
    getUserdetails(username,data.token);

};



let getUserdetails = async (username,token) => {

    let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers:{Authorization:`Bearer ${token}`}
    });

    let data= await res.json();

    if(data.username==document.getElementById("em1").value){
        alert("Login successful");
    }

}

document.querySelector("#log").addEventListener("click",function() {
    
    alert("LOGIN SUCCESSFULL");
    
    window.location.href="checkout.html"
})