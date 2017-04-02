/**
 * Created by daddi on 3/25/2017.
 */
var myCanvas = document.getElementById("myChart").getContext("2d");
var array = [];
var myChart = new Chart(myCanvas, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: array,
            backgroundColor: [
            ],
            borderColor: [
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
				stacked:true,
				categoryPercentage: 1,
				barPercentage: 1.0
            }]
        }
    }
});

