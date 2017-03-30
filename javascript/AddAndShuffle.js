
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
var buttonShuffle = document.getElementById("shuffle");
buttonShuffle.addEventListener("click",function()
{
	for(var i = 0;i<20;i++)
	{
		myChart.clear();
		setTimeout(myChart.data.datasets[0].data = shuffle(myChart.data.datasets[0].data), 2000);
		var value = Math.floor((Math.random() * 100) + 1);;
		myChart.data.datasets[0].data[myChart.data.datasets[0].data.length] = value;
		myChart.data.labels[myChart.data.datasets[0].data.length-1] = "";
		myChart.data.datasets[0].backgroundColor[myChart.data.datasets[0].data.length-1] = 'rgba(255,99,132,1)';
		myChart.data.datasets[0].borderColor[myChart.data.datasets[0].data.length-1] = 'rgba(255,99,132,1)';
		
		myChart.update();
	}
},false);

