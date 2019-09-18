// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// let year = 1905;

// let century = year/100;
    // console.log(year % 100)
    // century = Math.floor(century);
    // if (year % 100 !== 0) {
      // century = century + 1;
    // }
    
    
    // return century;
    // console.log('century: ', century);
    // let str = "Aabaa";
    // console.log('test: ', str.split("").reverse().join(""))

    let inputArray = [5, 1, 2, 3, 1, 4];
    inputArray.map((x) => {
      // for(let i = 0; i < inputArray.length; i++) {
        // console.log(i);
      // }
      console.log('x:' , x)
    });