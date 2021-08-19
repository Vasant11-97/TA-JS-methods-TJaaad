Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

- Parameter: (index) defaults to 0 - (string data type)
   - Return: A new string representing the calling string converted to upper case.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase; 
     let houseName = 'Starks';
     houseName.toUpperCase; 
     ```
   - `toUpperCase` method return the calling string value converted to uppercase.

3. `toLowerCase`

- Parameter: (index) defaults to 0 - (string data type)
   - Return: A new string representing the calling string converted to lower case.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toLowerCase 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toLowerCase; 
     let houseName = 'Starks';
     houseName.toLowerCase; 
     ```
   - `3. `toLowerCase`
` method return the calling string value converted to lowercase.

4. `trim`

- Parameter: It accepts two values either from start or end
   - Return: A new string representing the calling string trimmed by start or end.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.trim 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.trim; 
     let houseName = 'Starks';
     houseName.trim; 
     ```
   - `trim` is used to trim the string from extra spaces from start or end.

5. `trimEnd`

- Parameter: It accepts two values either from start or end
   - Return: A new string representing the calling string trimmed by start or end.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.trimEnd 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.trimEnd; 
     let houseName = 'Starks';
     houseName.trimEnd; 
     ```
   - `trimEnd` is used to trim the string from extra spaces from end.

6. `trimStart`

- Parameter: It accepts two values either from start or end
   - Return: A new string representing the calling string trimmed by start or end.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.trimStart 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.trimStart; 
     let houseName = 'Starks';
     houseName.trimStart; 
     ```
   - `trimStart` is used to trim the string from extra spaces from start.

7. `concat`

- Parameter: One or more strings to concatenate to string
   - Example:
     ```js
     let name = 'Arya Stark';
     name.concat 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.concat(' 😎', houseName); 
     let houseName = 'Starks';
     houseName.concat(' ,', houseName); 
     ```
   - `concat` is used to concantinate the string argument to the calling string and return a new string

8. `endsWith`

- Parameter: It asks for a value to check wheather it is true or false
   - Example:
     ```js
     let name = 'Arya Stark';
     name.endsWith 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.endsWith(' 😎');  // false
     let houseName = 'Starks'; 
     houseName.endsWith(' ,'); // false
     ```
   -  `endsWith`
` It asks for a value to check wheather it is true or false

9. `includes`

- Parameter: It asks for a value to check wheather it is true or false
   - Example:
     ```js
     let name = 'Arya Stark';
     name.includes 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.includes(' 😎');  // false
     let houseName = 'Starks'; 
     houseName.includes(' ,'); // false
     ```
   -  `includes`
` It asks for a value to check wheather it is true or false

10. `indexOf`
- Parameter: It asks for a value to check the index value of the string
- Example:
     ```js
     let name = 'Arya Stark';
     name.indexOf 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.indexOf('A');  // 0
     let houseName = 'Starks'; 
     houseName.indexOf('k'); // 10
     ```
   -  `indexOf`
` This function gives us the index value of the parameter which we have to check.

11. `lastIndexOf`

- Parameter: It asks for a value to check the index value of the string
- Example:
     ```js
     let name = 'Arya Stark';
     name.lastIndexOf 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.lastIndexOf('A');  // 0
     let houseName = 'Starks'; 
     houseName.lastIndexOf('k'); // 10
     ```
   -  `lastIndexOf`
` This function gives us the index value of the parameter which we have to check.

12. `padEnd`

- Parameter: It asks for a value for two parameter to add in last and index value from where to start.
- Example:
     ```js
     let name = 'Arya Stark';
     name.padEnd 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padEnd('A');  // 0
     let houseName = 10,`Starks'; 
     houseName.padEnd(10,'k'); // 10
     ```
   -  `lastIndexOf`
` This function gives us the padding with some letter or character in the end of statement or word.

13. `padStart`

- Parameter: It asks for a value for two parameter to add in last and index value from where to start.
- Example:
     ```js
     let name = 'Arya Stark';
     name.padStart 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padStart('A');  // 0
     let houseName = 10,`Starks'; 
     houseName.padStart(10,'k'); // 10
     ```
   -  `lastIndexOf`
` This function gives us the padding with some letter or character in the start of statement or word.

14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
