define(['jquery', 'openWeather'], function($, openWeather) {

return {

		zip: function(callback){

			var zip = $('#zipSearch').val();
			console.log(zip);

			var isValidUSZip = function(zipCode) {
   			return /^\d{5}(-\d{4})?$/.test(zipCode);
			};

			//check if it's a valid zip code and call an Ajax call to the API
			if (isValidUSZip(zip)) {

				searchTerms = "zip=";
				searchTerms += zip;

				openWeather.callAPI(searchTerms, callback);

			} else {
				alert('Please use a valid US zip code for zip code queries');
			}

		}, //end Zip

		city: function(callback){

			var city = $('#citySearch').val();


			searchTerms = "q=";
			searchTerms += city;

			openWeather.callAPI(searchTerms, callback);


		} //end city
	}; //end return
}); //end define