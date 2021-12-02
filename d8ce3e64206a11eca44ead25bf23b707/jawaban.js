function checkPalindrome(string) {

    
    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

          if (string[i] !== string[len - 1 - i]) {
            return `Kata ${string}Bukan Palindrome` ;
        }
    }
    return `Kata ${string} Palindrome` ;
}

const string="AYA"
const value = checkPalindrome(string);
console.log(value);