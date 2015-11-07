define(["jquery", "hbs"],
  function($, handlebars) {

    return {

      simpleDisplay : function(parsedObject) {

        console.log("trying to display", parsedObject);

        require(['hbs!../templates/simpleDisplayTemplate'], function(weatherOneDay) {
          $("#output").html(weatherOneDay(parsedObject));
        });

      }

    };

});