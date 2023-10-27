//METODO 1 -> mas actualizado
class Timer{
    constructor(durationInput, btnStart, btnPause, callbacks){
        this.durationInput = durationInput;
        this.btnStart = btnStart;
        this.btnPause = btnPause;

        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.btnStart.addEventListener("click",this.start);
        this.btnPause.addEventListener("click",this.pause);
    }
    start = () => { //Arrow function
        if(this.onStart){
            this.onStart(this.timeRemaining);
        } 
        this.tick();
        this.interval = setInterval(this.tick,20); //Se pone this.interval para poder usar la variable en otros metodos
    }
    pause = () => {
        clearInterval(this.interval);
    }
    tick = () => {
        //Obtener el valor del timer
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        } else {
            this.timeRemaining /*SETTER*/ = this.timeRemaining - 0.02; /*GETTER*/
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    }
    get timeRemaining() {  //GET
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time) { //SET
        this.durationInput.value = time.toFixed(2);
    }
}