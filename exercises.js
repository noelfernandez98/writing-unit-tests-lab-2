function octalToDecimal(num) {
  let octal = 0;
  for (let i = 0; i < num.length; i++) {
    let current = parseInt(num[i], 10);
    current = current * Math.pow(8, num.length - 1 - i);
    octal += current;
  }
  return octal;
}

function anagram(strWord, arrOfWords) {
  const anagramArr = [];
  arrOfWords.forEach(element => {
    if (strWord.split('').sort().join('') === element.split('').sort().join('')) {
      anagramArr.push(element);
    }
  });
  return anagramArr;
}

function triangle(side1, side2, side3) {
  if (side1 === 0 || side2 === 0 || side3 === 0 || side1 + side2 + side3 !== 180) {
    return "invalid";
  } else if (side1 > 90 || side2 > 90 || side3 > 90) {
    return "obtuse";

  } else if (side1 === 90 || side2 === 90 || side3 === 90) {
    return "right";

  } else {
    return "acute";
  }
}

function fridayThe13ths() {
  //Write code here
}

module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};
