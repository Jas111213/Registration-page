let formele=document.querySelector(".form-container");
let inputele= Array.from(document.querySelectorAll("input"));
let nameErrorEle=document.getElementById("name-error");
let emailErrorEle=document.getElementById("email-error");
let passwordErrorEle=document.getElementById("password-error");
let CpasswordErrorEle=document.getElementById("Cpassword-error");

inputele.forEach((eachele, i)=>{
   eachele.addEventListener("keyup",(e)=>{
      e.preventDefault();
      if(e.key=="Enter"){
        inputele[i+1].focus();
      } 
   })
})

function validate (perObj){
  let errObj={};
  let eRegrex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let pRegrex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  let nameRegrex=/^[a-zA-Z0-9]*$/;
  if(!perObj.name ||perObj.name.length ==0){
        errObj.name="Name cannot be empty"
  }else if( perObj.name.length <3 ||perObj.name.length >20){
    errObj.name="Name must be between 3-20 characters"
  }else if(!nameRegrex.test(perObj.name)){
    errObj.name="Invalid Name"
  }

  if(!perObj.email ||perObj.email.length==0){
    errObj.email="Email cannot be empty"
}else if(!eRegrex.test(perObj.email)){
        errObj.email="Please enter valid email"
}

if(!perObj.password || perObj.password.length==0){
    errObj.password="Password cannot be empty"
}else if( perObj.password.length < 6 || perObj.password.length > 10)
{
    errObj.password="Password must be between 6-10 characters long"
}else if(!pRegrex.test(perObj.password)){
        errObj.password="Password must contains atleast  one number,one UpperCase character,one LowerCase character"
}

if(perObj.password && perObj.Cpassword  !== perObj.password ){
    errObj.Cpassword="Passwords don't match."
}

return errObj;
}
formele.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formValues=Array.from(e.target)
    let perObj={
        name:formValues[0].value,
        email:formValues[1].value,
        password:formValues[2].value,
        Cpassword:formValues[3].value,
    }
    let errObj=validate(perObj);
    if(Object.keys(errObj).length>0){
        nameErrorEle.innerText=errObj.name ||''
        emailErrorEle.innerText=errObj.email ||''
        passwordErrorEle.innerText=errObj.password ||''
        CpasswordErrorEle.innerText=errObj.Cpassword ||''
    }
    else{
        
        console.log("Good to go...");
         window.open('./signup.html',"_blank")
    }
})
