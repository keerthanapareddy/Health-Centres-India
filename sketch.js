var app = {
  records: [],
  stateName,

  initialize: function() {
    $('#searchlocation').submit(function(e) {
      // debugger;
      e.preventDefault();
      // debugger;
      $('.mainCircles').remove();
      console.log("Yahaan!");
      app.getHealthCentreData();
      e.preventDefault();
    });
  },

    getHealthCentreData: function() {
      this.stateName = $('#stateName').val();
      console.log(stateName);
      var HealthCentreURL = 'https://api.data.gov.in/resource/0109e83b-3f74-4ff6-a173-b21ab04aeadf?api-key=579b464db66ec23bdd00000189403fb7d24e49935e0eeb346f48f2b7&format=json&offset=0&limit=1000';
      console.log(HealthCentreURL);

      $(document).ready(function() {
        console.log("document 2 ready");
        //ajax call here
        $.ajax({
          url: HealthCentreURL,
          type: 'GET',
          dataType: 'json',

          check: console.log("ajax call"),
          error: function(err) {
            console.log("Uh oh...");
            console.log(err);
          },

          success: function(data) {
            console.log("success");
            console.log(data);
            app.records = data.records;
            app.makeHTML();
          }
        });
      });
    },

  makeHTML: function() {
    // console.log("making HTML");

    // for (var i = 0; i < app.records.length; i++) { //go through all the results and group them into states
    //   if (app.records[i].states_union_territories == app.stateName) { //check if the input name is the same as state name
    //     // console.log(app.records[i].district); //if so get all the district names of that state
    //     app.drawingData(i);
    //     // theHTML += "<button id='districtbutton' onclick='app.drawingData(" + i + ")'>" + app.records[i].district + "</button>";
    //
    // }
    app.drawingData(app);
  // }
},

  drawingData: function(app){
    var records = app.records;
    var stateName = app.stateName;
    // var selectedDistrict = app.records[recordID];  //getting entire record of the selected district(button)
    // var record = Object.values(selectedDistrict);  //converting the record object into an array for D3 to take it
    // console.log("record:" + record );
    // var subcentres = parseInt(record[3],10);
    // var phcs = parseInt(record[4],10);
    // var chcs = parseInt(record[5],10);
    //
    // var sum = subcentres + phcs + chcs ; //sum of all the health centres
    // var totalHealthCentres = [sum]; //converting it to an array for D3 to read
    // var totalHealthCentresMapped = totalHealthCentres.map(x => x / 20);
    // var theData = totalHealthCentresMapped;

    var theData = records.filter(function(record){
      return record.states_union_territories == stateName;
    });
    theData = theData.map(function(record){
      // record.fewatu = "fdfknsl";
      console.log(record);
      let chcs = Number(record.chcs);
      let phcs = Number(record.phcs);
      let sub_centres = Number(record.sub_centres);
      var sum = sub_centres + phcs + chcs ; //sum of all the health centres
      let district = record.district;


      return {sum: sum, district: district };
    })

    // console.log()
    console.log(theData);
  //   console.log("mapped: "+ totalHealthCentresMapped);
  //
  //
  //   console.log("sum: " + sum);
    var svgContainer = d3.select("#mySVG");
    width = +svgContainer.attr("width"),
    height = +svgContainer.attr("height");
  //
  //   var color = d3.scaleOrdinal(d3.schemeCategory20b);
  //
  //   var pack = d3.pack()
  //             .size([width, height])
  //             .padding(1.5);
  //
  //             console.log(theData);
  var circles = svgContainer.selectAll('circles')
                              .data(theData)
                              .enter()
                              .append("circle")
                                .attr("id", function(d){
                                  return d.district;
                                })
                                .attr("cx", function(d, i){
                                  // console.log(i, d)
                                  return 100 * i + 50;

                                })
                                .attr("cy", 200)
                                .attr("r", function(d){
                                  return d.sum/20;
                                })
                                .style("fill", "#CC3F4B")
                              .append("text")
                               .attr("x", function(d, i){
                                 // console.log(i, d)
                                 return 100 * i + 50;
                               })
                               .attr("y", 500)
                               .text( function (d) { return d.district; })
                               .attr("font-family", "sans-serif")
                               .attr("font-size", "20px")
                               .attr("fill", "white");




                              // .attr("transform", function(d) {
                              //   // console.log(theData[0]);
                              //   return "translate(" + 100 + "," + 100 + ")";
      // var i = 0;
      // i++;                        // });


    // var circleAttributes =

    // circles
    //     .attr("id",app.records[recordID].district)
    //     .attr("cx", function(d, i){
    //       return 100 * i + 50;
    //
    //     })
    //     .attr("cy", 200)
    //     // .attr("transform", function(d) {
    //     //   // console.log(theData[0]);
    //     //   return "translate(" + circles.cx + 100 + "," + circles.cy+100 + ")";})
    //     .attr("r", function(d){return 2*theData[0];})
    //
    //    // .style("fill", function(d) { return color; });
    //    .style("fill", "red");





}
  };
