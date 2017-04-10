
function BubbleSort(array,i)
{

         if (array[i] > array[i+1]) {
             var temp = array[i];
             array[i] = array[i+1];
             array[i+1] = temp;
             return true;
         }
    return false;
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


