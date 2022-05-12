class duck {
    constructor(flying=false, quaking=false, xPos=0, yPos=0) {
        this.flying = flying;
        this.quaking = quaking;
        this.xPos = xPos;
        this.yPos = yPos;
    }

    get gfly(){return this.flying;}
    get gquack(){return this.quaking;}
    get gxPos(){return this.xPos;}
    get gyPos(){return this.yPos;}

    set sfly(x){this.flying = x;}
    set squack(y){this.quacking = y;}
    set sxPos(z){this.xPos = z;}
    set syPos(w){this.yPos = w;}

    takeOff(){
        this.flying = true;
    }
    land(){
        this.flying = false;
    }
    startQuacking() {
        this.quaking = true;
    }
    stopQuacking() {
        this.quaking = false;
    }
    moveTo(x, y){
        this.xPos = x;
        this.yPos = y;
    } 
}
module.exports.duck;

let duck1 = new duck(true,true,0,0);
console.log(duck1.flying);
console.log(duck1.quaking);
console.log(duck1.xPos);
console.log(duck1.yPos);