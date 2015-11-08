define(["jquery", "hbs", "userWeather"],
  function($, handlebars, userWeather) {

    return {

      simpleDisplay : function(parsedObject) {

        require(['hbs!../templates/simpleDisplayTemplate'], function(mainTemplate) {
          $("#output").html(mainTemplate(parsedObject));
          userWeather.populate();
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


      }

    };

});