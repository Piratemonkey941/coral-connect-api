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

    // if (this.volume <= 35 && this.volume >= 33){

    //     this.volumeStart = 'volume is acceptable'
    //   }
    // else if ( this.volume <= 32.9 && this.salinity >= 29 ){

    //   this.volumeStart = 'volume is lower then expected'
    //   }
    // else if ( this.volume <= 38  && this.salinity >= 35.1 ){

    //   this.volumeStart = 'volume is sligtly higher then expected'
    //  }
    // else if ( this.volume <= 45  && this.salinity >= 38.1 ){

    //   this.volumeStart = 'volume is sligtly higher then expected'
    //   }
    // else {

    //   this.volumeStart = 'Retest parameter'
    // }
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

  onAddCalcium(){

    let calcium = this.calciumStart

    if (this.calcium <= 35 && this.calcium >= 33){

        this.calciumStart = 'calcium is acceptable'
      }
    else if ( this.calcium <= 32.9 && this.calcium >= 29 ){

      this.calciumStart = 'calcium is lower then expected'
      }
    else if ( this.calcium <= 38  && this.calcium >= 35.1 ){

      this.calciumStart = 'calcium is sligtly higher then expected'
     }
    else if ( this.calcium <= 45  && this.alkilinity >= 38.1 ){

      this.calciumStart = 'calcium is sligtly higher then expected'
      }
    else {

      this.calciumStart = 'Retest parameter'
    }
  }
  //Magnesium

  magnesiumStart: string = 'The foundation of our Reef'
  magnesium: number

  onAddMagnesium(){

    let magnesium = this.magnesiumStart

    if (this.magnesium <= 35 && this.magnesium >= 33){

        this.magnesiumStart = 'magnesium is acceptable'
      }
    else if ( this.magnesium <= 32.9 && this.magnesium >= 29 ){

      this.magnesiumStart = 'magnesium is lower then expected'
      }
    else if ( this.magnesium <= 38  && this.magnesium >= 35.1 ){

      this.magnesiumStart = 'magnesium is sligtly higher then expected'
     }
    else if ( this.magnesium <= 45  && this.magnesium >= 38.1 ){

      this.magnesiumStart = 'magnesium is sligtly higher then expected'
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
