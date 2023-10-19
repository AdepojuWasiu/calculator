let result ='';
let press;
let realResult;
let clearResult ='';

document.querySelectorAll('.js-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
    press = button.dataset.value
    result += press

     document.querySelector('.js-result-display').value =result  
          

    });
    window.addEventListener('keydown', event => {
        press = button.dataset.value
        if(event.key === press) {
            result += press 
        }   

   document.querySelector('.js-result-display').value = result
        
       
    });


  });

  window.addEventListener('keydown', event => {
        
        if(event.key === press) {
            result += press 
        } 
         

   document.querySelector('.js-result-display').value = result

        
       
    });

  document.querySelector('.equal-button').addEventListener('click', () => {
    realResult = eval(result)
    if(realResult>=0 || realResult < 0) {
        result = realResult
    }
    document.querySelector('.js-result-display').value=realResult
       });
  


  document.querySelector('.clear-button').addEventListener('click', () => {

      realResult = clearResult
      if(realResult === clearResult) {
        result = realResult
      } 
       document.querySelector('.js-result-display').value= realResult
    

       });

 document.querySelector('.edit-button').addEventListener('click', () => {
    result = result.slice(0, -1)
    document.querySelector('.js-result-display').value=result
        
        
    });
