/*
 * Dette script definerer klassen Kurv
*/

class Kurv {
    /* Den første del er en "konstruktør".
     * Den tager parametrene og konstruerer et nyt objekt 
     * ud fra dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet this
     */
    constructor(x, y, bredde, dybde, speed) {
        this.x = x;
        this.y = y;
        this.bred = bredde;
        this.dyb = dybde;
        this.speed = speed;
        this.col = [250,230,150];
        //kurv 2
        this.xt = 10;
        this.yt = 100;
        this.speedt = 5;
        this.colt = [0,0,225];
    }   
    
    /* Tegner kurven. Her kan evt. sættes et billede ind i stedet
     */
    tegn = function() {
        fill(this.col);
        rect(this.x, this.y, this.bred, this.dyb);
        //image(turbanBillede, this.x, this.y);
    }

    tegnt = function() {
        fill(this.colt);
        rect(this.xt, this.yt, this.bred, this.dyb);
        //image(turbanBillede, this.x, this.y);
    }

    flytKurv = function() {
        // flyt turbanen
        if (keyIsDown(UP_ARROW)) {
            this.moveY(-this.speed);
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.moveY(this.speed);
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.moveX(-this.speed);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.moveX(this.speed);
        } 
    }

    flytKurvt = function() {
        // flyt turbanen
        if (keyIsDown(87)) {
            this.moveYt(-this.speedt);
        }
        if (keyIsDown(83)) {
            this.moveYt(this.speedt);
        }
        if (keyIsDown(65)) {
            this.moveXt(-this.speedt);
        }
        if (keyIsDown(68)) {
            this.moveXt(this.speedt);
        } 
    }

    /* Flytter kurvens position
     */
    moveX = function(flyt) {
        this.x += flyt;
        if (this.x < 0) {this.x = 0;};
        if (this.x > width-this.bred) {this.x = width - this.bred;};
    }

    moveY = function(flyt) {
        this.y += flyt;
        if (this.y < 0) {this.y = 0;};
        if (this.y > height-this.dyb) {this.y = height - this.dyb;};
    }

    moveXt = function(flyt) {
        this.xt += flyt;
        if (this.xt < 0) {this.xt = 0;};
        if (this.xt > width-this.bred) {this.xt = width - this.bred;};
    }

    moveYt = function(flyt) {
        this.yt += flyt;
        if (this.yt < 0) {this.yt = 0;};
        if (this.yt > height-this.dyb) {this.yt = height - this.dyb;};
    }

    /* Tjekker om bolden/appelsinen er grebet ved at se om den rammer
     * "rent" ned gennem kurvens overkant. Parametrene er hhv. boldens
     * midtpunkts koordinater og boldens radius
     */
    grebet = function(frugt) {
        if ((frugt.y < this.y+7 && frugt.y > this.y-7) && frugt.x > this.x/*+frugt.bredde/2*/ && frugt.x < this.x+this.bred/*-frugt.bredde/2*/ ) {
            grebetsang.play();
            return true;
        } 
        else {
            return false;
        }
    }

    grebett = function(frugt) {
        if ((frugt.y < this.yt+7 && frugt.y > this.yt-7) && frugt.x > this.xt/*+frugt.bredde/2*/ && frugt.x < this.xt+this.bred/*-frugt.bredde/2*/) {
            grebetsang.play();
            return true;
        } 
        else {
            return false;
        }
    }

    rammer = function(){
        if ((turbant.xt<turban.x+70 && turbant.xt+70>turban.x)&&(turbant.yt<turban.y+50 && turbant.yt+50>turban.y)) {
            console.log("Ramt")
            missedlyd.play();
            turbant.xt = 10;
            turbant.yt = 100;
            turban.x = 670;
            turban.y = 100;
        } 
    }

} 

