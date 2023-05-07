class CalcController {

    constructor(){

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();

    }

    initialize(){

        let displayCalcEl = document.querySelector('#display')
        let horaEl = document.querySelector('#hora')
        let dataEl = document.querySelector('#data')

        displayCalcEl.innerHTML = '00'
        horaEl.innerHTML = '21:28'
        dataEl.innerHTML = '06/05/2023'
    }

     get displayCalc(){
        return this._displayCalc;
     }
     set displayCalc(valor){
         this._displayCalc = valor;
     }


     get currentDate(){
        return this._currentDate;
     }
     set currentDate(valor){
         this._currentDate = valor;
     }
}