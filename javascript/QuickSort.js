function QuickSort(arr, left, right){
    var len = arr.length,
        pivot,
        partitionIndex;

    HighlightsOn(left,500);
    HighlightsOn(right,500);


    if(left < right){
        pivot = right;
        partitionIndex = Partition(arr, pivot, left, right);
        HighlightOnPivot(pivot,1);
        //await sleep(10000);
        //sort left and right
        myChart.update();
        setTimeout(function()
        {
            QuickSort(arr, left, partitionIndex - 1);
            QuickSort(arr, partitionIndex + 1, right);
        },1000);


        
    }

        HighlightsOff(left,1000);
        HighlightsOff(right,1000);
        HighlightsOff(pivot,1000);

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
    
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var buttonShuffle = document.getElementById("Shuffle");
buttonShuffle.addEventListener("click",function()
{


    myChart.data.datasets[0].data = QuickSort(myChart.data.datasets[0].data,0,myChart.data.datasets[0].data.length-1);
    myChart.update();

    //alert(array.length);
    //Prova(myChart.data.datasets[0].data);

},false);