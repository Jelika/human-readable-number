const numberMap = new Map([
    ['0', ['', '', '']],
    ['1', ['one','','one hundred']],
    ['2', ['two','twenty','two hundred']],
    ['3', ['three','thirty','three hundred']],
    ['4', ['four','forty','four hundred']],
    ['5', ['five','fifty','five hundred']],
    ['6', ['six','sixty','six hundred']],
    ['7', ['seven','seventy','seven hundred']],
    ['8', ['eight','eighty','eight hundred']],
    ['9', ['nine','ninety','nine hundred']]
]); 

const exeptionMap = new Map([
    ['10', 'ten'],
    ['11', 'eleven'],
    ['12', 'twelve'],
    ['13', 'thirteen'],
    ['14', 'fourteen'],
    ['15', 'fifteen'],
    ['16', 'sixteen'],
    ['17', 'seventeen'],
    ['18', 'eighteen'],
    ['19', 'nineteen']
]);
/**
 * @param {string}numbers
 * @returns {string}
 */

function resolveNumbers(numbers) {
    return [...numbers].reduce((resultString, number, index) => {
        return resultString + (numberMap.get(number)[numbers.length - index-1]) + (number=='0'?'':' ');
    }, '').trimRight();
}


module.exports = function toReadable (number) {
   let strFirstPart='';
   if((number+'').length === 3){
       strFirstPart = (numberMap.get(((number+'').slice(0, (number+'').length - 2)))[2]) + ' ';
   } 
    let strLastPart='';
    if ((number+'').length > 1){
        strLastPart = (number+'').slice((number+'').length - 2);
    }
   return `${ exeptionMap.has(strLastPart)?
   ((number+'').length === 3 ? 
   (strFirstPart + exeptionMap.get(strLastPart)) : exeptionMap.get(strLastPart) ):( number === 0? 'zero': resolveNumbers(number+''))}`;
}




