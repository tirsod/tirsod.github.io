
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomFromList(list){
    return list[Math.floor(getRandomInRange(0, list.length))];
}

t = ["tiered", "transmitted", "thinking", "targeted", "timeless", "transient", "tethered", "temporary"];
i = ["invisible", "intelligent", "injected", "itermittent", "interference", "internet", "infinite", "independent"];
r = ["repeating", "relay", "reconfiguring", "restless", "reality", "rotational", "relative", "reality"];
s = ["system", "subliminal", "series", "systematic", "symmetry"];
o = ["operation", "operative", "overload", "overdrive", "overclock", "over", "online", "overlaying", "omnipresent"];
d = ["developer", "dimensioner", "distorter", "duplicator"];

printName = "transmitted interference relay system over dimensioner";
previousName = "transmitted interference relay system over dimensioner";
chosenName = "transmitted interference relay system over dimensioner";
letterIndex = 0;

function resetName(){
    previousName = chosenName;
    chosenName = getRandomFromList(t) + " " + getRandomFromList(i) + " " + getRandomFromList(r) + " " + getRandomFromList(s) + " " + getRandomFromList(o) + " " + getRandomFromList(d);

    console.log(chosenName);
    letterIndex = 0;
    setTimeout(doLetter, 10);
}

function doLetter(){

    if (letterIndex < chosenName.length+20){
        tlength = name.length;
        printName = chosenName.substring(0, letterIndex) + previousName.substring(letterIndex);
        letterIndex++;
        $( "#tirname" ).text(printName);
        setTimeout(doLetter, 10);
    }
    else{
        setTimeout(resetName, 3000);
    }
    
}

resetName();