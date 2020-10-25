const operationObj = require("./logic/operation");
const fs = require('fs')

// provide a scope
let scope = {
    a: 3,
    b: 14
}

/* let Num = operationObj.calculateValue('a * b','a + b','a * b','a / b','a * b',
                                'a * b','a + b','a + b','a * b','a * b',scope);

let Num2 = operationObj.calculateValueAtOnce(scope, [
    'f = a',
    'g = b',
    'f * g'
  ]); */

/* let Num3 = operationObj.calculate_Value([
    'a = 0',
    'b = 0',
    'f = a',
    'g = b',
    'f * g'
  ]);

console.log(Num3[2]) */

function loadJSON(filename=''){
    return JSON.parse(
        fs.existsSync(filename)
        ? fs.readFileSync(filename).toString()
        : '""'
    )
}

function saveJSON(filename='', json='""'){
    return fs.writeFileSync(
        filename, 
        JSON.stringify(
            json,
            null,
            2
        )
    )
}

const data = loadJSON('data.json')

data.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
      console.log(`${key} ${value}`);
    });
    console.log('-------------------');
  });

// data.push(4)
// saveJSON('data.json', data)

// console.log(
//     loadJSON('da1ta.json')
// )