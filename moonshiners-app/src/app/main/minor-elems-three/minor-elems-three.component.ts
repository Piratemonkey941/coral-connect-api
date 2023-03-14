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
  rubidiumDaysCalc: number
  rubidiumQuantityDivisor: number

  onAddRubidium(){

      // general boron calculation

      if (this.rubidium >= 200) {
        this.rubidiumDays = 1;
        this.rubidiumDaysCalc = 100 ;
      }
      else if (this.rubidium >= 100) {
        this.rubidiumDays = 2;
        this.rubidiumDaysCalc =  200 ;
      }
      else if (this.rubidium >= 0) {
        this.rubidiumDays = 3;
        this.rubidiumDaysCalc = 300 ;
      }
       else {
        this.rubidiumDays = 5;
      }

      // this.rubidiumDaysCalc = (300 - this.rubidium)   // 2
      this.rubidiumQuantityDivisor = (300 - this.rubidium) // 410 - 4.5 = 1.5
      this.rubidiumAdjustmentTotal = (0.3785 * this.volumeService.volume) * this.rubidiumQuantityDivisor
      this.rubidiumAdjustment = Number((this.rubidiumAdjustmentTotal / this.rubidiumDaysCalc).toFixed(2))


        if (this.rubidium == 300){
            this.rubidiumStart = 'Ideal  for most reefs'
        }
      //low start


        else if ( this.rubidium <= 150 && this.rubidium >= 0 ){
          this.rubidiumStart = `Rubidium extremely low, adjust  ${this.rubidiumAdjustment}ml per day for ${this.rubidiumDays} days.  `
        }
        else if ( this.rubidium <= 250 && this.rubidium >= 151 ){
          this.rubidiumStart = `Rubidium close to Sea Water levels, adjust  ${this.rubidiumAdjustment}ml per day for ${this.rubidiumDays} days. for additional benifits`
        }
        else if ( this.rubidium <= 299 && this.rubidium >= 251 ){
          this.rubidiumStart = `Acceptable Range, rubidium, adjust ${this.rubidiumAdjustment}ml per day for ${this.rubidiumDays} days.`
          }

        //high start

        else if ( this.rubidium <= 450  && this.rubidium >= 301 ){
          this.rubidiumStart = 'Rubidium slightly elevated recomendation is to allow level to settle down and watch ICP '
        }
        else if ( this.rubidium <= 1500  && this.rubidium >= 451  ){
          this.rubidiumStart = 'Rubidium significantly elevated recomendation is to allow level to settle down and watch ICP '
        }
        else if ( this.rubidium <= 2500  && this.rubidium >= 1501 ){
          this.rubidiumStart = 'Rubidium critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
        }
        else {
          this.rubidiumStart = 'Retest parameter'
        }
      }

  // ==================================================== Selenium ====================================================
  seleniumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
  selenium: number
  seleniumAdjustment: any
  seleniumAdjustmentNano: any

  onAddSelenium(){
  this.seleniumAdjustment = Number(0.00075 * this.volumeService.volume).toFixed(2)
  this.seleniumAdjustmentNano = Number(0.01 * this.volumeService.volume).toFixed(2)

    if (this.selenium == 0){
                              this.seleniumStart = `Depleted selenium Level, Correct with ${this.seleniumAdjustment}ml Reef Moonshiner Classic or
                                                    ${this.seleniumAdjustmentNano}ml Reef Moonshiner Nano and per day days.  `
                            }
    else {
            this.seleniumStart = 'Selenium Detected Stop Dosing'
          }
  }
// element has additional instructions for modal
          // ==================================================== Vanadium ====================================================
  vanadiumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
  vanadium: number

  vanadiumDropsToMilliliters: number
  vanadiumDropsToMillilitersTwoDrops: number
  vanadiumDropsCalculator:number
  vanadiumTwoDropsCalculator:number

  onAddVanadium() {
    // Add the calculateDropsAndInterval function
    const calculateDropsAndInterval = (volume) => {
      const baselineVolume = 100;
      const baselineDropsPerDay = 1;

      const dropsPerDay = (volume / baselineVolume) * baselineDropsPerDay;
      let drops = 1;
      let interval = 1 / dropsPerDay;

      interval = Math.round(interval);

      if (interval === 0) {
        interval = 1;
      } else if (interval > 1) {
        drops = Math.round(dropsPerDay * interval);
      }

      return {
        drops,
        interval
      };
    };

    this.vanadiumDropsCalculator = (this.volume / 100);
    this.vanadiumTwoDropsCalculator = (this.volume / 100) * 2;

    this.vanadiumDropsToMilliliters = this.vanadiumDropsCalculator / 20;
    this.vanadiumDropsToMillilitersTwoDrops = this.vanadiumTwoDropsCalculator / 20;

    // Calculate dosing information using the calculateDropsAndInterval function
    const dosingInfo = calculateDropsAndInterval(this.volume);

    if (this.volume >= 1) {
      this.vanadiumStart = `Depleted vanadium Level, Begin dosing ${dosingInfo.drops} drop(s) every ${dosingInfo.interval} day(s).`;
    } else if (this.volume >= 100) {
      this.vanadiumStart = `Depleted vanadium Level, Begin dosing ${this.vanadiumDropsCalculator} - ${this.vanadiumTwoDropsCalculator} drops per day.`;
    } else if (this.volume >= 1000) {
      this.vanadiumStart = `Depleted vanadium Level, Begin dosing ${this.vanadiumDropsCalculator} - ${this.vanadiumTwoDropsCalculator} drops
                            or ${this.vanadiumDropsToMilliliters}ml - ${this.vanadiumDropsToMillilitersTwoDrops}ml per day.`;
    } else if (this.vanadium >= 2.1) {
      this.vanadiumStart = "Reduce dosage by half and continue dosing. Check again at your regular interval or 1-3 months";
    } else {
      this.vanadiumStart = 'Retest parameter';
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

