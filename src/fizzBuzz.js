
function addNumbers () {
  for (var i = 0; i <= 100; i++) {
    var newLi = document.createElement("li");
    var text = document.createTextNode(fizzBuzz(i));

    newLi.appendChild(text);
    var ulnew = document.getElementsByTagName('ul')
    ulnew[0].appendChild(newLi);
  };
}

function fizzBuzz (number) {

  function isMultipleOfThree(number) {
      return number % 3 == 0;
  }

  function isMultipleOfFive(number) {
      return number % 5 == 0;
  }

  if(number == 0){
    return number
  }

  if(isMultipleOfThree(number) && isMultipleOfFive(number)){
    return "FizzBuzz"
  }

  if(isMultipleOfThree(number)){
    return "Fizz"
  }

  if(isMultipleOfFive(number)){
    return "Buzz"
  }

  return number
  
}