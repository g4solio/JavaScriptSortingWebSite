/**
 * Created by daddi on 4/10/2017.
 */
var timeElement = document.getElementById("Time");
var time;
var type = document.getElementById("Sorting");
var buttonShuffle = document.getElementById("Shuffle");
buttonShuffle.addEventListener("click",function()
{
    var value = type.options[type.selectedIndex].text;
    time = parseInt(timeElement.value);
    if(value == "Quick") {
        myChart.data.datasets[0].data = QuickSort(myChart.data.datasets[0].data, 0, myChart.data.datasets[0].data.length - 1);
        myChart.update();
    }
    else if (value == "Bubble")
    {
        setInterval(function () {
            var array = myChart.data.datasets[0].data;

            if (index > array.length)
                index = 0;

            HighlightsOff(index - 1,1);
            HighlightsOff(index,1);
            if (!BubbleSort(array, index)) {
                index++;
                cambiato = true;
            }
            HighlightsOn(index);
            HighlightsOn(index + 1);
            myChart.update();
            //alert(array.length);
        },time * 1000);
    }


    //alert(array.length);
    //Prova(myChart.data.datasets[0].data);

},false);
