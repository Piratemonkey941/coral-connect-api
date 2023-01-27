import { Component, ElementRef, OnInit, ViewChild, Input, Output } from '@angular/core';
import { ElementCalculatorService } from 'src/app/shared/element-calculator.service';
import { VolumeService } from 'src/app/shared/volume.service';

declare var window: any;

@Component({
  selector: 'app-minor-elems-three',
  templateUrl: './minor-elems-three.component.html',
  styleUrls: ['./minor-elems-three.component.scss']
})
export class MinorElemsThreeComponent implements OnInit {


  formModal:any;                              // something for modal
  selectedElement: string = ''

  @Input() receivedValue: String;
  @Input() volume: number
  constructor(public volumeService: VolumeService) { }


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

  // ==================================================== Rubidium ====================================================
  rubidiumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
  rubidium: number
  rubidiumAdjustment: any
  rubidiumAdjustmentTotal: number
  rubidiumDays: number
  rubidiumQuantityDivisor: number

  onAddRubidium(){

      // general boron calculation
      this.rubidiumDays = Math.ceil(410 - this.rubidium)   // 2
      this.rubidiumQuantityDivisor = (410 - this.rubidium) // 410 - 4.5 = 1.5
      this.rubidiumAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.rubidiumQuantityDivisor
      this.rubidiumAdjustment = this.rubidiumAdjustmentTotal / this.rubidiumDays


        if (this.rubidium == 10){
            this.rubidiumStart = 'Ideal  for most reefs'
        }
      //low start  7.72ml at 100 g for 0.1 ppm increase

        else if ( this.rubidium <= 3 && this.rubidium >= 0){
          this.rubidiumStart = `Depleted rubidium Level, Correct immedietly ${this.rubidiumAdjustment}ml per day for ${this.rubidiumDays} days.  `
        }
        else if ( this.rubidium <= 6 && this.rubidium >= 3.1 ){
          this.rubidiumStart = `Low rubidium level, adjust  ${this.rubidiumAdjustment}ml per day for ${this.rubidiumDays} days.  `
        }
        else if ( this.rubidium <= 9 && this.rubidium >= 6.1 ){
          this.rubidiumStart = `Reduced rubidium, adjust  ${this.rubidiumAdjustment}ml per day for ${this.rubidiumDays} days.  `
        }
        else if ( this.rubidium <= 9.9 && this.rubidium >= 9.1 ){
          this.rubidiumStart = `Optimal Range for rubidium, adjust ${this.rubidiumAdjustment}ml per day for ${this.rubidiumDays} days.`
          }

        //high start
        else if ( this.rubidium <= 12  && this.rubidium >= 10.1){
          this.rubidiumStart = 'rubidium Range Optimal '
        }
        else if ( this.rubidium <= 25  && this.rubidium >= 12.1 ){
          this.rubidiumStart = 'rubidium slightly elevated recomendation is to allow level to settle down and watch ICP '
        }
        else if ( this.rubidium <= 60  && this.rubidium >= 25.1 ){
          this.rubidiumStart = 'rubidium critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
        }
        else {
          this.rubidiumStart = 'Retest parameter'
        }
      }

  // ==================================================== Selenium ====================================================
  seleniumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
  selenium: number
  seleniumAdjustment: any
  seleniumAdjustmentTotal: number
  seleniumDays: number
  seleniumQuantityDivisor: number

