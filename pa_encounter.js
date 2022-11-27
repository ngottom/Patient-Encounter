

function submitInfo(){
     
     encounterInfo = document.getElementById("myTextarea").value;
    console.log(encounterInfo);
};
function countLines(){
    lines = encounterInfo.split(/\n/); // splits each string by new line
    lineNum = lines.length;
    console.log(lineNum); 
    
};
function splitLines(){
    encounterInfo = document.getElementById("myTextarea").value;
    breakIndex = encounterInfo.indexOf("\n")
    
    newLine = encounterInfo.substr(0,breakIndex); // displays the first line
    console.log(newLine);
    
    document.getElementById("myTextarea").value = "Tahsin's family history: they angy";
}

var lastButton = [0];
let i = 0;


// Clicking next button displays next line and i+1
let currentArray;

    function next(){
        if (i<currentArray.length-1){
            i++;
         }
    if (i <= currentArray.length-1){
        var lineCount = i+1;
     document.getElementById("myTextarea").value = currentArray[i]+ "\n\n\n" +(lineCount) +"/" +(currentArray.length)
    }
     
         console.log(i); 

    /*
    i = currentArray.length - 1;
    console.log("current" +i);
    */         //Check 
    }


    function previous(){
        if (i > 0){
            i--;
            var lineCount = i+1;
            document.getElementById("myTextarea").value = currentArray[i] +"\n\n\n" +(lineCount) +"/" +(currentArray.length);
            console.log(i); //i check
        }
    }

function displayScenario(){
    var lineCount = i+1;
    document.getElementById("myTextarea").value = currentArray[i] + "\n\n\n" + (lineCount) + "/" +(currentArray.length);
}


// Case 6 Pelvic Pain
var openingScenario = ["Autumn Larsen, a 30-year-old female; , comes to the physician because of pelvic pain.",
"blah","add"];


function displayOpeningScenario(){
    if (currentArray != openingScenario){
        i=0;
    }
     currentArray = openingScenario;
     displayScenario();
    /*
    if (i<openingScenario.length){
    document.getElementById("myTextarea").value = openingScenario[i];
    i++;
    console.log(openingScenario[i]);
    }
    */
}
    
//Amboss Case 5
var vitalSigns = ["Temperature: 99°F (37.2°C)", "Blood pressure: 124/69 mm Hg", "Heart Rate: 70/min", "Respirations: 16/min"]

function displayVitalSigns(){
    if (currentArray != vitalSigns){
        i=0;
    }
    currentArray = vitalSigns;
     displayScenario();
}

var examineeTasks = ["Take a focused history.",
"Perform a relevant physical examination (do not perform corneal reflex ,breast, pelvic/genitourinary, or rectal examinations).",
"Explain the preliminary differential diagnoses and initial workup plan to the patient.",
"Write the patient notes after leaving the room."]

//AC2 beginning of sexualHistory
function displaySexualHistory(){
    if (currentArray != SexualHistory){
        i=0;
    }
    currentArray = SexualHistory;
     next();
    }
var SexualHistory = ["Sexually active?\n Yes.", "With whom?\n My boyfriend.",

"Pain during sex?\n Yes, it has actually been hurting over the past week.",

"Number of partners over the past year?\n Two. My current boyfriend and my ex-boyfriend.",

"Protection?\n I use oral contraceptives, if that is what you mean? ",

"Last menstrual period?\nOne week ago.",

"Menarche?\n When I was 13.",

"Duration of period?\n 4–5 days.",

"Period regular?\n Every 28 days, because I take birth control",

"How many tampons per day?\n Two.",

"Vaginal discharge?\n None right now, but I had a little about 2 weeks ago that went away by itself.",
 
"Vaginal itching?\n No.",

"Vaginal dryness?\n No.",

"Pregnancies?\n No, I have never been pregnant, and I really do not want to have children yet.",

"Last Pap smear?\n Last spring, and everything was fine then.",
];
//end of AC2 sexual history


/* 
Press sidebar button:
Shows first line of text.
Next button shows next line of text. Does nothing if none left.
*/


/*
const catdr = document.querySelector("#catdr1");

function catDoc(img) { 
while (img.style.width == "450 px"){
    }
    img.style.width == "0px";

    }
catDoc(catdr);
*/