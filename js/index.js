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