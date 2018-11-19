// from data.js
var tableData = data;

// YOUR CODE HERE!
var data_table = d3.select("tbody");

tableData.forEach((fillTable) => {
  var row = data_table.append("tr");
  Object.entries(fillTable).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

console.log("Table is populated");
// Select the submit button
var submit = d3.select("#filter-btn");
console.log("Submit Button " + submit.property('value'));
// Complete the click handler for the form
submit.on("click", function() {
	// Prevent the page from refreshing
  	d3.event.preventDefault();
  	//clear existing data
	data_table.html("");
  
  	var optionValue = parseInt(d3.select('#option-select').node().value);
  	console.log("Selected Option - " + optionValue);
	// Select the input element and get the raw HTML node
	var input_data = d3.select("#datetime");
 
	// Get the value property of the input element
	var filter_date = input_data.property('value');

	switch (optionValue) {
    	case 1:
    		var filtered_results = tableData.filter(function dateFilter(element) {
        		return element.datetime == filter_date;
        	});
       		break;
    	case 2:
    		var filtered_results = tableData.filter(function dateFilter(element) {
        		return element.city == filter_date;
        	});
        	break;
        case 3:
        	var filtered_results = tableData.filter(function dateFilter(element) {
        		return element.country == filter_date;
        	});
        	break;
        case 4:
        	var filtered_results = tableData.filter(function dateFilter(element) {
        		return element.shape == filter_date;
        	});
        	break;
    	default:
        	console.log("No value found");
	}

	console.log("FILTERED DATA ** " + filtered_results);

	if (filtered_results.length > 0) {
		filtered_results.forEach((fillTable) => {
  			var row = data_table.append("tr");
  			Object.entries(fillTable).forEach(([key, value]) => {
    			var cell = row.append("td");
    			cell.text(value);
  			});
  		});
	} else {
		var row = data_table.append("tr");
		var cell = row.append("td").attr("colspan", "7");
		cell.text("No data found for specified filter. Please use another value.")
	}
});

// Add change handler for option to disply appropriate placeholder
var selectObj = d3.select('#option-select');
selectObj.on("change", function() {
	var selectedValue = parseInt(selectObj.node().value);
	switch (selectedValue) {
		case 1 :
			d3.select("#datetime").property("value", "");
			d3.select("#datetime").attr("placeholder", "1/1/2010");
			break;
		case 2 : 
			d3.select("#datetime").property("value", "");
			d3.select("#datetime").attr("placeholder", "el cajon");
			break;
		case 3 :
			d3.select("#datetime").property("value", ""); 
			d3.select("#datetime").attr("placeholder", "us");
			break;
		case 4 : 
			d3.select("#datetime").property("value", "");
			d3.select("#datetime").attr("placeholder", "circle");
			break;
		default : 
			console.log("No value found");
	}
})