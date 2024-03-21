const checkButton = document.getElementById('check-btn');
const userInput = document.getElementById('text-input');
const result = document.getElementById('result');

const checkPalindrome = (input) => {
  let inputCopy = input;
  if(input === null || input === ""){
    alert("Please input a value");
    return;
  }

  inputCopy = inputCopy.toLowerCase().replace(/[^A-Za-z0-9]/gi, ''); // Assign the result back to inputCopy
  const reversedInput = inputCopy.split('').reverse().join('');
  
  let resultMessage = `<strong>${input}</strong> is ${inputCopy === reversedInput ? '' : 'not '}a palindrome`;

  const resultElement = document.createElement('p');
  resultElement.innerHTML = resultMessage;
  result.appendChild(resultElement);
  result.classList.remove('hidden');
}

checkButton.addEventListener('click', () => {
  result.innerHTML = '';
  result.classList.add('hidden');
  checkPalindrome(userInput.value);
});
