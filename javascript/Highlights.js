/**
 * Created by daddi on 4/2/2017.
 */
function HighlightsOn(i,t)
{
	setTimeout(function(){
		myChart.data.datasets[0].backgroundColor[i] = 'rgba(100,100,132,1)';
    	myChart.update();
	},t);

}

function HighlightsOff(i,t)
{
	
	setTimeout(function()
	{
		myChart.data.datasets[0].backgroundColor[i] = 'rgba(255,99,132,1)';
		myChart.update();

	},t);

}

function HighlightOnPivot(i)
{
    myChart.data.datasets[0].backgroundColor[i] = 'rgba(255,255,255,1)';
}