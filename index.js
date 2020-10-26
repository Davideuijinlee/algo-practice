//helper functions
function swap(index1, index2, arr) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
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
    for ( let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        for ( var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }
    
    return arr;
}
