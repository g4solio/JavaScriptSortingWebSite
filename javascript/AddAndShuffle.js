
var textInput = document.getElementById("SizeArray");


var buttonCreateArray = document.getElementById("GenerateArray");
buttonCreateArray.addEventListener("click",function () {
    var lenght = parseInt(textInput.value);
    myChart.data.datasets[0].data = [];
	myChart.data.labels = [];
	myChart.data.datasets[0].backgroundColor = [];
	myChart.data.datasets[0].borderColor = [];
	myChart.update();
    for(var i = 0;i<lenght;i++)
    {
        var value = Math.floor((Math.random() * 100) + 1);
        myChart.data.datasets[0].data[i] = value;
        myChart.data.labels[i] = "";
        myChart.data.datasets[0].backgroundColor[i] = 'rgba(255,99,132,1)';
        myChart.data.datasets[0].borderColor[i] = 'rgba(255,99,132,1)';

		
		myChart.update();

    }

},false);

