

import { Component, ElementRef, OnInit, ViewChild, Input, Output } from '@angular/core';
import { ElementCalculatorService } from 'src/app/shared/element-calculator.service';
import { BigFourComponent } from '../big-four/big-four.component';

declare var window: any;

@Component({
  selector: 'app-major-elems',
  templateUrl: './major-elems.component.html',
  styleUrls: ['./major-elems.component.scss']
})
export class MajorElemsComponent implements OnInit {

  formModal:any;                              // something for modal
  selectedElement: string = ''

  @Input() receivedValue: String;

  constructor(private bigFourComponent:BigFourComponent) { }


  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    )


  }

  // MODAL CODE

    openModal(){
      this.formModal.show();
    }

    closeModal(){
      this.formModal.hide();
    }


boron: number
boronStart: string = 'Acid, harmfull to the animals stored in the vessel '

boronAdjustment: any
boronAdjustmentTotal: any
boronDays: any

onAddBoron(){ // for basic calculation on card

  let boron = this.boronStart
  //calculation for 0.1 dkh change per volume

  this.boronAdjustmentTotal = 0.9464 * this.bigFourComponent.volume // general boron calculation
  this.boronDays = (6 - this.boron).toFixed(2)
  this.boronAdjustment = this.boronAdjustmentTotal/this.boronDays
//Best Range

  if (this.boron = 6){
      this.boronStart = 'Ideal Boron for most reefs'
    }
//low start  9.46ml at 100 g for 0.1 ppm increase
// 94.64ml per day for 1 ppm recovery
  else if ( this.boron <= 2 && this.boron >= 0 ){

    this.boronStart = `Boron low, adjust immedietly but slowly. ${this.boronAdjustment}ml per day for ${this.boronDays} days  `
    }
  else if ( this.boron <= 5.9 && this.boron >= 2.1 ){
    this.boronStart = `Boron slighty low, adjust slowly to 6ppm. ${this.boronAdjustment}ml will increase ppm by 0.1 `
    }

//high start
  else if ( this.boron <= 6.5  && this.boron >= 6.1){

    this.boronStart = 'Acceptable Range However RM method recomends adjusting to 6 '
   }
  else if ( this.boron <= 8  && this.boron >= 6.6 ){

    this.boronStart = 'Boron slightly elevated recomendation is to allow level to settle down and watch ICP '
    }
  else if ( this.boron <= 10  && this.boron >= 8.1 ){

    this.boronStart = 'Boron critically elevated recomendation is to allow level to settle down and watch ICP '
    }
  else if ( this.boron <= 20 && this.boron >= 10.1 ){

    this.boronStart = 'Boron extremely elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
    }
  else {
    this.boronStart = 'Retest parameter'
  }
}

  //ALKILINITY
  alkilinity: number
  alkilinityStart: string = 'Acid, harmfull to the animals stored in the vessel '

  alkilinityAdjustment: any


  onAddAlkilinity(){ // for basic calculation on card

    let alkilinity = this.alkilinityStart
    //calculation for 0.1 dkh change per volume
    this.alkilinityAdjustment = (0.1429 * this.bigFourComponent.volume).toFixed(2) // for sodium bicarbonate lower/nuetural ph

    if (this.alkilinity <= 8.5 && this.alkilinity >= 7.9){
        this.alkilinityStart = 'Ideal alkilinity for most reefs'
      }
    else if ( this.alkilinity <= 7.2 && this.alkilinity >= 6.6 ){

      this.alkilinityStart = `Alkilinity low, adjust slowly. ${this.alkilinityAdjustment}ml will increase dkh by 0.1 `
      }
    else if ( this.alkilinity <= 7.8 && this.alkilinity >= 7.3 ){
      this.alkilinityStart = 'Alk slightly low usually only used in Ultra low nutrient system (ULNS)'
      }
    else if ( this.alkilinity <= 11.9  && this.alkilinity >= 8.6){

      this.alkilinityStart = 'Alk slightly higher, not usually recommended at very low nutrient levels and may wash out coral color '
     }
    else if ( this.alkilinity <= 14  && this.alkilinity >= 12 ){

      this.alkilinityStart = 'Alk slightly higher, not usually recommended at very low nutrient levels and may wash out coral color or cause bleaching '
      }
    else {
      this.alkilinityStart = 'Retest parameter'
    }
  }

  //Calcium

  calciumStart: string = 'A broken bone can heal, so can the Reef'
  calcium: number
  calciumAdjustment: any

  onAddCalcium(){

    let calcium = this.calciumStart
    this.calciumAdjustment = (0.1024 * this.bigFourComponent.volume).toFixed(2)

    if (this.calcium <= 440 && this.calcium >= 420){

        this.calciumStart = 'Optimal calcium range. Keep up the great work!'
      }
    else if ( this.calcium <= 360 && this.calcium >= 200 ){

      this.calciumStart = `Very Low Calcium Level. Recommended to increase to 420 ppm immedietly by dosing ${this.calciumAdjustment}ml for 1ppm increase.`
      }
    else if ( this.calcium <= 400 && this.calcium >= 361 ){

      this.calciumStart = `Low Calcium Level. Recommended to increase to 420-440 ppm by dosing ${this.calciumAdjustment}ml for 1ppm increase.`
      }
    else if ( this.calcium <= 419 && this.calcium >= 401 ){

      this.calciumStart = `Acceptable Calcium Level. Recommended to increase to 420-440 ppm by dosing ${this.calciumAdjustment}ml for 1ppm increase.`
      }
    else if ( this.calcium <= 520 && this.calcium >= 441){

      this.calciumStart = 'Calcium above target. Slow Dosage to let Calcium settle down.'
     }
    else if ( this.calcium <= 600  && this.calcium >= 521 ){

      this.calciumStart = 'Calcium highly elevated! Retest water and if consistant proform water changes to reduce level.'
      }
    else {

      this.calciumStart = 'Retest parameter'
    }
  }
  //Magnesium

  magnesiumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
  magnesium: number
  magnesiumAdjustment: any

  onAddMagnesium(){

    let magnesium = this.magnesiumStart
    this.magnesiumAdjustment = (0.806 * this.bigFourComponent.volume).toFixed(2)

    if (this.magnesium <= 1400 && this.magnesium >= 1300){

        this.magnesiumStart = 'magnesium is acceptable'
      }

    else if ( this.magnesium <= 1299 && this.magnesium >= 1251 ){

      this.magnesiumStart = `Magnesium is lower then expected. Correct to target of 1350 by dosing ${this.magnesiumAdjustment}ml for 10ppm increase`
      }
    else if ( this.magnesium <= 1251 && this.magnesium >= 1000 ){

      this.magnesiumStart = `Low Magnesium level. Correct to target of 1350 by dosing ${this.magnesiumAdjustment}ml for 10ppm increase.`
      }
    else if ( this.magnesium <= 1600 && this.magnesium >= 1401 ){

      this.magnesiumStart = 'Magnesium is sligtly higher then expected. Slow or stop dosing and allow level to settle down'
     }
    else if ( this.magnesium <= 2000  && this.magnesium >= 1601 ){

      this.magnesiumStart = 'magnesium is higher then expected, proform water changes to reduce level to acceptable range 1350'
      }
    else {

      this.magnesiumStart = 'Retest parameter'
    }
  }

}

