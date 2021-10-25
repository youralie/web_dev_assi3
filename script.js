
var education_level = new Array();
education_level["undergraduate"] = 1.5;
education_level["college"] = 1.2;
education_level["high_school"] = 1.05;
education_level["middle_school"] = 0.9;

var family_networth = new Array();
family_networth["upper_class"] = 2;
family_networth["middle_class"] = 1.5;
family_networth["lower_class"] = 1.2;

var caste = new Array();
caste["brahmin"] = 100;
caste["kshatriya"] = 50;
caste["vaishya"] = 20;
caste["shudra"] = 10;
caste["varna"] = -50;

var skills = new Array();
skills["musical_instruments"] = 10;
skills["cook"] = 20;
skills["easygoing"] = 15;
skills["sings"] = 10;

var skills = new Array();
skills["music"] = 10;
skills["cook"] = 20;
skills["easy"] = 15;
skills["sing"] = 10;

var ages = new Array();
ages["18"] = 1.5;
ages["24"] = 1.2;
ages["28"] = 0.95;

function getTotal()
{
    var form = document.forms["calc"]

    var selectedEdu = form.elements["education"];
    if(selectedEdu.value == 'blank'){
        return 'Education required';
    } 
    edu_price = education_level[selectedEdu.value];

    var selectedFamilyNet = form.elements["networth"];
    if(selectedFamilyNet.value == 'blank'){
        return 'Family networth required';
    } 
    family_price = family_networth[selectedFamilyNet.value];

    var selectedCaste = form.elements["caste"];
    if(selectedCaste.value == 'blank')
    {
        return 'Caste required';
    } 
    caste_price = caste[selectedCaste.value];

    var skill_price = 0;

    if (document.getElementById('musicalInstruments').checked) {
        skill_price += skills["music"];
    }
    if (document.getElementById('goodCook').checked) {
        skill_price += skills["cook"];
    }
    if (document.getElementById('easygoingCharacter').checked) {
        skill_price += skills["easy"];
    }
    if (document.getElementById('singsWell').checked) {
        skill_price += skills["sing"];
    }

    var selectedAge = document.querySelector("input[name=age]:checked");
    if(selectedAge == null) {
        return "Select age";
    }
    age_price = ages[selectedAge.value];

    reputation_coef = 1;
    reputation_price = 0;
    if (document.getElementById('characterReputation').checked) {
        reputation_coef = 0.9;
    }
    if (document.getElementById('parentsReputation').checked) {
        reputation_coef = 0.85;
    }
    if (document.getElementById('personReputation').checked) {
        reputation_price = 20;
    }

    return total = (((100 * edu_price * family_price) + caste_price + skill_price - reputation_price) * age_price)*reputation_coef;
}

function myFunction() {
    var price = getTotal();
    alert(price);
  }