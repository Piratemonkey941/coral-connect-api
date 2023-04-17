import { Component, ElementRef, OnInit, ViewChild, Input, Output } from '@angular/core';
import {AdditiveSelected} from './alk-selector'
import { ElementCalculatorService } from '../element-calculator.service';
declare var window: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {



  current: string = ''
  desired: string = ''
  additiveSelectedDefault: any
  result: any = ''
  formModal:any;

  alkalinityResult: string
  alkOptionText: string = ''
  calciumResult: string
  magnesiumResult: string
  magnesiumResultWithString: string
  magOptionText: string = ''

  @Input() elementName: string = ''
  @Input() volume: number

  constructor(private elementCalculator: ElementCalculatorService) { }

  ngOnInit(): void {

    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById("exampleModal"))
  }

  modifiedTextAlk: string

  calculate() {



  switch (this.elementName) {
    case 'Alkalinity':

      this.result = this.alkalinityResult = this.elementCalculator.alkinityCalculator(
          this.desired,
          this.current,
          this.additiveSelectedDefault,
          this.volume,
          this.alkOptionText
          )
      break;
    case 'Calcium':
      this.result = this.calciumResult = this.elementCalculator.calciumCalculator(
        this.desired,
        this.current,
        // this.additiveSelectedDefault,
        this.volume,
        )
      break;
    case 'Magnesium':
      this.result = this.magnesiumResultWithString = this.elementCalculator.magnesiumCalculator(
        this.desired,
        this.current,
        this.additiveSelectedDefault,
        this.volume,
      )
      break;

    default:
      this.result
  }
}
    // switch function for card
    // console.log('this is the element selected function', this.elementName)


  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.hide();
  }

  calculator(){}






}


//GRAVEYARD


    // this.additiveSelectedAlk = [
    //   {Id:0, Name:"Select Additive"},
    //   {Id:1, Name:"Liquid Sodium Bicarbonate"},
    //   {Id:2, Name:"Liquid Soda Ash"},
    //   {Id:3, Name:"Liquid Kalkwasser"},
    // ]

    // this.additiveSelectedDefault = 0;


  // alkalinityChange: number
  // alkalinityAdjustmentSA: number
  // alkalinityAdjustmentKW: number
  // alkalinityAdjustmentSB: number


  // alkalinityDesired: number
  // alkalinityCurrent: number




  // additiveSelectedAlk: AdditiveSelected[];    // Created empty array for loop
