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

  //  CALCIUM CALCULATOR ================================================================================

  calciumCalculator(
    calciumDesired,
    calciumCurrent,
    additiveSelectedDefault,
    volume
    )
    { // logic here

    let
      calciumAdjustment: any = 0,
      calciumResult: any = 0
    const calciumChange = calciumDesired - calciumCurrent

    calciumAdjustment = (0.1023 * volume) // for liquid calcium cloride
    return calciumResult = (calciumChange * calciumAdjustment).toFixed(2)

  }

   //  MAGNESIUM CALCULATOR ================================================================================

magnesiumCalculator(
    magnesiumDesired,
    magnesiumCurrent,
    additiveSelectedDefault,
    volume
    )
    { // logic here

    const magnesiumChange = magnesiumDesired - magnesiumCurrent
    let
      magnesiumAdjustment: any = 0,
      magnesiumResult: any = 0

    // console.log("comming from val function",this.onAlkAdditiveSelected(val)) // confirming that the Id is activly changing

    if (additiveSelectedDefault === '1')  // sodium bicarb logic here
    {

      magnesiumAdjustment = (0.08065 * volume) // for liquid magnesium mix BRS
      magnesiumResult = (magnesiumChange * magnesiumAdjustment).toFixed(2)

      return magnesiumResult
    }
     else if( additiveSelectedDefault === '2')
    {
      magnesiumAdjustment = (0.03156 * volume) //  for dry magnesium cloride mix
       magnesiumResult = (magnesiumChange * magnesiumAdjustment).toFixed(2)
      //  console.log('volume', this.volume)
      return magnesiumResult
    }
    else if (additiveSelectedDefault === '3' ){
      magnesiumAdjustment = (0.01823 * volume) //  for dry magnesium sulfite mix
       magnesiumResult = (magnesiumChange * magnesiumAdjustment).toFixed(2)

      return magnesiumResult
      }
    else {
        return 'Please complete form'
      }

  }

    // blank ================
// Calculator(
//     Desired,
//     Current,
//     additiveSelectedDefault,
//     volume
//     )
//     { // logic here

//     const Change = (Desired - Current) * 10
//     let
//       Adjustment: any = 0,
//       Result: any = 0

//     // console.log("comming from val function",this.onAlkAdditiveSelected(val)) // confirming that the Id is activly changing

//     if (additiveSelectedDefault === '1')  // sodium bicarb logic here
//     {
//       // this.alkilinityAdjustmentSB = (0.1429 * this.volume).toFixed(2) // for sodium bicarbonate lower/nuetural ph
//       Adjustment = (0.1429 * volume) // for sodium bicarbonate lower/nuetural ph
//       Result = (Change * Adjustment).toFixed(2)

//       return Result
//     }
//      else if( additiveSelectedDefault === '2')
//     {
//       Adjustment = (0.0714 * volume) // for soda ash higher ph
//        Result = (Change * Adjustment).toFixed(2)
//       //  console.log('volume', this.volume)
//       return alkilinityResult
//     }
//     else if (additiveSelectedDefault === '3' ){
//       Adjustment = (3.322 * volume) // for Kalkwasser higher ph
//        Result = (Change * Adjustment).toFixed(2)

//       return Result
//       }
//     else {
//         return 'Please complete form'
//       }

//   }
}

// basicElems [
//   {
//     name: 'salinity',
//     options: []
//   }
// ]
// loop through with ng for and it can place modal specific to element.


//GRAVEYARD==================================================================================  OLDEST LAST

  // console.log("comming from val function",this.onAlkAdditiveSelected(val)) // confirming that the Id is activly changing

    // if (additiveSelectedDefault === '1')  // sodium bicarb logic here
    // {
    //   // this.alkilinityAdjustmentSB = (0.1429 * this.volume).toFixed(2) // for sodium bicarbonate lower/nuetural ph
    //   calciumAdjustment = (0.1023 * volume) // for liquid calcium cloride
    //   calciumResult = (calciumChange * calciumAdjustment).toFixed(2)

    //   return calciumResult
    // }
    //  else if( additiveSelectedDefault === '2')
    // {
    //   calciumAdjustment = (0.0714 * volume) // for soda ash higher ph
    //    calciumResult = (calciumChange * calciumAdjustment).toFixed(2)
    //   //  console.log('volume', this.volume)
    //   return calciumResult
    // }
    // else if (additiveSelectedDefault === '3' ){
    //   calciumAdjustment = (3.322 * volume) // for Kalkwasser higher ph
    //    calciumResult = (calciumChange * calciumAdjustment).toFixed(2)

    //   return calciumResult
    //   }
    // else {
    //     return 'Please complete form'
    //   }
