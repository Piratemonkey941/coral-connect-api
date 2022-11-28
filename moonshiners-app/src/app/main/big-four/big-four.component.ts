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

  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.hide();
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
  alkilinity: number

  onAddAlkilinity(){

    let salinity = this.alkilinityStart

    if (this.alkilinity <= 35 && this.alkilinity >= 33){

        this.alkilinityStart = 'alkilinity is acceptable'
      }
    else if ( this.alkilinity <= 32.9 && this.alkilinity >= 29 ){

      this.alkilinityStart = 'alkilinity is lower then expected'
      }
    else if ( this.alkilinity <= 38  && this.alkilinity >= 35.1 ){

      this.alkilinityStart = 'alkilinity is sligtly higher then expected'
     }
    else if ( this.alkilinity <= 45  && this.alkilinity >= 38.1 ){

      this.alkilinityStart = 'alkilinity is sligtly higher then expected'
      }
    else {

      this.alkilinityStart = 'Retest parameter'
    }
  }
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
