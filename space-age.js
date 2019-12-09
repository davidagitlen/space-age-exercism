//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//31,557,600

export const age = (planet, seconds) => {
  let earthYears = seconds/31557600
  switch (planet) {
    case 'mercury':
      return parseFloat((earthYears/.2408467).toFixed(2));
    case 'venus':
      return parseFloat((earthYears/0.61519726).toFixed(2));
    case 'earth' : 
      return parseFloat(earthYears.toFixed(2));
    case 'mars' :
      return parseFloat((earthYears/1.8808158).toFixed(2));
    case 'jupiter' :
      return parseFloat((earthYears/11.862615).toFixed(2));
    case 'saturn' :
      return parseFloat((earthYears/29.447498).toFixed(2));
    case 'uranus' :
      return parseFloat((earthYears/84.016846).toFixed(2));
    case 'neptune' :
      return parseFloat((earthYears/164.79132).toFixed(2));
    default :
      return
  }
};
