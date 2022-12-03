import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-big-four',
  templateUrl: './big-four.component.html',
  styleUrls: ['./big-four.component.scss']
})
export class BigFourComponent implements OnInit {




  formModal:any;

  constructor() { }

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


//VOLUME

  volumeStart: string = 'Does Size Matter?'
  volume: number
  submitedVolume: number

  onAddVolume(){

    let volume = this.volume

    this.volumeStart = `Your Reef is ${volume} gallons`

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

  alkilinityStart: string = 'The foundation of our Reef'
  alkilinityAdjustment: any
  alkilinity: number

  onAddAlkilinity(){

    let alkilinity = this.alkilinityStart
    //calculation for 0.1 dkh change per volume
    this.alkilinityAdjustment = (0.0714 * this.volume).toFixed(2)

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

  // show volume * 0.0714 for 0.1 dkh adjustment


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
    else if ( this.calcium <= 600  && this.alkilinity >= 521 ){

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
