var maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleAkan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
const submit = document.querySelector('#submit');
submit.onclick = function(){
    const genderRadio = document.querySelectorAll('input[name="choice"]');
    let ChosenValue;
    for (const chosenGender of genderRadio) {
        if(chosenGender.checked) {
            chosenValue = chosenGender.value;
            break;
        }
    }
    if (chosenValue == 'male'){
        var birthday = prompt('Enter the date:');
        switch(birthday){
            case 'Sunday': document.write(maleAkan[0]);
            break;
            case 'monday': document.write(maleAkan[1]);
            break;
            case 'Tuesday': document.write(maleAkan[2]);
            break;
            case 'Wednesday': document.write(maleAkan[3]);
            break;
            case 'Thursday': document.write(maleAkan[4]);
            break;
            case 'Friday': document.write(maleAkan[5]);
            break;
            case 'Saturday': document.write(maleAkan[6]);
            break;
            default: document.write('Choose a valid gender');
        }
        document.write("Ending switch case 1");
    }
    else{
        var birthday = prompt("Enter the date:");
        switch(birthday){
            case 'Sunday': document.write(femaleAkan[0]);
            break;
            case 'Monday': document.write(femaleAkan[1]);
            break;
            case 'Tuesday': document.write(femaleAkan[2]);
            break;
            case 'Wednesday': document.write(femaleAkan[3]);
            break;
            case 'Thursday': document.write(femaleAkan[4]);
            break;
            case 'Friday': document.write(femaleAkan[5]);
            break;
            case 'Saturday': document.write(femaleAkan[6]);
            break;
            default: document.write('Choose a valid gender');
        }
    }
}