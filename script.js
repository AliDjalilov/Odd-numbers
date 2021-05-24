 function getOperator() {
 let answer = '';

  do {
    answer = prompt('Enter operator');

  } while (isOperatorValid(answer));

  return answer;
}

function isOperandsValid(str) {

return str !== null  &&  str !==  ' ' ;  
}


function getOperands() {

  let answer = '' ;
   numberManipulation;
    let virgule= answer.split(',');

  do {
    answer = prompt('Enter operands');

  } while (isOperandsValid(answer));
   
  	numberManipulation = answer.filter((number) => !isNaN(+num) && number % 2 ===1);
    return numberManipulation.map( i => +i);
 

}

function isOperatorValid(str) {   

  return str !== '+' &&  str !== '-' && str !== '*' &&  str !== '/' ;
} 



function isOperandsValid(str) {
    return str !== null && str !== '';
}

function calculate(operator, a, b) {
  switch (operator) { 
      case '+': 
            return operands.reduce((acc, num) => acc + num);
        case '-': 
            return operands.reduce((acc, num) => acc - num);
        case '/': 
            return operands.reduce((acc, num) => acc / num);
        case '*': 
            return operands.reduce((acc, num) => acc * num);
  }
}

let result = 0;
let expression = '';

for (let i = 0; i < operands.length; i++) {
  const operand = +operands[i]

  if(isValidOperand(operand)) {
    continue;
  }
  if (i === 0) {
    result = operand;
    expression = operand;                              
    continue;
  }
}

 const operator = getOperator();
const operands = getOperands();
const result = calculate(operands, operator);
console.log(`${operands.join(` ${operator} `)} = ${result}`);
