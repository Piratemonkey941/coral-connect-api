import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import {AdditiveSelected} from './alk-selector'


@Component({
  selector: 'app-alkilinity',
  templateUrl: './alkilinity.component.html',
  styleUrls: ['./alkilinity.component.scss']
})

export class AlkilinityComponent implements OnInit {

  additiveSelected: AdditiveSelected[];
  formModal:any;

  @Input() volume: number

  constructor() { }

  ngOnInit(): void {

    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById("exampleModal")
    // )

    this.additiveSelected = [
      {Id:0, Name:"Select"},
      {Id:1, Name:"Liquid Soda Ash"},
      {Id:2, Name:"Liquid Sodium Bicarbonate"},
      {Id:3, Name:"Liquid Kalkwasser"},
    ]

  }

  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.hide();
  }


  //ALKILINITY
  alkilinity: number
  alkilinityStart: string = 'The foundation of our Reef'


  alkilinityAdjustment: any
  alkilinityAdjustmentSA: any
  alkilinityAdjustmentKW: any





  onAddAlkilinity(){

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
}
