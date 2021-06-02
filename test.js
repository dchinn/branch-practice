

function testCalculateGrade() { 
  if (calculateGrade([23, 56, 78, 89, 90]) === "D") {
    console.log('%c CalculateGrade: PASS', 'color: green');
  } else {
    console.log('%c CalculateGrade: FAIL', 'color: red');
  }

  if (calculateGrade([85, 56, 78, 89, 90]) === "C") {
    console.log('%c CalculateGrade: PASS', 'color: green');
  } else {
    console.log('%c CalculateGrade: FAIL', 'color: red');
  }

  if (calculateGrade([89, 92, 94, 89, 90]) === "A") {
    console.log('%c CalculateGrade: PASS', 'color: green');
  } else {
    console.log('%c CalculateGrade: FAIL', 'color: red');
  }
}

function testLongestWord() {
  if (longestWord("tomorrow is a new day") === "tomorrow") {
    console.log('%c longestWord: PASS', 'color: green');
  } else {
    console.log('%c longestWord: FAIL', 'color: red');
  }

  if (longestWord("the cow jumped over the moon") === "jumped") {
    console.log('%c longestWord: PASS', 'color: green');
  } else {
    console.log('%c longestWord: FAIL', 'color: red');
  }

  if (longestWord("today is Wednesday") === "Wednesday") {
    console.log('%c longestWord: PASS', 'color: green');
  } else {
    console.log('%c longestWord: FAIL', 'color: red');
  }
}