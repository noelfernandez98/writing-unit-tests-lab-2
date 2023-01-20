# Problem Set: Test Driven Development



### Directions
1. Run `npm install` to load project dependencies.
2. See the problems below for a description of what each function is supposed to do. Each problem has 2 to 6 examples which you will write the test cases for! For example, Problem 1 has six examples, so you should write six `expect` statements (one testing each example). Problem 2 has four examples, so you must write four `expect` statements for those examples. 
3. For each problem, first write the unit tests in the `exercises.test.js` file.
4. Then, run `npm test` to ensure the test case you just wrote FAILS! This is because you have not written the code for the tests yet.
5. Once you've written the tests for a problem, implement your solution to the problem in `exercises.js` so that it passes all test cases before moving on to the next problem.
6. Repeat Steps 3 through 5 for each problem until you have finished all problems and all test cases are correctly written and are passing.

When you are done, push your final commits and submit through Canvas.


### Problems

1. Write a Function named `octalToDecimal` that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number. Implement the conversion yourself: do not use something else to perform the conversion for you. Check out [this video](https://www.youtube.com/watch?v=YCM2JReWS10)

      Examples:
      ```javascript
      octalToDecimal('1');           // 1
      octalToDecimal('10');          // 8
      octalToDecimal('130');         // 88
      octalToDecimal('17');          // 15
      octalToDecimal('2047');        // 1063
      octalToDecimal('11');         // 9
      ```

2. Write a Function named `anagram` that takes two arguments: a word and an array of words. Your function should return an array that contains all the words from the array argument that are anagrams of the word argument. For example, given the word "listen" and an array of candidate words like "enlist", "google", "inlets", and "banana", the program should return an array that contains "enlist" and "inlets".

      Examples:
      ```javascript
      anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
      anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]
      ```

3. Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'. (**Note:** Valid triangles have three angles that sum to 180 degrees.) You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

      Examples:
      ```javascript
      triangle(60, 70, 50);       // "acute"
      triangle(30, 90, 60);       // "right"
      triangle(120, 50, 10);      // "obtuse"
      triangle(0, 90, 90);        // "invalid"
      triangle(50, 50, 50);       // "invalid"
      ```

4. Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future. **Note:** You may need to review [this article](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript) on the `Date` object.

      Examples:
      ```javascript
      fridayThe13ths(1986);      // 1
      fridayThe13ths(2015);      // 3
      fridayThe13ths(2017);      // 2
      ```

