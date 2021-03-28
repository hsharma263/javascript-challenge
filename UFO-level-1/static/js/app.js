// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);
data.forEach(function(sighting){
    // console.log(sighting);
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key, value]){
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});


var button = d3.select("#filter-btn");
button.on("click", function(){

    var inputDate = d3.select("#datetime");
    var inputInfo = inputDate.property("value");
    console.log(inputDate);

    var filtered_data = tableData.filter(event => event.datetime === inputInfo);
    tbody.html("");
    console.log(filtered_data);

    filtered_data.forEach(function(input) {
        console.log(input);
        var row = tbody.append("tr");
        Object.entries(input).forEach(function([key, value]){
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});