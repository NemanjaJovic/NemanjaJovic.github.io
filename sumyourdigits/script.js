
let input = document.querySelector('.inputField');
let button = document.querySelector('.btn');
let output = document.querySelector('.output');

button.addEventListener('click', function(){
    
    let test = output.innerHTML = sumDigits(input.value);
    if (test == 0){
        output.innerHTML = "Not a valid number";
        input.value = "";
    } else {
        output.innerHTML = sumDigits(input.value);
        input.value = "";
    }

});
input.addEventListener('keypress', function(e){
    if (e.keyCode == 13 || e.which == 13){
        let test = output.innerHTML = sumDigits(input.value);
        if (test == 0){
            output.innerHTML = "Not a valid number";
            input.value = "";
        } else {
            output.innerHTML = sumDigits(input.value);
            input.value = "";
        }
    }
})

function sumDigits(number){
    
    if(number < 10){
        return "Not a valid number";
    } 
    
    let sum = 0;
    while (number > 0){

        // extract the last digit
        let digit = number % 10;
        sum += digit;

        // discard the last digit
        number = Math.floor(number / 10);
    }
    return sum;

}