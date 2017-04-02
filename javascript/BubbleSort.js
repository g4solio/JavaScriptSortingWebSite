
function BubbleSort(array,i)
{
        HighlightsOn(i);
        HighlightsOn(i+1);
         if (array[i] > array[i+1]) {
             var temp = array[i];
             array[i] = array[i+1];
             array[i+1] = temp;
         }

		//myChart.render(1,false);

		//alert("sono qui");
		//myChart.render();


}
 // function Prova (array){
 //     for (var i=0; i < array.length-1; i++) {
 //         myChart.data.datasets[0].backgroundColor[i] = 'rgba(100,100,132,1)';
 //         myChart.data.datasets[0].backgroundColor[i+1] = 'rgba(1,1,1,1)';
 //         if (array[i] > array[i+1]) {
 //             var temp = array[i];
 //             array[i] = array[i+1];
 //             array[i+1] = temp;
 //             swapped = true;
 //         }
 //
 //         //myChart.render(1,false);
 //
 //         //alert("sono qui");
 //         //myChart.render();
 //         //myChart.data.datasets[0].backgroundColor[i] = 'rgba(255,99,132,1)';
 //         //myChart.data.datasets[0].backgroundColor[i+1] = 'rgba(255,99,132,1)';
 //         myChart.update();
 //     }
 // }
var index = 0;
var buttonShuffle = document.getElementById("Shuffle");
buttonShuffle.addEventListener("click",function()
{
    var array = myChart.data.datasets[0].data;

    if(index > array.length)
        index = 0;

    HighlightsOff(index-1);
    HighlightsOff(index);
    BubbleSort(array,index);
    index++;
    myChart.update();
    //alert(array.length);

    //Prova(myChart.data.datasets[0].data);

},false);


