/**
 * Created by daddi on 4/2/2017.
 */
function HighlightsOn(i)
{
    myChart.data.datasets[0].backgroundColor[i] = 'rgba(100,100,132,1)';
}

function HighlightsOff(i,t)
{

    myChart.data.datasets[0].backgroundColor[i] = 'rgba(255,99,132,1)';

}

function HighlightOnPivot(i)
{
    myChart.data.datasets[0].backgroundColor[i] = 'rgba(255,255,255,1)';
}