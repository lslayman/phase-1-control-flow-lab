function scuberGreetingForFeet(feet){
  let greeting
  if (feet <= 399) {
    greeting = 'This one is on me!'
  } else if (feet <= 1999) {
    greeting = 'That will be twenty bucks.'
  } else if (feet <= 2499) {
    greeting = 'I will gladly take your thirty bucks.'
  } else if (feet >= 2500) {
    greeting = 'No can do.'
  }
  return greeting
}

function ternaryCheckCity(city){
  const result = city === "NYC" ? 'Ok, sounds good.' : 'No go.';
  return result
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}