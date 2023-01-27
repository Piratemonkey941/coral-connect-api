import { Component, ElementRef, OnInit, ViewChild, Input, Output } from '@angular/core';
// import { ElementCalculatorService } from 'src/app/shared/element-calculator.service';
import { VolumeService } from 'src/app/shared/volume.service';
declare var window: any;

@Component({
  selector: 'app-minor-elems',
  templateUrl: './minor-elems.component.html',
  styleUrls: ['./minor-elems.component.scss']
})
export class MinorElemsComponent implements OnInit {


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

// ==================================================== Barium ====================================================
 bariumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
 barium: number
 bariumAdjustment: any
 bariumAdjustmentTotal: number
 bariumDays: number
 bariumQuantityDivisor: number
 bariumAdjustmentGT: number
 bariumDaysDiv: number
onAddBarium(){

    // general boron calculation
    this. bariumDays = (15 - this.barium)  // 2

    this. bariumQuantityDivisor = (15 - this.barium) // 410 - 4.5 = 1.5
    this. bariumAdjustmentTotal = (0.0378 * this.volumeService.volume) * this. bariumQuantityDivisor

      if (this. barium == 15){
          this. bariumStart = 'Ideal  for most reefs'
      }
      else if ( this.barium <= 5.9 && this. barium >= 0 ){
        this.bariumAdjustment = parseFloat(( (this.bariumDays * 9)/4).toFixed(2));
        this. bariumStart = `Extremely Low  Barium level, adjust  ${this.bariumAdjustment}ml per day for 4 days.  `
      }
      else if ( this.barium <= 8 && this. barium >= 6 ){

        this.bariumAdjustment = parseFloat(( (this.bariumDays * 11)/3).toFixed(2));


        this. bariumStart = `Very Low  Barium level, adjust  ${this.bariumAdjustment}ml per day for 3 days.  `
      }
      else if ( this.barium <= 13 && this. barium >= 8.1 ){
        this. bariumAdjustment = parseFloat((this.bariumAdjustmentTotal).toFixed(2));
        this. bariumStart = `Low  Barium level, adjust  ${this.bariumAdjustment}ml  `
      }

      else if ( this. barium <= 14.9 && this. barium >= 13.1 ){
        this.bariumStart = `Acceptable Range for  Barium, adjust ${this.bariumAdjustment}ml per day for ${this.bariumDays} days.`
        }

      //high start
      else if ( this. barium <= 30  && this.barium >= 15.1){
        this.bariumStart = ' Barium slightly elevated recomendation is to allow level to settle down and watch ICP '
      }
      else if ( this. barium <= 90  && this.barium >= 30.1){
        this.bariumStart = ' Barium significantly elevated recomendation is to allow level to settle down and watch ICP '
      }
      else if ( this. barium <= 160  && this.barium >= 90.1 ){
        this.bariumStart = ' Barium critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
      }
      else {
        this.bariumStart = 'Retest parameter'
      }
    }

  // parseFloat(().toFixed(2));
    // ==================================================== chromium ====================================================
chromiumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
chromium: number
chromiumAdjustment: any
chromiumAdjustmentTotal: number
chromiumDays: number
chromiumQuantityDivisor: number

onAddChromium(){

    // general boron calculation
    this.chromiumDays = Math.ceil(410 - this.chromium)   // 2
    this.chromiumQuantityDivisor = (410 - this.chromium) // 410 - 4.5 = 1.5
    this.chromiumAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.chromiumQuantityDivisor
    this.chromiumAdjustment = this.chromiumAdjustmentTotal / this.chromiumDays


      if (this.chromium == 10){
          this.chromiumStart = 'Ideal  for most reefs'
      }
    //low start  7.72ml at 100 g for 0.1 ppm increase

      else if ( this.chromium <= 3 && this.chromium >= 0){
        this.chromiumStart = `Depleted chromium Level, Correct immedietly ${this.chromiumAdjustment}ml per day for ${this.chromiumDays} days.  `
      }
      else if ( this.chromium <= 6 && this.chromium >= 3.1 ){
        this.chromiumStart = `Low chromium level, adjust  ${this.chromiumAdjustment}ml per day for ${this.chromiumDays} days.  `
      }
      else if ( this.chromium <= 9 && this.chromium >= 6.1 ){
        this.chromiumStart = `Reduced chromium, adjust  ${this.chromiumAdjustment}ml per day for ${this.chromiumDays} days.  `
      }
      else if ( this.chromium <= 9.9 && this.chromium >= 9.1 ){
        this.chromiumStart = `Optimal Range for chromium, adjust ${this.chromiumAdjustment}ml per day for ${this.chromiumDays} days.`
        }

      //high start
      else if ( this.chromium <= 12  && this.chromium >= 10.1){
        this.chromiumStart = 'chromium Range Optimal '
      }
      else if ( this.chromium <= 25  && this.chromium >= 12.1 ){
        this.chromiumStart = 'chromium slightly elevated recomendation is to allow level to settle down and watch ICP '
      }
      else if ( this.chromium <= 60  && this.chromium >= 25.1 ){
        this.chromiumStart = 'chromium critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
      }
      else {
        this.chromiumStart = 'Retest parameter'
      }
    }

