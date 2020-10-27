//helper functions
function swap(index1, index2, arr) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while( i < arr1.length && j < arr2.length ) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++
    }

    return results
}

//sorting algorithms

function bubbleSort(arr) {
    for ( let i = arr.length - 1; i > 0; i--) {
        let noSwaps = true;
        for( let j = 0; j <= i; j++) {
            if( arr[j] > arr[j+1]) {
                noSwaps = false;
                swap(j, j+1, arr);
            }
        }
        if (noSwaps) {
            break;
        }
    }

    return arr;
}

function selectionSort(arr) {
    for ( let i = 0; i <= arr.length - 1; i++ ) {
        let lowestNumber = i;
        for ( let j = i + 1; j <= arr.length - 1; j++ ) {
            if ( arr[j] < arr[lowestNumber] ) {
                lowestNumber = j;
            }
        }
        if ( lowestNumber !== i ) {
            swap(i, lowestNumber, arr);
        }
    }

    return arr;
}

function insertionSort(arr) {
    for ( let i = 1; i < arr.length; i++ ) {
        let currentVal = arr[i];
        let j = i - 1;

        while ( j >= 0 && arr[j] > currentVal ) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

//intermediate sorting algorithms

function mergeSort(arr) {
    if ( arr.length <= 1 ) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
