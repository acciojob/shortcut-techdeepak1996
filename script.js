function shortcut(s1, s2) {
  if (str1 === '' || str2 === '') {
    return '';
  }
  
  // Get the initial letters of the strings
  const initialLetters = str1.charAt(0) + str2.charAt(0);
  
  return initialLetters;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