  onAddSelenium(){

  // general boron calculation
  this.seleniumDays = Math.ceil(410 - this.selenium)   // 2
  this.seleniumQuantityDivisor = (410 - this.selenium) // 410 - 4.5 = 1.5
  this.seleniumAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.seleniumQuantityDivisor
  this.seleniumAdjustment = this.seleniumAdjustmentTotal / this.seleniumDays


    if (this.selenium == 10){
        this.seleniumStart = 'Ideal  for most reefs'
    }
  //low start  7.72ml at 100 g for 0.1 ppm increase

    else if ( this.selenium <= 3 && this.selenium >= 0){
      this.seleniumStart = `Depleted selenium Level, Correct immedietly ${this.seleniumAdjustment}ml per day for ${this.seleniumDays} days.  `
    }
    else if ( this.selenium <= 6 && this.selenium >= 3.1 ){
      this.seleniumStart = `Low selenium level, adjust  ${this.seleniumAdjustment}ml per day for ${this.seleniumDays} days.  `
    }
    else if ( this.selenium <= 9 && this.selenium >= 6.1 ){
      this.seleniumStart = `Reduced selenium, adjust  ${this.seleniumAdjustment}ml per day for ${this.seleniumDays} days.  `
    }
    else if ( this.selenium <= 9.9 && this.selenium >= 9.1 ){
      this.seleniumStart = `Optimal Range for selenium, adjust ${this.seleniumAdjustment}ml per day for ${this.seleniumDays} days.`
      }

    //high start
    else if ( this.selenium <= 12  && this.selenium >= 10.1){
      this.seleniumStart = 'selenium Range Optimal '
    }
    else if ( this.selenium <= 25  && this.selenium >= 12.1 ){
      this.seleniumStart = 'selenium slightly elevated recomendation is to allow level to settle down and watch ICP '
    }
    else if ( this.selenium <= 60  && this.selenium >= 25.1 ){
      this.seleniumStart = 'selenium critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
    }
    else {
      this.seleniumStart = 'Retest parameter'
    }
  }

          // ==================================================== Vanadium ====================================================
  vanadiumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
  vanadium: number
  vanadiumAdjustment: any
  vanadiumAdjustmentTotal: number
  vanadiumDays: number
  vanadiumQuantityDivisor: number

  onAddVanadium(){

  // general boron calculation
  this.vanadiumDays = Math.ceil(410 - this.vanadium)   // 2
  this.vanadiumQuantityDivisor = (410 - this.vanadium) // 410 - 4.5 = 1.5
  this.vanadiumAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.vanadiumQuantityDivisor
  this.vanadiumAdjustment = this.vanadiumAdjustmentTotal / this.vanadiumDays


    if (this.vanadium == 10){
        this.vanadiumStart = 'Ideal  for most reefs'
    }
  //low start  7.72ml at 100 g for 0.1 ppm increase

    else if ( this.vanadium <= 3 && this.vanadium >= 0){
      this.vanadiumStart = `Depleted vanadium Level, Correct immedietly ${this.vanadiumAdjustment}ml per day for ${this.vanadiumDays} days.  `
    }
    else if ( this.vanadium <= 6 && this.vanadium >= 3.1 ){
      this.vanadiumStart = `Low vanadium level, adjust  ${this.vanadiumAdjustment}ml per day for ${this.vanadiumDays} days.  `
    }
    else if ( this.vanadium <= 9 && this.vanadium >= 6.1 ){
      this.vanadiumStart = `Reduced vanadium, adjust  ${this.vanadiumAdjustment}ml per day for ${this.vanadiumDays} days.  `
    }
    else if ( this.vanadium <= 9.9 && this.vanadium >= 9.1 ){
      this.vanadiumStart = `Optimal Range for vanadium, adjust ${this.vanadiumAdjustment}ml per day for ${this.vanadiumDays} days.`
      }

    //high start
    else if ( this.vanadium <= 12  && this.vanadium >= 10.1){
      this.vanadiumStart = 'vanadium Range Optimal '
    }
    else if ( this.vanadium <= 25  && this.vanadium >= 12.1 ){
      this.vanadiumStart = 'vanadium slightly elevated recomendation is to allow level to settle down and watch ICP '
    }
    else if ( this.vanadium <= 60  && this.vanadium >= 25.1 ){
      this.vanadiumStart = 'vanadium critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
    }
    else {
      this.vanadiumStart = 'Retest parameter'
    }
  }

          // ==================================================== Tin ====================================================
  tinStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
  tin: number
  tinAdjustment: any
  tinAdjustmentTotal: number
  tinDays: number
  tinQuantityDivisor: number

