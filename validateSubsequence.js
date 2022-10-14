//Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

//example: array = [1, 2, 3, 4] & sequence = [1, 3, 4]. array.contains(sequence) ? true : false. This results in "true" printing, since sequence contains integers of array in sequenctial order.

//O(n) time | O(1) space complexity
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqPointer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[seqPointer]) {
      seqPointer++;
    }
  }
  return seqPointer == sequence.length;
}

//Pointer variation: Because we are checking that the values in the sequence array are subsequent to the array, we can use two pointers to compare values to one another. We set up arrayPointer for the array we're checking, as well as a sequencePointer for the sequence array. Using a while loop(while sequencePointer is less than arrayPointer), we start both pointers at index 0, and check the conditional of whether or not they're the same number. If they're of equal value, we move the sequencePointer to the right. Regardless of that, we move the arrayPointer to the right. Once the while loop is done, we know we've traversed the entire sequence array and all elements were matched. Then we return the boolean value of sequencePointer being equal to the length of the sequence array, which is true.

// //O(n) time | O(1) space complexity
// function isValidSubsequence(array, sequence) {
//   // Write your code here.
//   arrPointer = 0;
//   seqPointer = 0;
//   while(arrPointer < array.length && seqPointer < sequence.length) {
//     if(array[arrPointer] == sequence[seqPointer]) {
//       seqPointer++;
//     }
//     arrPointer++;
//   }
//   return seqPointer == sequence.length;
// }

//forEach variation: Not much difference to this approach, save the code is a few lines shorter. The logic is exactly the same as the two other solutions.

//O(n) time | O(1) space complexity

// function isValidSubsequence(array,sequence) {
//   let pointer = 0;
//   array.forEach((num) => num === sequence[pointer] && pointer++)
//   return pointer === sequence.length;
// }
