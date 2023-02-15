import { Component, ElementRef, OnInit, ViewChild, Input, Output } from '@angular/core';
import { ElementCalculatorService } from 'src/app/shared/element-calculator.service';
import { VolumeService } from 'src/app/shared/volume.service';
declare var window: any;

@Component({
  selector: 'app-minor-elems-two',
  templateUrl: './minor-elems-two.component.html',
  styleUrls: ['./minor-elems-two.component.scss']
})
export class MinorElemsTwoComponent implements OnInit {


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



    // ==================================================== Iron ====================================================

ironStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
iron: number
ironNano: number
ironRegular: number

onAddIron(){

  this.ironRegular = parseFloat((0.00035 * this.volumeService.volume).toFixed(2))  // round to 2 places?
  this.ironNano = parseFloat((0.01 * this.volumeService.volume).toFixed(2))


    if (this.iron <= 0.1 && this. iron >= 0 ){
        this.ironStart =
        `Ideal, should remain Low or Undetectable. Recomended dose of ${this.ironRegular}ml RM classic iron or ${this.ironNano}ml RM NANO per Day`
    }
    else if ( this.iron <= 1 && this. iron >= 0.11 ){

      this. ironStart = `Iron found in very low levels, if supplementing, reduce dosage`
    }
    else if ( this.iron <= 2.5 && this. iron >= 1.1 ){

      this. ironStart = `Iron found in low levels, if supplementing, reduce dosage. Iron at this level may cause browning of coral`
    }
    else if ( this.iron <= 10 && this. iron >= 2.6 ){

      this. ironStart = `Excessive iron detected. Cease supplementation and monitor for any further increase. It is recommended to inspect your equipment`
    }

    else if ( this. iron <= 50 && this. iron >= 10.1 ){
      this.ironStart = `Warning: High levels of iron detected. If you are supplementing, immediately stop dosing. To prevent further issues, it is recommended to check your equipment for degradation and perform water changes.`
      }
    else {
      this.ironStart = 'Retest parameter'
    }
  }
            // ==================================================== Lithium ====================================================
lithiumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
lithium: number
lithiumAdjustment: any
lithiumAdjustmentTotal: number
lithiumDays: number
lithiumDaysCalc: number
lithiumQuantityDivisor: number

onAddLithium(){

    // general lithium calculation
    this.lithiumDaysCalc = Math.ceil(100 - this.lithium)   // 2
    this.lithiumDays = Math.ceil((100 - this.lithium)/10)   // 2
    this.lithiumQuantityDivisor = (100 - this.lithium) // 410 - 4.5 = 1.5
    this.lithiumAdjustmentTotal = (0.03773 * this.volumeService.volume) * this.lithiumQuantityDivisor
    this.lithiumAdjustment = (this.lithiumAdjustmentTotal / this.lithiumDaysCalc).toFixed(2)


      if (this.lithium <= 200 && this.lithium >= 101){
          this.lithiumStart = 'Ideal  for most reefs'
      }
    //low start

      else if ( this.lithium <= 80 && this.lithium >= 0 ){
        this.lithiumStart = `Lithium very low, adjust  ${this.lithiumAdjustment}ml per day for ${this.lithiumDays} days.  `
      }
      else if ( this.lithium <= 100 && this.lithium >= 81 ){
        this.lithiumStart = `Lithium low, adjust ${this.lithiumAdjustment}ml per day for ${this.lithiumDays} days.`
        }

      //high start
      else if ( this.lithium <= 600  && this.lithium >= 201){
        this.lithiumStart = 'Lithium slightly elevated recomendation is to allow level to settle down and watch ICP. This can take several months'
      }
      else if ( this.lithium <= 1500 && this.lithium >= 601 ){
        this.lithiumStart = 'Lithium highly elevated recomendation Acceptable range is 100-350. Consider 20% water change'
      }
      else if ( this.lithium <= 3500  && this.lithium >= 1501 ){
        this.lithiumStart = 'Lithium critical! elevated recomendation is preform several small water changes. 20% water change to reduce level.'
      }
      else {
        this.lithiumStart = 'Retest parameter'
      }
    }

