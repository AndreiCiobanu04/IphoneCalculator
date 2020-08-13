import React, {useState} from 'react'

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ['/', '*', '-', '+']
const ids = {
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    0 : 'zero',
    '/': 'divide',
    '*': 'multiply',
    '+': 'add',
    '-':  'subtract',



}
const Calculator = () =>  {
   const [lastPressed, setLastPressed] = useState(undefined);

   const [calc, setCalc] = useState('0');
   const [operation, setOperation] = useState(undefined);
   
   const handleClick = (e) =>{
    const {innerText} = e.target;

   

    switch(innerText){
              case 'AC' : { 
                  setCalc('0');
                  break;
                }
                 
                case '=' : {
                  const evaluated = eval(calc);
                  
                  setCalc(evaluated);
                 break;
              }  
                
                

              case '.' : {
                  const splitted = calc.split(/[\+\-\*\/]/)
                  const last = splitted.slice(-1)[0];
                  if(!last.includes('.')){
                      setCalc(calc + '.');
                  }
                    break;
              }
              
              default : {
              let e = undefined;
              if(ops.includes(innerText)){

              if(ops.includes(lastPressed) && innerText !== '-'){
                  const lastNumberIdx = calc.split('').reverse()
                  .findIndex(char => char !== ' ' && nums.includes(+char));
                  e = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;
              }
                  else {
                      e = `${calc} ${innerText}`; 

                  }
                }
                  else {
                      e = (calc === '0') ? innerText : (calc + innerText);
                  }
                  setCalc(e);
            
                
                }


            
                
            }

            setLastPressed(innerText);
             
              
              





    

   




   }







//      const{innerText} = e.target;
//      setLastPressed(innerText);
     

// if(!Number.isNaN(Number(innerText))){
//     if(currentNumber==='0'){
//     setCurrentNumber( innerText);
//     //setLastPressed(innerText)
//     } else if(ops.includes(lastPressed)){
//         setCurrentNumber(innerText);
//     }

//    else  {
//         setCurrentNumber(currentNumber + innerText);
//         //setLastPressed(innerTe xt)
//     }
//     return;
// }

//     switch(innerText){
//       case 'AC' : { setCurrentNumber('0')
//               setCalc(undefined);
              
//               break;
// }

//      case '.' : {
//          if(!currentNumber.includes('.')){
//          setCurrentNumber(currentNumber + innerText)}
//          break;
//      }

//      default : {
//          if(!operation){
//              setOperation(innerText);
//              setCalc(currentNumber );
//              setCurrentNumber('');

//          }
        
            
//          else if  (innerText === '='){

             
//             const evalued = eval(`${calc} ${operation} ${currentNumber}`)
//              setOperation(undefined);
//              setCalc(evalued);
//              setCurrentNumber(evalued);
//          }
//          else {

//              setOperation(innerText);
//          }
        
         
//      }


//     }

//     setLastPressed(innerText)






 
 
   

return (
    <div className="calculator">
<div className="display" id="display">
    {calc}
</div>

<div className="nums-container">

<button className="light-grey" id="clear" onClick={handleClick}>AC</button>
<button className="light-grey">+/-</button>
<button className="light-grey">%</button>
     {nums.map(num =>(
    <button className={`dark-grey ${num === 0 && 'big-h'}`} 
    onClick={handleClick}
    id={ids[num]} 
     key={num}>
        {num}
    </button>
     ))}
     <button className="dark-grey" id="decimal" onClick={handleClick} >.</button>
</div>



<div className="ops-container" >
{ops.map(op=>(
    <button className="orange" id={ids[op]} onClick={handleClick} key={op}>{op}</button>

))}

<button className="orange" id="equals" onClick={handleClick} >=</button>

</div>


</div>



) }

export default Calculator