google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(initChart);

var pieChart;
var barChart;
var pieData;
var barData;
var pieOptions;
var barOptions;

function initChart() {
    pieData = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Events & Activities', 11],
        ['Office Supplies', 2],
        ['Building & Maintenance', 2],
        ['Church System', 2],
        ['Missions', 7]
    ]);

    barData = new google.visualization.DataTable();
    barData.addColumn('string', 'Month');
    barData.addColumn('number', 'Donated');
    barData.addRows([
        ['January', 450],
        ['February', 500],
        ['March', 330],
        ['April', 490],
        ['May', 400],
        ['June', 600],
        ['July', 778],
        ['August', 350],
        ['September', 200],
        ['October', 480],
        ['November', 800],
        ['December', 1500],
    ]);

    pieOptions = {
        title: 'LCCCI Expenses',
        backgroundColor: 'transparent',
        legendTextStyle: { color: 'white' },
        titleTextStyle: { color: 'white' },
        pieSliceTextStyle: { color: 'black' }
    };

    barOptions = {
        title: 'LCCCI Monthly Donation',
        hAxis: {
            textStyle: { color: 'white' },
            titleTextStyle: { color: 'white' }
        },
        vAxis: {
            textStyle: { color: 'white' },
            titleTextStyle: { color: 'white' }
        },
        backgroundColor: 'transparent',
        legendTextStyle: { color: 'white' },
        titleTextStyle: { color: 'white' }
    };

    pieChart = new google.visualization.PieChart(document.getElementById('piechart'));
    barChart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

    drawCharts();

    window.addEventListener('resize', drawCharts);
}

function drawCharts() {
    var theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    if (theme === 'dark') {
        pieOptions.backgroundColor = 'transparent';
        pieOptions.legendTextStyle.color = 'white';
        pieOptions.titleTextStyle.color = 'white';
        barOptions.backgroundColor = 'transparent';
        barOptions.hAxis.textStyle.color = 'white';
        barOptions.hAxis.titleTextStyle.color = 'white';
        barOptions.vAxis.textStyle.color = 'white';
        barOptions.vAxis.titleTextStyle.color = 'white';
        barOptions.legendTextStyle.color = 'white';
        barOptions.titleTextStyle.color = 'white';
    } else {
        pieOptions.backgroundColor = 'transparent';
        pieOptions.legendTextStyle.color = 'black';
        pieOptions.titleTextStyle.color = 'black';
        barOptions.backgroundColor = 'transparent';
        barOptions.hAxis.textStyle.color = 'black';
        barOptions.hAxis.titleTextStyle.color = 'black';
        barOptions.vAxis.textStyle.color = 'black';
        barOptions.vAxis.titleTextStyle.color = 'black';
        barOptions.legendTextStyle.color = 'black';
        barOptions.titleTextStyle.color = 'black';
    }
    pieChart.draw(pieData, pieOptions);
    barChart.draw(barData, barOptions);
}
