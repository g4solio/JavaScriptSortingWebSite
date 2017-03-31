
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
var textInput = document.getElementById("SizeArray");
var buttonShuffle = document.getElementById("Shuffle");
buttonShuffle.addEventListener("click",function()
{

    shuffle(myChart.data.datasets[0].data);
	myChart.update();
},false);

var buttonCreateArray = document.getElementById("GenerateArray");
buttonCreateArray.addEventListener("click",function () {
    var lenght = parseInt(textInput.value);
    myChart.data.datasets[0].data = [];
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

