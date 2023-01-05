

function selectionSort(arr) {

  // Copy the original array

  // Create an array to store the sorted values

  // While the array is not empty...

    // Do not move this console.log


    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array

    let copyArr = arr.slice();
    let sorted = [];
    while(copyArr.length > 0){
      console.log(sorted.join(","));
      let minIdx = copyArr.indexOf(Math.min(...copyArr));
      let currentMin = copyArr.splice(minIdx, 1)[0];
      sorted.push(currentMin);
    }
    return sorted;

}





function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

    let divider = 0;
    while(divider < arr.length){
      console.log(arr.join(","));

      let minIdx = divider;
      for (let i = divider + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIdx]) {
        minIdx = i;
      }
      }

      let currentMin = arr[minIdx];
      for(let i = minIdx; i > divider; i--){
        arr[i] = arr[i- 1];
      }

      arr[divider] = currentMin;
      divider++;
    }
    return arr;

}

console.log(selectionSortInPlace([2,7,4,2,9,1]));


module.exports = [selectionSort, selectionSortInPlace];
