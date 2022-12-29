
// function calculateData(array, calculateOperation) {
//     let totalSum = 0;

//     for (let i = 0; i < array.length; i += 1) {
//         if (i !== 0) {
//             totalSum = calculateOperation(totalSum, array[i]);
//         }
//         else
//         {
//             totalSum = array[i];
//         }
        
//     }
//     return totalSum;
// }

// console.log(calculateData([1, 2, 3, 1], sumValues));
// console.log(calculateData([1, 2, 3, 1], multiValues));

// function sumValues(value1, value2) {
//     return value1 + value2;
// }

// function multiValues(value1, value2) {
//     return value1 * value2;
// }

//=====

// anyCalculate(formatProtocol);



// function formatProtocol(array) {
//     let message = '';

//     return 'Увага!\n' +
//             'При розрахунку, виявлені наступні помилки:\n' +
//             array.map((element, index) => `${index + 1}. ${element}`).join('\n');
// }






// function anyCalculate( functionFormat) {
//     let listMessage = [];
//     //....

//     if (true) {
//         listMessage.push('Для користувача не заповнений номер паспорта');
//     }

//     //
//     if (true) {
//          listMessage.push('Не корректно виконані налаштування');
//     }
//     let massageProcol = "";
//     // if (functionFormat != undefined)
//     // {
//     //   massageProcol = functionFormat(listMessage);
        
//     // }
//     // else
//     // {
//         massageProcol = listMessage.join(",");
//     // }
    
//     console.log(massageProcol);

// }



// function myMap(array, formatValueCallback) {
//     let newArray = [];
    
//     for (let i = 0; i < array.length; i += 1){
//         let item = array[i];
//         let newItem = formatValueCallback(item,i);
        

//         newArray.push(newItem);
//     }
//     return newArray;

// }

// function valueUpperCase(value,index) {
//     return value.toUpperCase();
// }

// function valueLowerCase(value,index) {
//     return value.toLowerCase();
// }

// let a = ["a", "B", "c", "D"];

// console.log(myMap(a, valueUpperCase));
// console.log(myMap(a, (value, index) => index+1 +"."+ value.toLowerCase()));

// console.log(myMap(a, valueLowerCase));

//===============




