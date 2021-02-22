/********** CHALLENGE 1 - CHANGE EACH LETTTER TO THE NEXT LETTER **********/

/*
iNSTRUCTION: Write a function that changes every letter to the next letter:

"a" becomes "b"
"b" becomes "c"
"d" becomes "e"
and so on ...
*/

// function move(word) {
// 	return [...word].map(a => String.fromCharCode(a.charCodeAt(0)+1)).join('');
// }

//OR Native Function

/*
function move(word) {
    var allIndex = [];
        var convert = [];
        for(i=0;i<word.length;i++){
        allIndex.push(word.charCodeAt(i)+1);
    }
        console.log(allIndex);
        for(i=0;i<allIndex.length;i++){
        convert.push(String.fromCharCode(allIndex[i]));
    }
        console.log(convert);
        return convert.join("");
}
*/

//OR Regex

/*const move = word =>
word.replace(/\w/g, match => String.fromCharCode(match.charCodeAt(0) + 1));
*/

/**********
 * CHALLENGE 2 - ADD UP THE NUMBERS FROM A SINGLE NUMBER **********/

/*
INSTRUCTION: Create a function that takes a number as an argument.
Add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10
because 1 + 2 + 3 + 4 = 10.*/

/*function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}
*/

//OR


/*
function addUp(num) {
    return (!num) ? 0 : num + addUp(num - 1)
}
*/
