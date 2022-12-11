import { Component, ElementRef, OnInit, ViewChild, Input, Output } from '@angular/core';
import {AdditiveSelected} from './alk-selector'
declare var window: any;

@Component({
  selector: 'app-big-four',
  templateUrl: './big-four.component.html',
  styleUrls: ['./big-four.component.scss']
})
export class BigFourComponent implements OnInit {

  // alkAdditive: any []
formModal:any;                              // something for modal

  // onAlkAdditiveSelected: any


  @Input() receivedValue: String;

  constructor() { }

  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    )

    //defines what is in the alk array
  this.additiveSelectedAlk = [
      {Id:0, Name:"Select Additive"},
      {Id:1, Name:"Liquid Sodium Bicarbonate"},
      {Id:2, Name:"Liquid Soda Ash"},
      {Id:3, Name:"Liquid Kalkwasser"},
    ]

    this.additiveSelectedDefault = 0;
  }

// MODAL CODE

  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.hide();
  }

//VOLUME

  volumeStart: string = 'Does Size Matter?'
  volume: number = 10
  submitedVolume: number

  onAddVolume(){

    let volume = this.volume

    this.volumeStart = `Your Reef is ${volume} gallons`

    console.log(this.volume)
    return volume
  }

//SALINITY

  salinityStart: string = 'The foundation of our Reef'
  salinity: number

  onAddSalinity(){

    let salinity = this.salinityStart

    if (this.salinity <= 35 && this.salinity >= 33){

        this.salinityStart = 'Salnity is acceptable'
      }
    else if ( this.salinity <= 32.9 && this.salinity >= 29 ){

      this.salinityStart = 'Salnity is lower then expected'
      }
    else if ( this.salinity <= 38  && this.salinity >= 35.1 ){

      this.salinityStart = 'Salnity is sligtly higher then expected'
     }
    else if ( this.salinity <= 45  && this.salinity >= 38.1 ){

      this.salinityStart = 'Salnity is sligtly higher then expected'
      }
    else {

      this.salinityStart = 'Retest parameter'
    }
  }

  //ALKILINITY
  alkilinity: number
  alkilinityStart: string = 'The foundation of our Reef'

  alkilinityAdjustment: any


  onAddAlkilinity(){ // for basic calculation on card

    let alkilinity = this.alkilinityStart
    //calculation for 0.1 dkh change per volume
    this.alkilinityAdjustment = (0.1429 * this.volume).toFixed(2) // for sodium bicarbonate lower/nuetural ph

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

  alkilinityChange: number
  alkilinityAdjustmentSA: number
  alkilinityAdjustmentKW: number
  alkilinityAdjustmentSB: number
  // alkilinityModalStart: string = 'MMH Bicarbonates, Its whats for Dinner'
  // alkSodiumBicarb: any

  alkilinityDesired: number
  alkilinityCurrent: number

  alkilinityResult: string
  // alkilinityResultSA: number
  // alkilinityResultKW: number

  additiveSelectedAlk: AdditiveSelected[];    // Created empty array for loop
  additiveSelectedDefault: number             // for default selected in alk modal
  modifiedTextAlk: string


  onAlkAdditiveSelected(val:number) {

    // Return the val number
    console.log("new val function",val)
    return val;
  }

  alkinityCalculator(val:number) { // logic here

    this.alkilinityChange = (this.alkilinityDesired - this.alkilinityCurrent) * 10

    console.log("comming from val function",this.onAlkAdditiveSelected(val)) // confirming that the Id is activly changing
    console.log(this.alkilinityResult) // confirming that the Id is activly changing

    if (val === this.onAlkAdditiveSelected(1))  // sodium bicarb logic here
    {
      // this.alkilinityAdjustmentSB = (0.1429 * this.volume).toFixed(2) // for sodium bicarbonate lower/nuetural ph
      this.alkilinityAdjustmentSB = (0.1429 * this.volume) // for sodium bicarbonate lower/nuetural ph
      this.alkilinityResult = (this.alkilinityChange * this.alkilinityAdjustmentSB).toFixed(2)

      console.log(this.alkilinityResult)
      return this.alkilinityResult
    }
     else if( val === this.onAlkAdditiveSelected(2))
    {
      this.alkilinityAdjustmentSA = (0.0714 * this.volume) // for soda ash higher ph
       this.alkilinityResult = (this.alkilinityChange * this.alkilinityAdjustmentSA).toFixed(2)
       console.log('volume', this.volume)
      return this.alkilinityResult
    }
    else if (val === this.onAlkAdditiveSelected(3) ){
      this.alkilinityAdjustmentKW = (3.322 * this.volume) // for Kalkwasser higher ph
       this.alkilinityResult = (this.alkilinityChange * this.alkilinityAdjustmentKW).toFixed(2)

      return this.alkilinityResult
      }
    else {
        'Please complete form'
      }
      console.log(this.modifiedTextAlk)

      this.alkilinityChange = (this.alkilinityDesired - this.alkilinityCurrent) * 10


  }

  // customAlkFunction(val: any)
  // {

  //   console.log(val)
  //   this.modifiedTextAlk = `Dose ${this.alkilinityResult}ml to achieve new level`
  // }

  //Calcium

  calciumStart: string = 'The foundation of our Reef'
  calcium: number
  calciumAdjustment: any

  onAddCalcium(){

    let calcium = this.calciumStart
    this.calciumAdjustment = (0.1024 * this.volume).toFixed(2)

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

  magnesiumStart: string = 'The foundation of our Reef'
  magnesium: number
  magnesiumAdjustment: any

  onAddMagnesium(){

    let magnesium = this.magnesiumStart
    this.magnesiumAdjustment = (0.806 * this.volume).toFixed(2)

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






// customAlkFunction(val: any)
// {
//   // val = this.alkVal

//   // console.log(val)
//   // console.log(this.alkVal)
//   // console.log(this.modifiedTextAlk)
//   // console.log(this.modifiedTextAlk)

//   this.modifiedTextAlk = `Dose ${this.alkilinityResult}ml to achieve new level`
//   // this.alkilinityChange = (this.alkilinityDesired - this.alkilinityCurrent) * 10

//   // if (this.alkVal = 1)  // sodium bicarb logic here
//   // {
//   //   this.alkilinityAdjustment = (0.1429 * this.volume).toFixed(2) // for sodium bicarbonate lower/nuetural ph
//   //   return this.alkilinityResult = this.alkilinityChange * this.alkilinityAdjustment
//   // }
//   //  if ( this.alkVal = 2)
//   // {
//   //   this.alkilinityAdjustmentSA = (0.0714 * this.volume).toFixed(2) // for soda ash higher ph
//   //   return this.alkilinityResult = this.alkilinityChange * this.alkilinityAdjustmentSA
//   // }
//   // else if (this.alkVal = 3 ){
//   //   this.alkilinityAdjustmentKW = (3.322 * this.volume).toFixed(2) // for Kalkwasser higher ph
//   //   return this.alkilinityResult = this.alkilinityChange * this.alkilinityAdjustmentKW
//   //   }
//   // else {
//   //     'Please complete form'
//   //   }
//   // console.log(val)

// }




  // alkilinityCalculator(){

    // const changeSelectedAlk = (e) => {
    //   const $select = (<HTMLInputElement>document.querySelector('#alkInputGroup')).value;
    //   $select.value = 'steve'
    // };

    // this.alkilinityChange = (this.alkilinityDesired - this.alkilinityCurrent) * 10;

    // this.alkilinityAdjustment = (0.1429 * this.volume).toFixed(2) // for sodium bicarbonate lower/nuetural ph
    // this.alkilinityAdjustmentSA = (0.0714 * this.volume).toFixed(2) // for soda ash higher ph
    // this.alkilinityAdjustmentKW = (3.322 * this.volume).toFixed(2) // for Kalkwasser higher ph

    // this.additiveSelected[1] = (0.0714 * this.volume).toFixed(2) // for soda ash higher ph

    // this.alkilinityResult = this.alkilinityChange * this.alkilinityAdjustment
    // this.alkilinityResultSA = this.alkilinityChange * this.alkilinityAdjustmentSA
    // this.alkilinityResultKW = this.alkilinityChange * this.alkilinityAdjustmentKW

    // if (this.alkilinityChange)
    //   {
    //     this.alkilinityModalStart =  `Your correction is ${this.alkilinityResult}ml of liquid Sodium Bicarbonate`
    //   }
    //   //returns this above
    // else if ( this.alkilinityResultSA)
    // {
    //   this.alkilinityModalStart = `Your correction is ${this.alkilinityResultSA}ml of liquid Soda Ash`
    // }
    // else if (this.alkilinityResultKW ){

    //   this.alkilinityModalStart = `Your correction is ${this.alkilinityResultKW}ml of liquid Kalkwasser`
    //   }
    // else {
    //     'Complete form'
    //   }
    // return this.alkilinityCalcResult

    // console.log(this.alkilinityResultSA)
  // }

  // show volume * 0.0714 for 0.1 dkh adjustment
// onAlkSelected() {
  //   this.alkilinityAdjustment = this.alkAdditive.nativeElement.value;
  //   console.log(this.onAlkSelected)
  // }

  // @ViewChild('alkAdditive') alkAdditive!: ElementRef




  // (function () {
  //   (".menu-link").click(function () {
  //    (".menu-link").removeClass("is-active");
  //    (this).addClass("is-active");
  //   });
  //  });

  //  (function () {
  //   (".main-header-link").click(function () {
  //    (".main-header-link").removeClass("is-active");
  //    (this).addClass("is-active");
  //   });
  //  });

  //  const dropdowns = document.querySelectorAll(".dropdown");
  //  dropdowns.forEach((dropdown) => {
  //   dropdown.addEventListener("click", (e) => {
  //    e.stopPropagation();
  //    dropdowns.forEach((c) => c.classList.remove("is-active"));
  //    dropdown.classList.add("is-active");
  //   });
  //  });

  //  (".search-bar input")
  //   .focus(function () {
  //    (".header").addClass("wide");
  //   })
  //   .blur(function () {
  //    (".header").removeClass("wide");
  //   });

  //  (document).click(function (e) {
  //   var container = $(".status-button");
  //   var dd = $(".dropdown");
  //   if (!container.is(e.target) && container.has(e.target).length === 0) {
  //    dd.removeClass("is-active");
  //   }
  //  });

  //  (function () {
  //   (".dropdown").on("click", function (e) {
  //    (".content-wrapper").addClass("overlay");
  //    e.stopPropagation();
  //   });
  //   (document).on("click", function (e) {
  //    if ($(e.target).is(".dropdown") === false) {
  //     (".content-wrapper").removeClass("overlay");
  //    }
  //   });
  //  });

  //  (function () {
  //   (".status-button:not(.open)").on("click", function (e) {
  //    (".overlay-app").addClass("is-active");
  //   });
  //   (".pop-up .close").click(function () {
  //    (".overlay-app").removeClass("is-active");
  //   });
  //  });

  //  (".status-button:not(.open)").click(function () {
  //   (".pop-up").addClass("visible");
  //  });

  //  (".pop-up .close").click(function () {
  //   (".pop-up").removeClass("visible");
  //  });

  //  const toggleButton = document.querySelector('.dark-light');

  //  toggleButton.addEventListener('click', () => {
  //    document.body.classList.toggle('light-mode');
  //  });
// }
