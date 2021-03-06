 const form = document.getElementById("form");
 const username = document.getElementById("username");
 const email = document.getElementById("email");
 const password = document.getElementById("password");
 const password2 = document.getElementById("password2");


//Show input error mesage
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.className= 'error';
    small.innerText = message;
}
  //Show input success mesage
  function showSuccess(input){
      const formControl= input.parentElement;
      formControl.className= 'form-control success';
  }

    //check email 
  function checkEmail(input){
      const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, 'Email is not valid');
    }
    }

    //check required fields
    function checkRequired(inputArr){
        inputArr.forEach(function(input){
            if(input.value.trim() === ''){
                showError(input, `${getFieldName(input)} is required`);
            }
        });
    }
    function getFieldName (input){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    //check password match
    function checkPasswordsMatch(input1, input2){
        if(input1.value !== input2.value){
            showError(input2, "Passwords do no match");
        }
    }

//chech lenght email and pass
function checkLenght(input, min, max){
    if(input.value.length < min ){
        showError(input, `${getFieldName(input)} must be at leat ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}


//event listener and all functions are called here
 form.addEventListener("submit", function(e){
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);
    checkLenght(username,5, 15);
    checkLenght(password, 8, 30);
    checkEmail(email);
    checkPasswordsMatch(password, password2);

});



 