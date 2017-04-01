function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
function BubbleSort(array)
{
	
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < array.length-1; i++) {
			//myChart.data.datasets[0].backgroundColor[i] = 'rgba(100,100,132,1)';
			//myChart.data.datasets[0].backgroundColor[i+1] = 'rgba(1,1,1,1)';
            if (array[i] > array[i+1]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
			
			//myChart.render(1,false);
			
			//alert("sono qui");
			//myChart.render();
			//myChart.data.datasets[0].backgroundColor[i] = 'rgba(255,99,132,1)';
			//myChart.data.datasets[0].backgroundColor[i+1] = 'rgba(255,99,132,1)';

        }

    } while (swapped);
}
 
var buttonShuffle = document.getElementById("Shuffle");
buttonShuffle.addEventListener("click",function()
{

    BubbleSort(myChart.data.datasets[0].data);
	myChart.update();
},false);