        // ==================================================== Manganese ====================================================
manganeseStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
manganese: number
manganeseNano: number
manganeseRegular: number

onAddManganese(){
  this.manganeseRegular = parseFloat((0.00037 * this.volumeService.volume).toFixed(2))  // round to 2 places?
    this.manganeseNano = parseFloat((0.01 * this.volumeService.volume).toFixed(2))


      if (this.manganese <= 0.1 && this.manganese >= 0){
        this.manganeseStart =
        `Ideal, should remain Low or Undetectable. Recomended dose of ${this.manganeseRegular}ml RM classic iron or ${this.manganeseNano}ml RM NANO per Day`
      }
      else if ( this.manganese <= 2.5 && this.manganese >= 0.2 ){
        this.manganeseStart = 'manganese detected at low levels, reduce dose'
      }
      else if ( this.manganese <= 5 && this.manganese >= 2.6 ){
        this.manganeseStart = 'manganese detected at low levels, stop dosing'
      }
      else if ( this.manganese <= 10  && this.manganese >= 5.1){
        this.manganeseStart = 'manganese detected at medium levels, stop dosing'
      }
      else if ( this.manganese <= 50 && this.manganese >= 10.1 ){
        this.manganeseStart = 'manganese detected at high levels, stop dosing. Recomendation is to preform 2 10%-20% water changes'
      }
      else {
        this.manganeseStart = 'Retest parameter'
      }
    }
        // ==================================================== Molybdenum ====================================================



molybdenumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
molybdenum: number
molybdenumAdjustment: any
molybdenumAdjustmentTotal: number
molybdenumDays: number
molybdenumQuantityDivisor: number
molybdenumAdjustmentDiv: any

onAddMolybdenum(){


    // general boron calculation
    // this.molybdenumDays = Math.ceil(15 - this.molybdenum)   // 2
    this.molybdenumQuantityDivisor = (15 - this.molybdenum) // 410 - 4.5 = 1.5
    this.molybdenumAdjustmentTotal = (0.03785 * this.volumeService.volume) * this.molybdenumQuantityDivisor
    // this.molybdenumAdjustment = (this.molybdenumAdjustmentTotal / this.molybdenumDays).toFixed(2)


      if (this.molybdenum == 15){
          this.molybdenumStart = 'Ideal  for most reefs'
      }
    //low start
      else if ( this.molybdenum <= 2.9 && this.molybdenum >= 0 ){
      this.molybdenumAdjustmentDiv = (this.molybdenumAdjustmentTotal/5).toFixed(2)

        this.molybdenumStart = `Very Low molybdenum level, adjust  ${this.molybdenumAdjustmentDiv}ml per day for 5 days.`
      }
      else if ( this.molybdenum <= 5.9 && this.molybdenum >= 3 ){
        this.molybdenumAdjustmentDiv = (this.molybdenumAdjustmentTotal/4).toFixed(2)
        this.molybdenumStart = `Very Low molybdenum level, adjust  ${this.molybdenumAdjustmentDiv}ml per day for 4 days.`
      }
      else if ( this.molybdenum <= 8.9 && this.molybdenum >= 6 ){
        this.molybdenumAdjustmentDiv = (this.molybdenumAdjustmentTotal/3).toFixed(2)
        this.molybdenumStart = `Very Low molybdenum level, adjust  ${this.molybdenumAdjustmentDiv}ml per day for 3 days.`
      }
      else if ( this.molybdenum <= 11.9 && this.molybdenum >= 9 ){
        this.molybdenumAdjustmentDiv = (this.molybdenumAdjustmentTotal/2).toFixed(2)
        this.molybdenumStart = `Low molybdenum level, adjust  ${this.molybdenumAdjustmentDiv}ml per day for 2 days.`
      }
      else if ( this.molybdenum <= 14.9 && this.molybdenum >= 12){
        this.molybdenumAdjustmentDiv = (this.molybdenumAdjustmentTotal).toFixed(2)
        this.molybdenumStart = `Acceptable Range for molybdenum, however adjust ${this.molybdenumAdjustmentDiv}ml per day for 1 days.`
        }

      //high start
      else if ( this.molybdenum <= 12  && this.molybdenum >= 15.1){
        this.molybdenumStart = 'molybdenum Range Optimal '
      }
      else if ( this.molybdenum <= 25  && this.molybdenum >= 12.1 ){
        this.molybdenumStart = 'molybdenum slightly elevated recomendation is to allow level to settle down and watch ICP '
      }
      else if ( this.molybdenum <= 60  && this.molybdenum >= 25.1 ){
        this.molybdenumStart = 'molybdenum critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
      }
      else {
        this.molybdenumStart = 'Retest parameter'
      }
    }



