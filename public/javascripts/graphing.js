google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    title: 'My Investments',
    backgroundColor: 'transparent',
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart'));
  chart.draw(data, options);
}