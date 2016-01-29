/////////// Prompt 1 ///////////
/////////// time complexity:
// n = length of array
function findMax(array){
  var max = -Infinity; // 1
  for (var i = 0; i < array.length; i++){ // n
    if (array[i] > max){ // 1
      max = array[i]; // 0 or 1
    }
  }
  return max; // 1
}

// time complexity 2n(1+1) linear



/////////// Prompt 2 ///////////
/////////// time complexity:
// n = length of array
function contains(array, target){
  return array.indexOf(target) > -1;
}
// worst case is target is not there and they have to check each item
// linear



/////////// Prompt 3 ///////////
/////////// time complexity:
function partialContains(array, target, start){
  return array.slice(start).indexOf(target) > -1;
}
// slice is linear and index of is linear
// these are in series and we get an n+n


/////////// Prompt 4 ///////////
/////////// time complexity:
// n = it doesn't matter
function square(array){
  for (var i = 0; i < 3; i++){ // constant - not dependent on how big n is
    array[i] = array[i] * array[i]; //
  }
  return array;
}
// constant time because the for loop is set to 3

/////////// Prompt 5 ///////////
/////////// time complexity:

function repeat(array){
  var repeat = []; // 1
  for (var j = 0; j < 10; j++){ // constant
    repeat[j] = []; // 1
    for (var i = 0; i < array.length; i++){ // n
      repeat[j].push(array[i]); // 1
    }
  }
  return repeat; // 1
}
// ((1*n) + 1)*10 + 1+1 = 10n + 10 + 2
//what if we replace 10 with a parameter?
// it would be quadratic


/////////// Prompt 6 ///////////
/////////// time complexity:
function gcf(num1, num2){
  if (num1 > num2){ //this ensures num1 is the smaller number
    var temp = num1; // 1 constant
    num1 = num2; // 1 constant
    num2 = temp; // 1
  }
  for (var i = num1; i > 1; i--){ // num1 is controlling how many times we iterate
    if (num1 % i === 0 && num2 % i === 0){
      return i;
    }
  }
  return 1;
}
// time complexity: linear
// the number of iterations in the forloop are based on the num1

/////////// Prompt 7 ///////////
/////////// time complexity:
// n is length of string
function countChar(string){
  var counts = {}; // 1
  var currChar, currCharCount; // 2 constant
  for (var i = 0; i < string.length; i++){ // linear n
    currChar = string[i]; // 1
    currCharCount = 1; // 1
    // stop point is one less than n. Decreases by 1 each time
    // n*n
    for (var j = i+1; j < string.length; j++){ //  n-i-1
      if (currChar === string[j]){ // 1
        currCharCount++; // 1 or 0
      }
    }
    if (!counts.hasOwnProperty(currChar)){ // 1 constant
      counts[currChar] = currCharCount; // 1 or 0
    }
  }
  return counts; // 1
}
// time complexity:


/////////// Prompt 8 ///////////
/////////// time complexity:
// n =
var factorial = function(num){
  if (num < 0){ // 1
    return; // 0 or 1
  }
  if (num === 0 || num === 1){ // 1
    return 1; // 1
  } else {
    return num * factorial(num-1); // ??? n
  }
}
// recursive function, linear


/////////// Prompt 9 ///////////
/////////// time complexity:
function tournament(players){ // 1
  var results; // 1
  if (players.length < 3){ // 1
    return players[0]; // 1
  } else {
    results = hotPotato(players); // 1
    //assume hotPotato is a function where sets of
    //three players are teleported simultaneously
    //to a room with a potato. at the end of 5 minutes,
    //the player in each room holding the potato is the winner
    //and all winners get teleported to the results array
    return tournament(results); // ???
  }
}

// if we have 81 peopel and 1/3 win, then those rmaining 30 people get divided by 3, etc
// log base 3



/////////// Prompt 10 ///////////
/////////// time complexity:
// n = length of allowedChars
function allPasswords(allowedChars, maxLength){
  var results = []; // 1

  function findPassword(currentAttempt){ // 1
    if (currentAttempt.length > 0){ // 1
      results.push(currentAttempt.join("")); // 1 or 0
    }
    if (currentAttempt.length <= maxLength){ // 1
      for (var i = 0; i < allowedChars.length; i++){ //
        findPassword(currentAttempt.concat(allowedChars[i]));
      }
    }
  }

  findPassword([]);
  return results;
}
// three squared plus 3 squared
// exponential C^n


/////////// Prompt 11 ///////////
/////////// time complexity:
// like a binary search tree, it has rules for what goes in what child
// used for computer screen resolution
// time complexity: log base four
function findColor(quadTree, coordinates){
  //a quad tree is a tree where each node has 4 children
  //or no children, usually used to divide a two-dimensional
  //space into coordinates
  //coordinates is an array [xpos, ypos]

  if (!Array.isArray(quadTree.color)){
    return quadTree.color;
  } else {
    var quadrant = findQuadrant(quadTree, coordinates);
    if (quadrant === "NE") {
      return findColor(quadTree.color[0], coordinates);
    }
    if (quadrant === "SE") {
      return findColor(quadTree.color[1], coordinates);
    }
    if (quadrant === "SW") {
      return findColor(quadTree.color[2], coordinates);
    }
    if (quadrant === "NW") {
      return findColor(quadTree.color[3], coordinates);
    }
  }

  function findQuadrant(quadTree, coordinates){
    var y = (quadTree.coordinates.top + quadTree.coordinates.bottom)/2;
    var x = (quadTree.coordinates.left + quadTree.coordinates.right)/2;
    if (coordinates[0] > x){
      if (coordinates[1] > y){
        return "NE";
      } else {
        return "SE";
      }
    } else {
      if (coordinates[1] > y){
        return "NW";
      } else {
        return "SW";
      }
    }
  }
}



/////////// Bonus! ///////////
/////////// time complexity:
//this will require some math to determine

function tournamentRedux(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    for (i = 0; i < players.length; i = i + 3){
      results.push(hotPotato([players[i], players[i+1], players[i+2]]));
      //assume hotPotato is a function where
      //the three players at a time must play hot potato for 5 minutes.
      //the player in the room holding the potato is the winner
      //and gets returned from the function
    }
    return tournament(results);
  }
}