    // ==================================================== cobalt ====================================================
cobaltStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
cobalt: number
cobaltAdjustment: any
cobaltAdjustmentTotal: number
cobaltDays: number
cobaltQuantityDivisor: number

onAddCobalt(){

    // general boron calculation
    this.cobaltDays = Math.ceil(410 - this.cobalt)   // 2
    this.cobaltQuantityDivisor = (410 - this.cobalt) // 410 - 4.5 = 1.5
    this.cobaltAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.cobaltQuantityDivisor
    this.cobaltAdjustment = this.cobaltAdjustmentTotal / this.cobaltDays


      if (this.cobalt == 10){
          this.cobaltStart = 'Ideal  for most reefs'
      }
    //low start  7.72ml at 100 g for 0.1 ppm increase

      else if ( this.cobalt <= 3 && this.cobalt >= 0){
        this.cobaltStart = `Depleted cobalt Level, Correct immedietly ${this.cobaltAdjustment}ml per day for ${this.cobaltDays} days.  `
      }
      else if ( this.cobalt <= 6 && this.cobalt >= 3.1 ){
        this.cobaltStart = `Low cobalt level, adjust  ${this.cobaltAdjustment}ml per day for ${this.cobaltDays} days.  `
      }
      else if ( this.cobalt <= 9 && this.cobalt >= 6.1 ){
        this.cobaltStart = `Reduced cobalt, adjust  ${this.cobaltAdjustment}ml per day for ${this.cobaltDays} days.  `
      }
      else if ( this.cobalt <= 9.9 && this.cobalt >= 9.1 ){
        this.cobaltStart = `Optimal Range for cobalt, adjust ${this.cobaltAdjustment}ml per day for ${this.cobaltDays} days.`
        }

      //high start
      else if ( this.cobalt <= 12  && this.cobalt >= 10.1){
        this.cobaltStart = 'cobalt Range Optimal '
      }
      else if ( this.cobalt <= 25  && this.cobalt >= 12.1 ){
        this.cobaltStart = 'cobalt slightly elevated recomendation is to allow level to settle down and watch ICP '
      }
      else if ( this.cobalt <= 60  && this.cobalt >= 25.1 ){
        this.cobaltStart = 'cobalt critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
      }
      else {
        this.cobaltStart = 'Retest parameter'
      }
    }

    // ==================================================== Copper ====================================================
copperStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
copper: number
copperAdjustment: any
copperAdjustmentTotal: number
copperDays: number
copperQuantityDivisor: number

onAddCopper(){

    // general boron calculation
    this.copperDays = Math.ceil(410 - this.copper)   // 2
    this.copperQuantityDivisor = (410 - this.copper) // 410 - 4.5 = 1.5
    this.copperAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.copperQuantityDivisor
    this.copperAdjustment = this.copperAdjustmentTotal / this.copperDays


      if (this.copper == 10){
          this.copperStart = 'Ideal  for most reefs'
      }
    //low start  7.72ml at 100 g for 0.1 ppm increase

      else if ( this.copper <= 3 && this.copper >= 0){
        this.copperStart = `Depleted copper Level, Correct immedietly ${this.copperAdjustment}ml per day for ${this.copperDays} days.  `
      }
      else if ( this.copper <= 6 && this.copper >= 3.1 ){
        this.copperStart = `Low copper level, adjust  ${this.copperAdjustment}ml per day for ${this.copperDays} days.  `
      }
      else if ( this.copper <= 9 && this.copper >= 6.1 ){
        this.copperStart = `Reduced copper, adjust  ${this.copperAdjustment}ml per day for ${this.copperDays} days.  `
      }
      else if ( this.copper <= 9.9 && this.copper >= 9.1 ){
        this.copperStart = `Optimal Range for copper, adjust ${this.copperAdjustment}ml per day for ${this.copperDays} days.`
        }

      //high start
      else if ( this.copper <= 12  && this.copper >= 10.1){
        this.copperStart = 'copper Range Optimal '
      }
      else if ( this.copper <= 25  && this.copper >= 12.1 ){
        this.copperStart = 'copper slightly elevated recomendation is to allow level to settle down and watch ICP '
      }
      else if ( this.copper <= 60  && this.copper >= 25.1 ){
        this.copperStart = 'copper critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
      }
      else {
        this.copperStart = 'Retest parameter'
      }
    }

