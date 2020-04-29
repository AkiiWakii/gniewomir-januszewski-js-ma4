const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", submitForm);

function submitForm(){
    event.preventDefault();
    console.log("Form submited!");

    const firstName = document.querySelector("#firstName");
    const error = document.querySelector(".error");
    const firstNameValue = firstName.value;

    if(checkInputLength(firstNameValue) === true){
        error.style.display = "none";
    }else{
        error.style.display = "block";
    }
};
function checkInputLength(value){
    const trimmedValue = value.trim();
    
    if(trimmedValue.length >= 2){
        return true;
    }else {
        return false;
    }
};


