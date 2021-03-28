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
    var inputInfoDate = inputDate.property("value");
    console.log(inputDate);

    var filtered_date = tableData.filter(event => event.datetime === inputInfoDate);
    tbody.html("");
    console.log(filtered_date);

    filtered_date.forEach(function(input) {
        console.log(input);
        var row = tbody.append("tr");
        Object.entries(input).forEach(function([key, value]){
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

    var inputCity = d3.select("#city");
    var inputInfoCity = inputCity.property("value");
    
    var filtered_city = tableData.filter(event => event.city === inputInfoCity);
    tbody.html("");

    filtered_city.forEach(function(input){
        var row = tbody.append("tr");
        Object.entries(input).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });


    var inputState = d3.select("#state");
    var inputInfoState = inputState.property("value").toLowerCase();
    
    var filtered_state = tableData.filter(event => event.state === inputInfoState);
    tbody.html("");

    filtered_state.forEach(function(input){
        var row = tbody.append("tr");
        Object.entries(input).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });

    var inputCountry = d3.select("#country");
    var inputInfoCountry = inputCountry.property("value");
    
    var filtered_country = tableData.filter(event => event.country === inputInfoCountry);
    tbody.html("");

    filtered_country.forEach(function(input){
        var row = tbody.append("tr");
        Object.entries(input).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });

    var inputShape = d3.select("#shape");
    var inputInfoShape = inputShape.property("value");
    
    var filtered_shape = tableData.filter(event => event.shape === inputInfoShape);
    tbody.html("");

    filtered_shape.forEach(function(input){
        var row = tbody.append("tr");
        Object.entries(input).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });


});