    // ==================================================== flouride ====================================================
flourideStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
flouride: number
flourideAdjustment: any
flourideAdjustmentTotal: number
flourideDays: number
flourideQuantityDivisor: number

onAddFlouride(){

    // general boron calculation
    this.flourideDays = Math.ceil(410 - this.flouride)   // 2
    this.flourideQuantityDivisor = (410 - this.flouride) // 410 - 4.5 = 1.5
    this.flourideAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.flourideQuantityDivisor
    this.flourideAdjustment = this.flourideAdjustmentTotal / this.flourideDays


      if (this.flouride == 10){
          this.flourideStart = 'Ideal  for most reefs'
      }
    //low start  7.72ml at 100 g for 0.1 ppm increase

      else if ( this.flouride <= 3 && this.flouride >= 0){
        this.flourideStart = `Depleted flouride Level, Correct immedietly ${this.flourideAdjustment}ml per day for ${this.flourideDays} days.  `
      }
      else if ( this.flouride <= 6 && this.flouride >= 3.1 ){
        this.flourideStart = `Low flouride level, adjust  ${this.flourideAdjustment}ml per day for ${this.flourideDays} days.  `
      }
      else if ( this.flouride <= 9 && this.flouride >= 6.1 ){
        this.flourideStart = `Reduced flouride, adjust  ${this.flourideAdjustment}ml per day for ${this.flourideDays} days.  `
      }
      else if ( this.flouride <= 9.9 && this.flouride >= 9.1 ){
        this.flourideStart = `Optimal Range for flouride, adjust ${this.flourideAdjustment}ml per day for ${this.flourideDays} days.`
        }

      //high start
      else if ( this.flouride <= 12  && this.flouride >= 10.1){
        this.flourideStart = 'flouride Range Optimal '
      }
      else if ( this.flouride <= 25  && this.flouride >= 12.1 ){
        this.flourideStart = 'flouride slightly elevated recomendation is to allow level to settle down and watch ICP '
      }
      else if ( this.flouride <= 60  && this.flouride >= 25.1 ){
        this.flourideStart = 'flouride critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
      }
      else {
        this.flourideStart = 'Retest parameter'
      }
    }

    // ==================================================== iodine ====================================================
iodineStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
iodine: number
iodineAdjustment: any
iodineAdjustmentTotal: number
iodineDays: number
iodineQuantityDivisor: number

onAddIodine(){

    // general boron calculation
    this.iodineDays = Math.ceil(410 - this.iodine)   // 2
    this.iodineQuantityDivisor = (410 - this.iodine) // 410 - 4.5 = 1.5
    this.iodineAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.iodineQuantityDivisor
    this.iodineAdjustment = this.iodineAdjustmentTotal / this.iodineDays


      if (this.iodine == 10){
          this.iodineStart = 'Ideal  for most reefs'
      }
    //low start  7.72ml at 100 g for 0.1 ppm increase

      else if ( this.iodine <= 3 && this.iodine >= 0){
        this.iodineStart = `Depleted iodine Level, Correct immedietly ${this.iodineAdjustment}ml per day for ${this.iodineDays} days.  `
      }
      else if ( this.iodine <= 6 && this.iodine >= 3.1 ){
        this.iodineStart = `Low iodine level, adjust  ${this.iodineAdjustment}ml per day for ${this.iodineDays} days.  `
      }
      else if ( this.iodine <= 9 && this.iodine >= 6.1 ){
        this.iodineStart = `Reduced iodine, adjust  ${this.iodineAdjustment}ml per day for ${this.iodineDays} days.  `
      }
      else if ( this.iodine <= 9.9 && this.iodine >= 9.1 ){
        this.iodineStart = `Optimal Range for iodine, adjust ${this.iodineAdjustment}ml per day for ${this.iodineDays} days.`
        }

      //high start
      else if ( this.iodine <= 12  && this.iodine >= 10.1){
        this.iodineStart = 'iodine Range Optimal '
      }
      else if ( this.iodine <= 25  && this.iodine >= 12.1 ){
        this.iodineStart = 'iodine slightly elevated recomendation is to allow level to settle down and watch ICP '
      }
      else if ( this.iodine <= 60  && this.iodine >= 25.1 ){
        this.iodineStart = 'iodine critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
      }
      else {
        this.iodineStart = 'Retest parameter'
      }
    }

}

