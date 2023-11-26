function isCreditCardValid(creditCardNumber) {
    // Remove spaces and non-numeric characters
    const sanitizedNumber = creditCardNumber.replace(/\D/g, '');
  
    // Convert the string to an array of digits
    const digits = sanitizedNumber.split('').map(Number);
  
    // Reverse the array
    const reversedDigits = digits.reverse();
  
    // Double every second digit
    const doubledDigits = reversedDigits.map((digit, index) => {
      return index % 2 === 1 ? digit * 2 : digit;
    });
  
    // Sum the digits and handle double-digit results
    const summedDigits = doubledDigits.map((digit) => {
      return digit > 9 ? digit - 9 : digit;
    });
  
    // Calculate the total sum
    const sum = summedDigits.reduce((accumulator, current) => accumulator + current, 0);
  
    // The credit card number is valid if the sum is a multiple of 10
    return sum % 10 === 0;
  }


  module.exports = isCreditCardValid;