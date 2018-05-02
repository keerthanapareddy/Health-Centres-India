google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyDX7-q2dtWuFBLdj5-VuRM9IGNs9tVxBH0'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
['State', 'Total Health Centres'],
['Uttar Pradesh', 24964],
['Maharashtra',12754],
['Bihar', 11998],
['West Bengal', 11632],
['Madhya Pradesh', 10672],
['Tamil Nadu', 10932],
['Rajasthan', 17064],
['Karnataka', 11946],
['Gujarat', 10837],
['Andhra Pradesh', 8798],
['Odisha', 8338],
['Telangana', 5600],
['Kerala', 6461],
['Jharkhand', 4333],
['Assam', 5793],
['Punjab', 3533],
['Chhattisgarh',  6140],
['Haryana', 3067],
['Jammu and Kashmir', 3688],
['Uttarakhand', 2164],
['Himachal Pradesh', 2710],
['Tripura', 1101],
['Meghalaya', 572],
['Manipur', 523],
['Nagaland', 543],
['Goa', 242],
['Arunachal Pradesh', 786],
['Mizoram', 436],
['Sikkim', 173],
['Delhi',  15],
['Puducherry', 125],
['Chandigarh',  22],
['A  & N Islands', 149],
['D & N Haveli', 82],
['Daman and Diu', 32],
['Lakshadweep', 21]
  ]);

  var options = {
    region: 'IN', // India
    displayMode: 'regions',
    resolution: 'provinces',
    colorAxis: {colors: ['8E888A']},
    // backgroundColor: '#81d4fa',
    datalessRegionColor: '#ffffff',
    defaultColor: '#000000',
  };

  console.log(data);

  var chart = new google.visualization.GeoChart(document.getElementById('indiaMap'));
  chart.draw(data, options);
};
