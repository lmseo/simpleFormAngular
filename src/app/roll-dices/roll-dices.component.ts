import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-roll-dices',
  templateUrl: './roll-dices.component.html',
  styleUrls: ['./roll-dices.component.css']
})
export class RollDicesComponent implements OnInit {
  @ViewChild('f') rollDiceFormViewChild: NgForm; 
	numberRolls: number = 10;
  numberRollsIsInt: boolean = true;
  numberRollsIsNan: boolean = false;
	numberDice: number = 3;
	yourNumber: number = 6;
	hits: number = 0;
  errorMeassageArray: string[] = [
    'It is not a number',
    'It is not an integer',
    'It is not a number between 1 and 6'
  ];
  rollDiceForm: FormGroup;


  constructor() { 
    this.setHits(this.numberRolls, this.numberDice, this.yourNumber);
    
  }
  onYourNumberChange(newYourNumber){
    this.yourNumber = newYourNumber;

    this.setHits(this.numberRolls, this.numberDice, Number.parseInt(newYourNumber));
  }
  onNumberRollsChange(newNumberRolls){
    let numberRolls = Number( newNumberRolls );



    this.numberRolls = newNumberRolls;
    this.numberRollsIsInt = Number.isInteger( numberRolls );
    this.numberRollsIsNan = Number.isNaN( numberRolls );
    if(!this.numberRollsIsNan){
      this.setHits(Number.parseInt(newNumberRolls), this.numberDice, this.yourNumber);
    }

    //console.log(numberRolls + ' ' + this.numberRollsIsNan + ' ' + this.numberRollsIsInt);
    console.log(this.rollDiceForm);

  }
  onNumberDiceChange(newNumberDice){
    this.numberDice = newNumberDice;
    this.setHits(this.numberRolls, Number.parseInt(newNumberDice), this.yourNumber);
  }
  onSubmit(form: HTMLFormElement){
    //console.log( this.rollDiceFormViewChild );
  }
  rollDice(){
    this.setHits(this.numberRolls, this.numberDice, this.yourNumber);
  }
  setHits(numberRolls: number, numberDice: number, yourNumber: number){
    

    let hits: number = 0;
    for (let i = 1; i <= numberRolls; i++) {
      for (let j = 1; j <= numberDice; ++j) {
        let randomInt = this.getRandomIntInclusive(1 , 6);
        let boolHits = Number.isInteger(yourNumber);
        if(yourNumber === randomInt) {
           hits++;
        }
      }
    }
    this.hits = hits;
  }
 	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
   }
  ngOnInit(): void {
    this.rollDiceForm = new FormGroup({
      'rolls': new FormControl(this.numberRolls, [
        Validators.required,
        Validators.min(1),
        Validators.max(9),
      ]),
      'dice': new FormControl(this.numberDice),
      'number': new FormControl(this.yourNumber, Validators.required)
    });
  }
}