  onAddTin(){

  // general boron calculation
  this.tinDays = Math.ceil(410 - this.tin)   // 2
  this.tinQuantityDivisor = (410 - this.tin) // 410 - 4.5 = 1.5
  this.tinAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.tinQuantityDivisor
  this.tinAdjustment = this.tinAdjustmentTotal / this.tinDays


    if (this.tin == 10){
        this.tinStart = 'Ideal  for most reefs'
    }
  //low start  7.72ml at 100 g for 0.1 ppm increase

    else if ( this.tin <= 3 && this.tin >= 0){
      this.tinStart = `Depleted tin Level, Correct immedietly ${this.tinAdjustment}ml per day for ${this.tinDays} days.  `
    }
    else if ( this.tin <= 6 && this.tin >= 3.1 ){
      this.tinStart = `Low tin level, adjust  ${this.tinAdjustment}ml per day for ${this.tinDays} days.  `
    }
    else if ( this.tin <= 9 && this.tin >= 6.1 ){
      this.tinStart = `Reduced tin, adjust  ${this.tinAdjustment}ml per day for ${this.tinDays} days.  `
    }
    else if ( this.tin <= 9.9 && this.tin >= 9.1 ){
      this.tinStart = `Optimal Range for tin, adjust ${this.tinAdjustment}ml per day for ${this.tinDays} days.`
      }

    //high start
    else if ( this.tin <= 12  && this.tin >= 10.1){
      this.tinStart = 'tin Range Optimal '
    }
    else if ( this.tin <= 25  && this.tin >= 12.1 ){
      this.tinStart = 'tin slightly elevated recomendation is to allow level to settle down and watch ICP '
    }
    else if ( this.tin <= 60  && this.tin >= 25.1 ){
      this.tinStart = 'tin critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
    }
    else {
      this.tinStart = 'Retest parameter'
    }
  }

          // ==================================================== Zinc ====================================================
  zincStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
  zinc: number
  zincAdjustment: any
  zincAdjustmentTotal: number
  zincDays: number
  zincQuantityDivisor: number

  onAddZinc(){

  // general boron calculation
  this.zincDays = Math.ceil(410 - this.zinc)   // 2
  this.zincQuantityDivisor = (410 - this.zinc) // 410 - 4.5 = 1.5
  this.zincAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.zincQuantityDivisor
  this.zincAdjustment = this.zincAdjustmentTotal / this.zincDays


    if (this.zinc == 10){
        this.zincStart = 'Ideal  for most reefs'
    }
  //low start  7.72ml at 100 g for 0.1 ppm increase

    else if ( this.zinc <= 3 && this.zinc >= 0){
      this.zincStart = `Depleted zinc Level, Correct immedietly ${this.zincAdjustment}ml per day for ${this.zincDays} days.  `
    }
    else if ( this.zinc <= 6 && this.zinc >= 3.1 ){
      this.zincStart = `Low zinc level, adjust  ${this.zincAdjustment}ml per day for ${this.zincDays} days.  `
    }
    else if ( this.zinc <= 9 && this.zinc >= 6.1 ){
      this.zincStart = `Reduced zinc, adjust  ${this.zincAdjustment}ml per day for ${this.zincDays} days.  `
    }
    else if ( this.zinc <= 9.9 && this.zinc >= 9.1 ){
      this.zincStart = `Optimal Range for zinc, adjust ${this.zincAdjustment}ml per day for ${this.zincDays} days.`
      }

    //high start
    else if ( this.zinc <= 12  && this.zinc >= 10.1){
      this.zincStart = 'zinc Range Optimal '
    }
    else if ( this.zinc <= 25  && this.zinc >= 12.1 ){
      this.zincStart = 'zinc slightly elevated recomendation is to allow level to settle down and watch ICP '
    }
    else if ( this.zinc <= 60  && this.zinc >= 25.1 ){
      this.zincStart = 'zinc critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
    }
    else {
      this.zincStart = 'Retest parameter'
    }
  }

}

