define(['jquery'], function($) {

return {

	callAPI: function(searchTerms, callback){

			console.log('called API');
			var url1 = "http://api.openweathermap.org/data/2.5/forecast/daily?";
			url1 += searchTerms;
			url1 += "&APPID=0faa53e0607e247aee0ff397596ec7d4&units=imperial&cnt=7";

			console.log(url1);
			$.ajax({method: "GET",
		  url: url1
		})
		  .done(function( data ) {
		  	data = JSON.stringify(data);
		    callback(data);
		  });
		}
	} //end return
}); //end define