// Validating the data for registration
const  inputs =document.querySelectorAll('input');

const patterns = {
    phoneNumber: /^\d{11}$/
};

// Validation function
function validate(field, regex) {
    console.log(regex.test(field));
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value );
        validate(e.target.value, patterns[e.target.attributes.name.value])
    });
    
});

