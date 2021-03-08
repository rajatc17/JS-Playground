const getSleepHours = (day) =>{
  if(!day)return 'Please specify a day'
  if(typeof day !== 'string')return 'Please enter a string'
  
  day.toLowerCase()
  switch(day)
  {
    case 'monday':return 5;
    case 'tuesday':return 6;
    case 'wednesday':return 5;
    case 'thursday':return 6;
    case 'friday':return 5;
    case 'saturday':return 8;
    case 'sunday':return 7;
    default: return 'Invalid Day!'
  }
}
const getActualSleepHours = () => getSleepHours('monday')+ getSleepHours('tuesday')+ getSleepHours('wednesday')+ getSleepHours('thursday')+ getSleepHours('friday')+ getSleepHours('saturday')+ getSleepHours('sunday')

const getIdealSleepHours = idealHours => idealHours*7


const calcDebt = () =>{
  actualHours = getActualSleepHours()
  ideal = getIdealSleepHours(0)

  if(actualHours===ideal)console.log('Just the perfect sleep!')
  actualHours>ideal?console.log('Oversleeping Boy!'):console.log('UnderSleeping bro get some rest!')

}

calcDebt();