const check = document.getElementById('check-btn');
const text = document.getElementById('text-input');
const resultElement = document.getElementById('result');

check.addEventListener('click', function (e) {
    const inputValue = text.value;
    text.value="";
    if (inputValue === "") {
        alert('Please input a value.');
    } else {
        const result = isPalindrome(inputValue);
        resultElement.innerHTML = result ? `<strong>${inputValue}</strong> is a palindrome.` : `<strong>${inputValue}</strong> is not a palindrome.`;
        
    }
});

function isPalindrome(sentence) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedSentence = sentence.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the cleaned sentence is a palindrome
    const reversedSentence = cleanedSentence.split('').reverse().join('');
    return cleanedSentence === reversedSentence;
}

text.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("check-btn").click();
  }
});