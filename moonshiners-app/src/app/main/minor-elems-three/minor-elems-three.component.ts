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
  this.tinDays = Math.ceil(5 - this.tin)   // 2
  this.tinQuantityDivisor = (5 - this.tin) // 410 - 4.5 = 1.5
  this.tinAdjustmentTotal = (0.003785 * this.volumeService.volume) * this.tinQuantityDivisor
  this.tinAdjustment = this.tinAdjustmentTotal / this.tinDays


    if (this.tin == 5){
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
    else if ( this.tin <= 4.9 && this.tin >= .1 ){
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

// Define constant values for low, moderate, and ideal zinc levels
readonly LOW_ZINC_LEVEL = 1;
readonly MODERATE_ZINC_LEVEL = 3;
readonly IDEAL_ZINC_LEVEL = 5;

// Initialize zincStart, zinc, zincAdjustment, and zincDays properties
zincStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!';
zinc: number;
zincAdjustment: any;
zincDays: number;

// Function that runs when zinc is added
onAddZinc(){
  // Set the value of zincDays based on the value of zinc
  this.zincDays = this.calculateZincDays(this.zinc);

  // Calculate the zinc adjustment
  this.zincAdjustment = this.calculateZincAdjustment(this.zinc, this.volumeService);

  // Determine the zinc start message
  switch (true) {
    case this.zinc === this.IDEAL_ZINC_LEVEL:
      this.zincStart = 'Ideal for most reefs';
      break;
    case this.zinc <= this.LOW_ZINC_LEVEL:
      this.zincStart = `Depleted zinc Level, Correct immediately ${this.zincAdjustment}ml per day for ${this.zincDays} days.  `;
      break;
    case this.zinc === 0:
      this.zincStart = `Zinc depleted, adjust ${this.zincAdjustment}ml per day for ${this.zincDays} days.  `;
      break;
    case this.zinc <= 4 && this.zinc >= 0.1:
    case this.zinc <= 3 && this.zinc > this.LOW_ZINC_LEVEL:
      this.zincStart = `Zinc depleted or very low, adjust ${this.zincAdjustment}ml per day for ${this.zincDays} days.  `;
      break;
    case this.zinc <= 4.9 && this.zinc >= 4.1:
      this.zincStart = `Zinc acceptable but below target range, adjust ${this.zincAdjustment}ml per day for ${this.zincDays} days.`;
      break;
    case this.zinc <= 15 && this.zinc >= 5.1:
      this.zincStart = 'Zinc acceptably above target, no concern. If it continues to increase without dosing find source';
      break;
    case this.zinc <= 25 && this.zinc >= 15.1:
      this.zincStart = 'Zinc above target level, allow level to settle down and watch ICP. If it continues to increase without dosing find source';
      break;
    case this.zinc <= 80 && this.zinc >= 25.1:
      this.zincStart = 'Significantly elevated Zinc! Allow level to settle down and watch ICP, strongly recommended to find source.';
      break;
    case this.zinc <= 200 && this.zinc >= 80.1:
      this.zincStart = 'Critically elevated Zinc! Recommendation is perform several small water changes. 20% water change to reduce level approx 10%, find source.';
      break;
    default:
      this.zincStart = 'Retest parameter';
      break;
  }
}

// Function to calculate the number of days to adjust zinc levels
calculateZincDays(zinc: number): number {
  if (zinc >= this.MODERATE_ZINC_LEVEL) {
    return 1;
  } else if (zinc >= this.LOW_ZINC_LEVEL) {
    return 2;
  } else {
    return 3;
  }
}




// Calculate the amount of zinc adjustment needed based on its current value and the volume of the aquarium.


calculateZincAdjustment(zinc: number, volumeService: VolumeService): number {
 const zincQuantityDivisor = 5 - zinc;
 const zincAdjustmentTotal = (0.003785 * volumeService.volume) * zincQuantityDivisor;
 return zincAdjustmentTotal / this.zincDays;
}

  // zincStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
  // zinc: number
  // zincAdjustment: any
  // zincAdjustmentTotal: number
  // zincDays: number
  // zincQuantityDivisor: number




  // onAddZinc(){





    // This code sets the value of this.zincDays based on the value of this.zinc.
  //   if (this.zinc >= 3)       // If this.zinc is greater than or equal to 3, this.zincDays is set to 1.
  //   {
  //     this.zincDays = 1;
  //   }
  //   else if (this.zinc >= 1)  // If this.zinc is greater than or equal to 1 but less than 3, this.zincDays is set to 2.
  //   {
  //     this.zincDays = 2;
  //   }
  //   else
  //   {
  //     this.zincDays = 3;      // If this.zinc is less than 1, this.zincDays is set to 3.
  //   }


  // // general Zinc calculation

  // this.zincQuantityDivisor = (5 - this.zinc) // 410 - 4.5 = 1.5
  // this.zincAdjustmentTotal = (0.003785  * this.volumeService.volume) * this.zincQuantityDivisor
  // this.zincAdjustment = this.zincAdjustmentTotal / this.zincDays


  //   if (this.zinc == 5){
  //       this.zincStart = 'Ideal  for most reefs'
  //   }
  // //low start

  //   else if ( this.zinc <= 3 && this.zinc >= 0){
  //     this.zincStart = `Depleted zinc Level, Correct immedietly ${this.zincAdjustment}ml per day for ${this.zincDays} days.  `
  //   }
  //   else if ( this.zinc == 0){
  //     this.zincStart = `Zinc depleted, adjust  ${this.zincAdjustment}ml per day for ${this.zincDays} days.  `
  //   }
  //   else if ( this.zinc <= 4 && this.zinc >= 0.1 ){
  //     this.zincStart = `Zinc depleted or very low, adjust  ${this.zincAdjustment}ml per day for ${this.zincDays} days.  `
  //   }
  //   else if ( this.zinc <= 4.9 && this.zinc >= 4.1 ){
  //     this.zincStart = `Zinc acceptable but below target range, adjust ${this.zincAdjustment}ml per day for ${this.zincDays} days.`
  //     }

  //   //high start
  //   else if ( this.zinc <= 15  && this.zinc >= 5.1){
  //     this.zincStart = 'Zinc acceptably above target, no concern. If it contiues to increase without dosing find source'
  //   }
  //   else if ( this.zinc <= 25  && this.zinc >= 15.1 ){
  //     this.zincStart = 'Zinc above target level, allow level to settle down and watch ICP. If it contiues to increase without dosing find source'
  //   }
  //   else if ( this.zinc <= 80  && this.zinc >= 25.1 ){
  //     this.zincStart = 'Significantly elevated Zinc! Allow level to settle down and watch ICP, strongly recommended to find source.'
  //   }
  //   else if ( this.zinc <= 200  && this.zinc >= 80.1 ){
  //     this.zincStart = 'Critically elevated Zinc! Recomendation is preform several small water changes. 20% water change to reduce level apx 10%, find source.'
  //   }
  //   else {
  //     this.zincStart = 'Retest parameter'
  //   }
  // }

}

