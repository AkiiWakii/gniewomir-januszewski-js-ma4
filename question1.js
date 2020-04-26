const firstName = document.querySelector("#firstName");
const contactForm = document.querySelector("#contactForm");
const error = document.querySelector(".error");
const firstNameValue = firstName.value;


contactForm.addEventListener("submit", submitForm);

function submitForm(){
    event.preventDefault();
    console.log("Form submited!");

    if(checkInputLength(firstNameValue) === true){
        error.style.display = "none";
    }else{
        error.style.display = "block";
    }
};
function checkInputLength(value){
    const trimmedValue = value.trim();
    
    if(trimmedValue.length > 2){
        return true;
    }else {
        return false;
    }
};

firstName.addEventListener("keyup",checkLength);

function checkLength(event){
    const inputValue = event.target.value.trim();
    const valueLength = inputValue.length;

    if(valueLength > 2){
        error.style.display = "none";
    }else {
        error.style.display = "block";
    }
};
