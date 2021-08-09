// Merge and Sort Arrays //

/*
    - merge 2 arrays together in an ordered sort
    - e.g.: 
        merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);	
            //[ 1, 2, 3, 4, 4, 5, 6 ]
*/
function merge(arr1, arr2) {
  let merged = [...arr1, ...arr2];
  return merged.sort((a, b) => a - b);
}
