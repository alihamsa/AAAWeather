define(function(require) {


  var ref = new Firebase("https://aaaweather.firebaseio.com/");


  return {

      save: function(currentWeather, index) {



        var weatherObject = {};

        weatherObject.name = currentWeather.city.name;
        weatherObject.data = currentWeather.list[index];

        authData = ref.getAuth();
        UID = authData.uid;

        ref.child(UID).push(weatherObject);


      }, //End save

      populate: function(){

        console.log("populate was called");

        authData = ref.getAuth();
        UID = authData.uid;

        ref.child(UID).on("value", function(snapshot) {
          var savedData = snapshot.val();
          console.log("saved Data", savedData);
          require(['hbs!../templates/savedWeather'], function(template) {
          $("#saved").html(template(savedData));
          //Use dt value to set dates
          $("span.timeStamp").each(function(index, element){

            //read time stamp set as span value
            var timeStamp = new Date($(element).attr('value') * 1000);

            var weekday=new Array(7);
              weekday[0]="Monday";
              weekday[1]="Tuesday";
              weekday[2]="Wednesday";
              weekday[3]="Thursday";
              weekday[4]="Friday";
              weekday[5]="Saturday";
              weekday[6]="Sunday";

              //build up a string with a readable date
            var formattedDate = weekday[timeStamp.getDay()] + " " + timeStamp.getMonth() + "/" + timeStamp.getDate();

            //insert date into blank span
            $(element).text(formattedDate);
          });
        });

        });

      } //end populate

    };//end return

}); //end define