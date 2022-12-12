import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementCalculatorService {

  constructor() { }


  // onAlkAdditiveSelected(val:number) {

  //   // Return the val number
  //   console.log("new val function",val)
  //   return val;
  // }

  alkinityCalculator(
    alkilinityDesired,
    alkilinityCurrent,
    additiveSelectedDefault,

    volume

    )
    { // logic here

    const alkilinityChange = (alkilinityDesired - alkilinityCurrent) * 10
    let
      alkilinityAdjustment: any = 0,
      alkilinityResult: any = 0

    // console.log("comming from val function",this.onAlkAdditiveSelected(val)) // confirming that the Id is activly changing

    if (additiveSelectedDefault === '1')  // sodium bicarb logic here
    {
      // this.alkilinityAdjustmentSB = (0.1429 * this.volume).toFixed(2) // for sodium bicarbonate lower/nuetural ph
      alkilinityAdjustment = (0.1429 * volume) // for sodium bicarbonate lower/nuetural ph
      alkilinityResult = (alkilinityChange * alkilinityAdjustment).toFixed(2)

      return alkilinityResult
    }
     else if( additiveSelectedDefault === '2')
    {
      alkilinityAdjustment = (0.0714 * volume) // for soda ash higher ph
       alkilinityResult = (alkilinityChange * alkilinityAdjustment).toFixed(2)
      //  console.log('volume', this.volume)
      return alkilinityResult
    }
    else if (additiveSelectedDefault === '3' ){
      alkilinityAdjustment = (3.322 * volume) // for Kalkwasser higher ph
       alkilinityResult = (alkilinityChange * alkilinityAdjustment).toFixed(2)

      return alkilinityResult
      }
    else {
        return 'Please complete form'
      }

  }
}

// basicElems [
//   {
//     name: 'salinity',
//     options: []
//   }
// ]
// loop through with ng for and it can place modal specific to element.
