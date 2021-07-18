// //declaring the arrays holding the Akan names
// var maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
// var femaleAkan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
// // selecting the submit button. The check Akan name button 
// const submit = document.querySelector('#submit');
// submit.onclick = function(){
//     const genderRadio = document.querySelectorAll('input[name="gender"]');
//     let ChosenValue;
//     for (const chosenGender of genderRadio) {
//         if(chosenGender.checked) {
//             chosenValue = chosenGender.value;
//             break;
//         }
//     }
//     //condition to check the selected gender
//     if (chosenValue == 'male'){
//         var birthday = prompt('Enter the date:');
//         //switch case to match the day with the rght Akan name
//         switch(trueBirthDayIndex){
//             case '0': document.write(maleAkan[0]);
//             break;
//             case '1': document.write(maleAkan[1]);
//             break;
//             case '2': document.write(maleAkan[2]);
//             break;
//             case '3': document.write(maleAkan[3]);
//             break;
//             case '4': document.write(maleAkan[4]);
//             break;
//             case '5': document.write(maleAkan[5]);
//             break;
//             case '6': document.write(maleAkan[6]);
//             break;
//             default: alert('Choose a valid gender');
//         }
//         document.write("Ending switch case 1");
//     }
//     else{
//         var birthday = prompt("Enter the date:");
//         switch(birthday){
//             case 'Sunday': document.write(femaleAkan[0]);
//             break;
//             case 'Monday': document.write(femaleAkan[1]);
//             break;
//             case 'Tuesday': document.write(femaleAkan[2]);
//             break;
//             case 'Wednesday': document.write(femaleAkan[3]);
//             break;
//             case 'Thursday': document.write(femaleAkan[4]);
//             break;
//             case 'Friday': document.write(femaleAkan[5]);
//             break;
//             case 'Saturday': document.write(femaleAkan[6]);
//             break;
//             default: alert('Choose a valid gender');
//         }
//     }
// }
// // Birtdate validation
// function birthdates(){
//     var inputDate = document.getElementById('bdate').value;
//     var inputMonth= document.getElementById('bdat').value;
//     var inputYear = document.getElementById('bdae').value;
//     if (inputDate <=0 || inputDate > 31) {
//       alert("WDate");
//     }else if(inputMonth <=0 || inputMonth > 12) {
//       alert("Enter the correct Month");
//     }else if(inputYear < 999 || inputYear > new Date().getFullYear()) {
//       alert("Enter the correct year");
//     }
// }


function akanGenerate(){
    var genderRadio = document.querySelectorAll('input[name="gender"]');
    let ChosenValue;
    var inputDate = document.getElementById('bdate').value;
    var inputMonth= document.getElementById('bdat').value;
    var inputYear = document.getElementById('bdae').value;
    var century = parseInt(inputYear.slice(0, 2));
    var maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var femaleAkan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const submit = document.querySelector('#submit');
        // checking for the gender
        for (const chosenGender of genderRadio) {
            if(chosenGender.checked) {
                chosenValue = chosenGender.value;
                break;
            }
    }
        // Checking for the persons day of birth
        if(inputDate<=0 || inputDate>30){
            alert("WDate");
            } 
            else if(inputMonth<=0 || inputMonth>12){
            alert("Enter the correct Month");
            }
            else if(inputYear<999 || inputYear > new Date().getFullYear()){
            alert("Enter the correct year");
            }
            else {
            var trueBirthdayIndex = parseInt((((century/4) - 2*century-1)+((5*inputYear/4))+((26*(inputMonth+1)/10))+inputDate)%7);
        // end 
                if (chosenValue == 'male'){
                    // var birthday = prompt('Enter the date:');
                    if (trueBirthdayIndex == 0){
                        alert(maleAkan[0] + " You were born on "+days[0])
                    }
                    else if (trueBirthdayIndex == 1){
                        alert(maleAkan[1] + " You were born on "+days[1])
                    }
                    else if (trueBirthdayIndex == 2){
                        alert(maleAkan[2] + " You were born on "+days[2])
                    }
                    else if (trueBirthdayIndex == 3){
                        alert(maleAkan[3] + " You were born on "+days[3])
                    }
                    else if (trueBirthdayIndex == 4){
                        alert(maleAkan[4] + " You were born on "+days[4])
                    }
                    else if (trueBirthdayIndex == 5){
                        alert(maleAkan[5] + " You were born on "+days[5])
                    }
                    else if (trueBirthdayIndex == 6){
                        alert(maleAkan[6] + " You were born on "+days[6])
                    }
                }
                else{
                    if (trueBirthdayIndex == 0){
                        alert(femaleAkan[0] + " You were born on "+days[0])
                    }
                    else if (trueBirthdayIndex == 1){
                        alert(femaleAkan[1] + " You were born on "+days[1])
                    }
                    else if (trueBirthdayIndex == 2){
                        alert(femaleAkan[2] + " You were born on "+days[2])
                    }
                    else if (trueBirthdayIndex == 3){
                        alert(femaleAkan[3] + " You were born on "+days[3])
                    }
                    else if (trueBirthdayIndex == 4){
                        alert(femaleAkan[4] + " You were born on "+days[4])
                    }
                    else if (trueBirthdayIndex == 5){
                        alert(femaleAkan[5] + " You were born on "+days[5])
                    }
                    else if(trueBirthdayIndex == 6){
                        alert(femaleAkan[6] + " You were born on "+days[6])
                    }
                }
            }
    }