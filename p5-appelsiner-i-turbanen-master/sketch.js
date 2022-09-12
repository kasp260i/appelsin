/*
Først laver vi nogle variable til at lave nogle frugter:
 - objekter som vi vil skyde afsted og fange i en turban
*/

// Frugterne
let appelsin;
let lime;
let tomat;
let frugter; // Array til alle frugter



// Turbanen
let turban;
let turbant;
let turbanBillede;

//score


// Øvrige
let tid = 150;
let score = 0;
let liv = 8;
let missed =0;
let scoret = 0;
let livt = 8;
var done= 20;
let grebetsang;
let musik;
let missedlyd;
let bgbilled;
let alia;
let spilIgang = true;   //flag
const col = [220,110,0]; // farven på gameOver teksten
const grav = 0.1; // tyngdekraften

function preload() {
    turbanBillede = loadImage('redstar.png');
    bgbilled = loadImage('bgbilled.png')
    soundFormats('mp3', 'ogg');
  grebetsang = loadSound('ding');
  musik = loadSound('musik');
missedlyd = loadSound('missed');
outro = loadSound('alia')


}

/* 
 * 
 */
function setup() {  // kører kun en gang, når programmet startes
    createCanvas(750, 600);
    
    musik.play();   
    textAlign(CENTER, CENTER);

    //newspeed = yspeed;
    //x = rad;
    // parametrene til Kurv-konstruktøren er (x, y, bredde, dybde, speed)
    turban = new Kurv(670, 100, 70, 50, 5);
    turbant = new Kurv(670, 100, 70, 50, 5);
    // parametrene til Frugt-konstruktøren er (x, y, bredde, dybde, xspeed, yspeed, farve)
    appelsin = new Frugt(30, 30, 40, 40, 4, -10, [220,110,0], 1);
    lime = new Frugt(30, 30, 20, 30, 4, -10, [110,220,0], 3);
    tomat = new Frugt(30, 30, 40, 30, 4, -10, [220,0,0], 2);
    frugter = [appelsin, lime, tomat];
}

function draw() {
    background(bgbilled);
    
    if (spilIgang) {
        flytFrugter(); // flyt alle frugterne
        flytTurban();  // flyt turbanen
        flytTurbant();  // flyt turbanen
        checkScore(); // tjek om hver frugt er blevet grebet
        display(); // vis alle frugterne og turbanen
        rammer();
    } else {

        vinder();
    }
}


function vinder(){

    if (scoret>=done){  // så er Game Over det der skal vises
        fill(col);
        textSize(46);
        text("Spiller 1 vandt!!",width/2 + random(-5,5), height/2 + random(3 ));
        text("Spiller 2 havde: " +score+ " point", width/2, height/2 + 50);
    }else {
        fill(col);
        textSize(46);
        text("Spiller 2 vandt!!",width/2 + random(-5,5), height/2 + random(3 ));
        text("Spiller 1 havde: " +scoret+ " point", width/2, height/2 + 50);
    }
    }

   

function display() {
    fill(255);
    textSize(12);
    text("Score: "+score, width-80, 30);
    text("Spiller 2: ", width-160, 30);
    text("Score: "+scoret, width-560, 30);
    text("Spiller 1: ", width-640, 30);
    
    //Her skal vi sørge for at frugterne bliver vist, hvis de skal vises
    for (let i = 0; i < frugter.length; i++) {
        frugter[i].tegn();
    }    

    // Her vises turbanen - foreløbig blot en firkant
    turban.tegn();
    turbant.tegnt();
}

function rammer(){
    turban.rammer();
    turbant.rammer();
}

function flytTurban() {
    // Denne funktion kalder bare videre til Kurv-klassen
    turban.flytKurv();
}

function flytTurbant() {
    // Denne funktion kalder bare videre til Kurv-klassen
    turbant.flytKurvt();
}
    
function flytFrugter() {
    //Her skal vi sørge for at frugterne bevæger sig, hvis de er startet
    for (let i = 0; i < frugter.length; i++) {
        frugter[i].flyt();
    }

}

function checkScore() {
    // Her checkes om turbanen har fanget appelsinen. Hvis ja, skydes en ny appelsin afsted
    for (let i = 0; i < frugter.length; i++) {
        
            if (turban.grebet(frugter[i])) {
                score += frugter[i].point;
                frugter[i].shootNew(); 
            } else if (turbant.grebett(frugter[i])) {
                scoret+= frugter[i].point;
                frugter[i].shootNew();
            }
        }
    
    }


function keyPressed() {
    // Funktionen gør ingenting lige nu
    return false;  // Forebygger evt. browser default behaviour
}
/*
    Fjernet fordi man ikke skal kunne lave en frugt når man trykker
function mouseClicked(){ // Når man klikker på musen.
    // Lav en ny frugt
    let nyfrugt = new Frugt(mouseX, mouseY, 40, 40, 4, -10, [0,110,210])
    // Tilføj den nye frugt til frugter array
    frugter.push(nyfrugt);
     
}
*/

/*
OPGAVER
 Opgave 1 - Lige nu er der tre frugter i arrayet - lav programmet om, sådan at når man 
            klikker på skærmen med musen, så spawnes der en ny frugt, der hvor man klikker,
            med tilfældig x- og y-hastighed. For at lægge den ind i frugter-arrayet skal man
            bruge   frugter.push(foo)  hvor foo er det objekt, man vil føje til. 
            Se gerne i "p5 Reference" hvordan, hvis ikke I kan huske det:   
            https://p5js.org/reference/

 Opgave 2 - Lav programmet om så frugterne starter i toppen af skærmen og falder ned derfra, gerne
            stadigvæk med en lille bue på

 Opgave 3 - Lav programmet om så frugterne kan give forskellige pointværdier til score

 Opgave 4 - Lav programmet om så nogle af frugterne kan give ekstra liv

 Opgave 5 - Lav programmet om så der er en liste af frugttyper, der kan dannes. Her kan det være
            relevant at bruge javascript objektnotation. Led på nettet efter hvordan det gøres, hvis 
            ikke I kan huske det

 Opgave 6 - Lav programmet om så frugter, der ikke gribes, går ud af spillet. Det betyder at I skal 
            fjerne dem fra frugter-arrayet. Det gøres med kommandoen frugter.splice() - se på nettet 
            hvordan, hvis ikke I kan huske det. Sørg for, at der dog altid er mindst een frugt i arrayet.
            Overvej hvilken konsekvens dette vil have for dynamikken (D) i spillet?       

 Opgave 7 - Lav programmet om så der spilles en lyd, når en frugt gribes, og en anden lyd, når en
            frugt misses. Knyt eventuelt forskellige lyde til forskellige frugttyper.

 Opgave 8 - Lav programmet om så der kan være to turbaner på skærmen med to forskellige spillere.
            Den ene bruger piltasterne, som nu - den anden skal brge WASD til at styre turbanen med.

 


*/
