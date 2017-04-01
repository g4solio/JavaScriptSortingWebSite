function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function BubbleSort(array)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < array.length-1; i++) {
			myChart.clear();
			myChart.data.datasets[0].backgroundColor[i] = 'rgba(100,100,132,1)';
            if (array[i] > array[i+1]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
			myChart.update(10000,false);
			alert("sono qui");
			//myChart.render();
			myChart.data.datasets[0].backgroundColor[i] = 'rgba(255,99,132,1)';
        }
    } while (swapped);
}
 
var buttonShuffle = document.getElementById("Shuffle");
buttonShuffle.addEventListener("click",function()
{

    BubbleSort(myChart.data.datasets[0].data);
	myChart.update();
},false);


