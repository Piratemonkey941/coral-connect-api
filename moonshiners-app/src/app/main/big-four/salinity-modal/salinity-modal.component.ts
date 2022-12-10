import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salinity-modal',
  templateUrl: './salinity-modal.component.html',
  styleUrls: ['./salinity-modal.component.scss']
})
export class SalinityModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  alkilinityChange: number

  alkilinityDesired: number
  alkilinityCurrent: number

  alkilinityResult: number
  alkilinityResultSA: number
  alkilinityResultKW: number

  additiveSelectedAlk: AdditiveSelected[];    // Created empty array for loop
  additiveSelectedDefault: number             // for default selected in alk modal
  modifiedTextAlk: string
  // val:number                    //modified text from tuto

  onAlkAdditiveSelected(val: any)  // logic here
    {
    this.customAlkFunction(val)

    console.log(val) // confirming that the Id is activly changing
    this.alkilinityChange = (this.alkilinityDesired - this.alkilinityCurrent) * 10


    if (val === 1)  // sodium bicarb logic here
    {
      this.alkilinityAdjustment = (0.1429 * this.volume).toFixed(2) // for sodium bicarbonate lower/nuetural ph
      this.alkilinityResult = this.alkilinityChange * this.alkilinityAdjustment

      return this.alkilinityResult
    }
     else if( val === 2)
    {
      this.alkilinityAdjustmentSA = (0.0714 * this.volume).toFixed(2) // for soda ash higher ph
       this.alkilinityResult = this.alkilinityChange * this.alkilinityAdjustmentSA
       console.log('volume', this.volume)
      return this.alkilinityResult
    }
    else if (val === 3 ){
      this.alkilinityAdjustmentKW = (3.322 * this.volume).toFixed(2) // for Kalkwasser higher ph
       this.alkilinityResult = this.alkilinityChange * this.alkilinityAdjustmentKW

      return this.alkilinityResult
      }
    else {
        'Please complete form'
      }
      console.log(this.modifiedTextAlk)
  }

  customAlkFunction(val: any)
  {
    this.modifiedTextAlk = `Dose ${this.alkilinityResult}ml to achieve new level`
  }


}