        // ==================================================== Nickle ====================================================
nickleStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
nickle: number
nickleAdjustment: any
nickleAdjustmentTotal: number
nickleDays: number
nickleQuantityDivisor: number

onAddNickle(){

    // general boron calculation
    this.nickleDays = Math.ceil(410 - this.nickle)   // 2
    this.nickleQuantityDivisor = (410 - this.nickle) // 410 - 4.5 = 1.5
    this.nickleAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.nickleQuantityDivisor
    this.nickleAdjustment = this.nickleAdjustmentTotal / this.nickleDays


      if (this.nickle == 10){
          this.nickleStart = 'Ideal  for most reefs'
      }
    //low start  7.72ml at 100 g for 0.1 ppm increase

      else if ( this.nickle <= 3 && this.nickle >= 0){
        this.nickleStart = `Depleted nickle Level, Correct immedietly ${this.nickleAdjustment}ml per day for ${this.nickleDays} days.  `
      }
      else if ( this.nickle <= 6 && this.nickle >= 3.1 ){
        this.nickleStart = `Low nickle level, adjust  ${this.nickleAdjustment}ml per day for ${this.nickleDays} days.  `
      }
      else if ( this.nickle <= 9 && this.nickle >= 6.1 ){
        this.nickleStart = `Reduced nickle, adjust  ${this.nickleAdjustment}ml per day for ${this.nickleDays} days.  `
      }
      else if ( this.nickle <= 9.9 && this.nickle >= 9.1 ){
        this.nickleStart = `Optimal Range for nickle, adjust ${this.nickleAdjustment}ml per day for ${this.nickleDays} days.`
        }

      //high start
      else if ( this.nickle <= 12  && this.nickle >= 10.1){
        this.nickleStart = 'nickle Range Optimal '
      }
      else if ( this.nickle <= 25  && this.nickle >= 12.1 ){
        this.nickleStart = 'nickle slightly elevated recomendation is to allow level to settle down and watch ICP '
      }
      else if ( this.nickle <= 60  && this.nickle >= 25.1 ){
        this.nickleStart = 'nickle critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
      }
      else {
        this.nickleStart = 'Retest parameter'
      }
    }

}

// rtempStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
// rtemp: number
// rtempNano: number
// rtempRegular: number

// onAddrtemp(){

//   this.rtempRegular = (0.00076 * this.volumeService.volume)  // round to 2 places?
//   this.rtempNano = (0.01 * this.volumeService.volume)

//     if (this. rtemp == 0){
//         this. rtempStart =
//         `Ideal, should remain undetectable. Recomended dose of ${this.rtempRegular}ml RM classic rtemp or ${this.rtempNano}ml RM NANO per Day`
//     }
//     else if ( this.rtemp <= 2.5 && this. rtemp >= 0.1 ){

//       this. rtempStart = `rtemp in very low level, if supplementing, stop dosing`
//     }
//     else if ( this.rtemp <= 5 && this. rtemp >= 2.6 ){

//       this. rtempStart = `rtemp in low level, if supplementing, stop dosing   `
//     }
//     else if ( this.rtemp <= 10 && this. rtemp >= 5.1 ){

//       this. rtempStart = `rtemp in high levels, if supplementing, stop dosing `
//     }

//     else if ( this. rtemp <= 50 && this. rtemp >= 10.1 ){
//       this.rtempStart = `rtemp in very high levels, if supplementing, stop dosing recomendation is to check equipment for degredation `
//       }
//     else {
//       this.rtempStart = 'Retest parameter'
//     }
//   }
