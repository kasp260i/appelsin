/*
 * Dette script definerer klassen Frugt
*/

class Frugt {
    /* Den første del er en "konstruktør".
     * Den tager parametrene og konstruerer et nyt objekt 
     * ud fra dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet this
     */
    constructor(x, y, bredde, dybde, xspeed, yspeed, farve, point) {
        this.smag = 1;  // hvor mange point skal denne frugt give? Fast værdi: 1
        this.x = x;     // x-position
        this.y = y;     // y-position
        this.bred = bredde; 
        this.dyb = dybde;
        this.xspeed = xspeed = 0;
        if (yspeed < - sqrt((y-15)*grav)) {
            this.yspeed = - sqrt((y-15)*grav);
        } else {
            this.yspeed = yspeed;
        }
        this.col = farve;
        this.tid = random(100, 450); //tidsforsinkelsen før frugten vises og afskydes
        this.point = 1
    }   
    
    /* Tegner frugten. Her kan evt. sættes et billede ind i stedet
     */
    tegn = function() {
        if (this.tid < 100) {
            fill(this.col);
            ellipse(this.x, this.y, this.bred, this.dyb);
            //image(frugtBillede, this.x, this.y);
        }
    }

    /*
        flyt()  flytter frugten
    */
    flyt = function() {
        //Her skal vi sørge for at appelsinen bevæger sig, hvis den er startet
        this.tid -= 1;
        if (this.tid <= 0) {
            this.x += this.xspeed;
            this.y += this.yspeed;
            this.yspeed += grav;
        }
        if (this.x > width || this.y > height) {
            missed += 1;
            missedlyd.play();
            liv -= this.smag;
            this.shootNew();
        } else if (scoret>=done || score>=done) {
            spilIgang = false;    
            musik.stop();
            outro.play();
        }
    }


    shootNew = function() {
        //Her skal vi sørge for at frugten skydes afsted igen 
        this.y = 30;
        let newX = random(30,700);
        let newYSpeed = - sqrt((this.y-15)*grav);
        this.x = newX;
        this.xspeed = random(0) ;
        this.yspeed = newYSpeed ;
        this.tid = random(400);
    }

} 