const form=document.querySelector(".form");

function adderror(element,massage){
    const showerr=element.nextElementSibling;
    showerr.innerHTML=massage;
    element.style.border=`2px solid red`;
     
 }

function fromval(e){

    e.preventDefault;
    
    const name=e.srcElement[0];
    const email=e.srcElement[1];
    const pass=e.srcElement[2];
   
    if(name.value==""){
      
        adderror(name,"User Name Can't be empty");
    }
    else{
         name.style.border=`2px solid green`; 
         name.nextElementSibling.innerHTML="";
    }
    const regx1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!regx1.test(email.value)){
        adderror(email,"Invalid email");
    }
    else{
        email.style.border=`2px solid green`; 
        email.nextElementSibling.innerHTML="";
    }  

    const regx2= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
 
     if(pass.value<4){
        adderror(pass,"your password is too short");
      }
     
    else if(!regx2.test(pass.value)){ 
        adderror(pass,"your password dosent match the condition");
     }
     else{
        pass.style.border=`2px solid green`;  
        pass.nextElementSibling.innerHTML="";
     }


    

}

form.addEventListener("submit",fromval);