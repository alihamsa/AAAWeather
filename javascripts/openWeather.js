define(['jquery'], function($) {

return {

	callAPI: function(zipCode, callback){

			console.log('called API');
			var url1 = "http://api.openweathermap.org/data/2.5/weather?zip=";
			url1 += zipCode;
			url1 += "&APPID=0faa53e0607e247aee0ff397596ec7d4&units=imperial";

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