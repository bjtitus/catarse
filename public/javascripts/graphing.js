google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['CO1', 2],
    ['CO2', 2],
    ['Uninvested Funds', 11],
  ]);

  var options = {
    title: 'My Investments'
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart'));
  chart.draw(data, options);
}