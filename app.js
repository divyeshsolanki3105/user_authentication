

const submit_button=document.querySelector(".button");

submit_button.onclick=(e)=>{
    e.preventDefault();
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    const email=document.getElementById("email").value;
    const pass=document.getElementById("pass").value;
   
    let data=JSON.parse(localStorage.getItem("userData"))||[];
    console.log(data);
    let currentData={FirstName:fname,
        LastName:lname,
        Email:email,
        Password:pass,
}


    if(fname=="" || lname == "" || email == "" || pass == ""){
       swal("Opps!", "Input field must be fill", "error");
    }
          else{
            data.push(currentData);
            localStorage.setItem('userData',JSON.stringify(data))
            swal("Good job!", "You clicked the button!", "success");
        }
    }

const submit_button1=document.querySelector(".myButton");
let data=JSON.parse(localStorage.getItem("userData"))||[];
submit_button1.onclick=(e)=>{
    e.preventDefault();
  let email=document.getElementById('email').value;
  let pass=document.getElementById('pass').value;
  
  let isAuth=data.some((item)=>{
    return item.Email == email && item.Password==pass;
  })
  console.log(isAuth);
  console.log(email);
  console.log(pass);
  if(isAuth){
    swal("Good job!", "You clicked the button!", "success");
  }else{
    swal("Opps!", " Data is incorrect", "error");
  }
}