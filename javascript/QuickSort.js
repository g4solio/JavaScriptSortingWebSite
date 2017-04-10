function QuickSort(arr, left, right){
    setTimeout(function () {
        var len = arr.length,
            pivot,
            partitionIndex;

        HighlightsOn(left,time * 500);
        HighlightsOn(right,time * 500);


        if(left < right){
            pivot = right;
            partitionIndex = Partition(arr, pivot, left, right);
            HighlightOnPivot(pivot,time * 1);
            //await sleep(10000);
            //sort left and right
            myChart.update();

            QuickSort(arr, left, partitionIndex - 1);
            QuickSort(arr, partitionIndex + 1, right);




        }

        HighlightsOff(left,time * 2000);
        HighlightsOff(right,time * 2000);
        HighlightsOff(pivot,time * 2000);

        return arr;

    },time * 1000);
    return arr;
    


}

function Partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for(var i = left; i < right; i++){
        if(arr[i] < pivotValue){
            Swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    Swap(arr, right, partitionIndex);
    return partitionIndex;
}



// function quickSort(arr, left, right){
//     var len = arr.length,
//         pivot,
//         partitionIndex;
//
//
//     if(left < right){
//         pivot = right;
//         partitionIndex = partition(arr, pivot, left, right);
//
//         //sort left and right
//         quickSort(arr, left, partitionIndex - 1);
//         quickSort(arr, partitionIndex + 1, right);
//     }
//     return arr;
// }
// function partition(arr, pivot, left, right){
//     var pivotValue = arr[pivot],
//         partitionIndex = left;
//
//     for(var i = left; i < right; i++){
//         if(arr[i] < pivotValue){
//             swap(arr, i, partitionIndex);
//             partitionIndex++;
//         }
//     }
//     // var i = left;
//     // var Interval = setInterval(function () {
//     //
//     //     if(arr[i] < pivotValue){
//     //         swap(arr, i, partitionIndex);
//     //         partitionIndex++;
//     //         alert("sono");
//     //     }
//     //     if(i<right)
//     //         i++;
//     //     else
//     //         clearInterval(Interval);
//     // },500);
//
//     swap(arr, right, partitionIndex);
//     return partitionIndex;
// }
//
function Swap(arr, i, j){
    setTimeout(function () {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    },time * 2000);

}

