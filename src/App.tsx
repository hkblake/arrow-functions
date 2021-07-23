function sumFunction(a: number, b: number) {
  return a + b
}

let sumArrowFunction = (a: number, b: number) => a + b

function isPositiveFunction(num: number) {
  return num > 0
}

let isPositiveArrowFunction = (num: number) => num > 0

function randomNumberFunction(){
  return Math.random
}

let randomNumberArrowFunction = () => Math.random

document.addEventListener('click', function() {
  console.log('Click function')
})

document.addEventListener('click', () => console.log('Click arrow function'))

export default function App() {
  console.log('sumFunction: ', sumFunction(1, 2))
  console.log('sumArrowFunction: ', sumArrowFunction(1, 2))
  
  console.log('isPositiveFunction: ', isPositiveFunction(-1))
  console.log('isPositiveArrowFunction: ', isPositiveArrowFunction(-1))

  console.log('randomNumberFunction: ', randomNumberFunction())
  console.log('randomNumberArrowFunction: ', randomNumberArrowFunction())
  
  return (
    <div>
      <span style={{color: 'blue', fontFamily: 'arial'}}>
      <h1>Function vs Arrow Function</h1>
      <h3>in Javascript</h3>
      </span>
    </div>
  );
}
