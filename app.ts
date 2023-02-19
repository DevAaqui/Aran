//export {}

const num1Element = document.getElementById('num1') as HTMLInputElement
const num2Element = document.getElementById('num2') as HTMLInputElement
const btn = document.getElementById('btn') as HTMLButtonElement

const textResults: Array<string> = [] //Array is generic
const numResults: number[] = []

type NumOrString = number | string
type Results = {val: number; timestamp: Date}

interface ResultObj {
    val: number;
    timestamp: Date
}

function sum(num1:NumOrString, num2:NumOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number')
    {
        return num1 + num2
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + '' + num2
    }
    else{
        return +num1 + +num2
    }
    
}

function printResults(resultObj : ResultObj){
    console.log(resultObj.val)
}

btn.addEventListener('click', ()=> {
    const num1 = num1Element.value
    const num2 = num2Element.value
    const result = sum(+num1, +num2)
    const stringResult = sum(num1, num2)

    textResults.push(stringResult as string)
    numResults.push(result as number)
    
    console.log(result)
    console.log(stringResult)
    printResults({val: result as number, timestamp: new Date()})
    console.log(textResults)
    console.log(numResults)
})

const myPromise = new Promise<string>((resolve, reject)=> {
    setTimeout(()=> {
        resolve('It worked!!')
    },1000)
})
myPromise.then((result)=> {
    console.log(result.split(' '))
})


