var points = 0;
var seconds = 60;

//adding words array
const words=[['WAR','APP','AGE','DAY','BYE','NET','OAK','OUT','WIN','TEN'],['ABLE','ALSO','RAIN','LIFE','RAGE','BAIT','DATE','LOVE','HATE','SAFE'],['SPEED','ABOVE','BELOW','BREAD','FUNNY','ADULT','ANGEL','VEGAN','MEDAL','HONOR'],['FOLLOW','LAUNCH','LEAGUE','MENTAL','HEALTH','ACCEPT','ANYWAY','THIRTY','TWELVE','YELLOW'],['ADVISER','FEDERAL','PHOENIX','QUALITY','HEXAGON','HELPING','HIMSELF','IMPROVE','MUSICAL','NETWORK'],['DATABASE','EDUCATED','HISTORIC','ORGANIZE','RESOURCE','ADVANCED','ACCIDENT','POWERFUL','REPEATED','SYNDROME'],['QUICKFIRE','REOXIDIZE','BLACKBUCK','JELLYFISH','QUICKSAND','APARTMENT','ATTENTION','CLASSROOM','CANONICAL','BUMBLEBEE'],['ABSCONDING','MOZZARELLA','BARMITZVAH','PEROXIDIZE','CHIMPANZEE','ASSISTANCE','APPLICABLE','CONFERENCE','CONCLUSION','BACKGROUND'],['UNDEMANDING','INFORMATION','PREPOSITION','ABOMINATION','PERSONALITY','SUBTRACTION','QUADRILLION','ALTERNATIVE','CELEBRATION','CLEANLINESS','ANNIVERSARY'],['ALLITERATION','UNIDENTIFIED','PENNSYLVANIA','INDEPENDENCE','INTELLIGENCE','RELATIONSHIP','PROFFESIONAL','ORGANIZATION','APPRECIATION','ARCHITECTURE'],['ENTERTAINMENT','RIGHTEOUSNESS','CONSTELLATION','COMMUNICATION','CONCENTRATION','WEIGHTLIFTING','DEFORESTATION','GLOBALIZATION','CONSCIOUSNESS','APPROPRIATION'],['DISCRIMINATION','PHOTOSYNTHESIS','MULTIPLICATION','TRANSPORTATION','RESPONSIBILITY','DISAPPOINTMENT','CAPITALISATION','GROUNDBREAKING','ADMINISTRATION','ACCOUNTABILITY'],['PROCRASTINATION','PERSONIFICATION','CHARACTERISTICS','CONGRATULATIONS','THERMOCHEMISTRY','ACCOMPLISHMENTS','ACKNOWLEDGEMENT','INTERDEPENDENCE','NATIONALISATION'],['EXTRATERRESTRIAL','MISUNDERSTANDING','HYDROELECTRICITY','NEUROTRANSMITTER','RESPONSIBILITIES','UNDIFFERENTIATED','CHARACTERISATION','MISAPPROPRIATION','DISQUALIFICATION','SIMULTANEOUSNESS'],['ELECTRONEGATIVITY','TELECOMMUNICATION','MISREPRESENTATION','COMMERCIALIZATION','HYPERPIGMENTATION','MISINTERPRETATION','DEMATERIALIZATION','UNEXPERIENCEDNESS','RADIOBROADCASTING'],['CHARACTERISTICALLY','OVERSIMPLIFICATION','HYDROXYCHLOROQUINE'],['ELECTROCARDIOGRAPHY','COUNTERINTELLIGENCE','PSEUDOHALLUCINATION'],['INTERNATIONALIZATION']];

//function to display words
function target() {
    phrase.innerHTML = "";
    document.getElementById("start").style.display = "none";
    document.getElementById("user").style.display = "block";
    for(i = 0; i < words.length; i++) {
        var item = words[0];
    }
    words.shift();
    var word = item[Math.floor(Math.random()*item.length)];
    phrase.innerHTML = word;
}

//function for countdown of time

function countdown() {
    var timer = setInterval(function(){
        seconds--;
        sec.innerHTML = seconds;
        if (seconds === 0) {
            document.getElementById("phrase").innerHTML = "" + "GAME OVER";
            document.getElementById("start").style.display = "none";
            document.getElementById("reload").style.display = "block";
            document.getElementById("user").style.display = "none";
            clearInterval(timer);
            seconds = 60;
        }
    },1000);
}


//function for addition of score

function score() {
    points = 0;
    document.getElementById("user").addEventListener('input', function(event){
        document.getElementById("user").value = document.getElementById("user").value.toUpperCase();
        if( document.getElementById("user").value == document.getElementById("phrase").innerHTML) {
            points += 10;
            scr.innerHTML = points;
            document.getElementById("user").value = "";
            target();
        }
    }
    );
}

//callback of functions when start button is clicked

btn.addEventListener("click", function(){
    countdown();
    target();
    score();	
});
