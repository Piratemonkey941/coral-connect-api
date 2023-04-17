import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementCalculatorService {

  constructor() { }

  alkinityCalculator(
    alkalinityDesired,
    alkalinityCurrent,
    additiveSelectedDefault,
    volume,
    alkOptionText
    )
    { // logic here

    const alkalinityChange = (alkalinityDesired - alkalinityCurrent) * 10
    let
      alkalinityAdjustment: any = 0,
      alkalinityResult: any = 0,
      alkalinityResultWithString: any = ''

    if (additiveSelectedDefault === '1')  // sodium bicarb logic here
    {

      alkalinityAdjustment = (0.1429 * volume) // for sodium bicarbonate lower/nuetural ph
      alkalinityResult = (alkalinityChange * alkalinityAdjustment).toFixed(2)

      // return alkalinityResult
       alkalinityResultWithString =  " Dose " + alkalinityResult + " milliLiters "

      return alkalinityResultWithString
    }
     else if( additiveSelectedDefault === '2')
    {
      alkalinityAdjustment = (0.0714 * volume) // for soda ash higher ph
       alkalinityResult = (alkalinityChange * alkalinityAdjustment).toFixed(2)
      //  console.log('volume', this.volume)
      // return alkalinityResult
         alkalinityResultWithString =  " Dose " + alkalinityResult + " milliLiters "

      return alkalinityResultWithString
    }
    else if (additiveSelectedDefault === '3' ){
      alkalinityAdjustment = (3.322 * volume) // for Kalkwasser higher ph
       alkalinityResult = (alkalinityChange * alkalinityAdjustment).toFixed(2)

      // return alkalinityResult
      alkalinityResultWithString =  " Dose " + alkalinityResult + " milliLiters "

      return alkalinityResultWithString
      }
    else {
        return 'Please complete form'
      }

  }

  //  CALCIUM CALCULATOR ================================================================================

  calciumCalculator(
    calciumDesired,
    calciumCurrent,
    // additiveSelectedDefault,
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
      magnesiumResult: any = 0,
      magnesiumResultWithString: any = ''


    if (additiveSelectedDefault === '1')  // sodium bicarb logic here
    {

      magnesiumAdjustment = (0.08065 * volume) // for liquid magnesium mix BRS
      magnesiumResult = (magnesiumChange * magnesiumAdjustment).toFixed(2)
      magnesiumResultWithString =  " Dose " + magnesiumResult + "milliLiters"

      return magnesiumResultWithString
      // return magnesiumResult
    }
     else if( additiveSelectedDefault === '2')
    {
      magnesiumAdjustment = (0.03156 * volume) //  for dry magnesium cloride mix
       magnesiumResult = (magnesiumChange * magnesiumAdjustment).toFixed(2)
      //  console.log('volume', this.volume)
      magnesiumResultWithString =  " Dose " + magnesiumResult + "grams"

       return magnesiumResultWithString
      // return magnesiumResult
    }
    else if (additiveSelectedDefault === '3' ){
      magnesiumAdjustment = (0.01823 * volume) //  for dry magnesium sulfite mix
       magnesiumResult = (magnesiumChange * magnesiumAdjustment).toFixed(2)

      magnesiumResultWithString =  " Dose " + magnesiumResult + "grams"

       return magnesiumResultWithString
      // return magnesiumResult
      }
    else {
        return 'Please complete form'
      }

  }
}
