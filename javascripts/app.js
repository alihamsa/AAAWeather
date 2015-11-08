requirejs.config({
    baseUrl: './javascripts',
    paths: {
        'jquery': '../lib/bower_components/jquery/dist/jquery.min',
        'lodash': '../lib/bower_components/lodash/lodash.min',
        'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
        'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        'bootstrap': ['jquery']
    }
});

requirejs(
    ["jquery", "hbs", "bootstrap", "openWeather", "searchBy", "simpleDisplay", "register"], function($, Handlebars, bootstrap, openWeather, searchBy, simpleDisplay, register) {

    //Declare variable for firebase reference
    var firebaseRef = new Firebase("https://movie-viewer.firebaseio.com/");



    //callback function that fixes a parse error and then calls the display function
    var foo = function(x){
        y = $.parseJSON(x);
        console.log(y);
        simpleDisplay.simpleDisplay(y);
    };

    //use input to to call searchBy
    $(document).on('click','#search',function(e){
        e.preventDefault();
        zipInput = $('#zipSearch').val();
        cityInput = $('#citySearch').val();

        if (zipInput.length > 0){
            searchBy.zip(foo);
        } else if (cityInput.length > 0) {
            //take foo as an argument, which will fix parse errors and call the populate function
            searchBy.city(foo);
        } else {
            alert('Please input either Zip Code or City Name');
        }

    });
    //clears search form on reset
    $(document).on('click','#reset',function(e){
        e.preventDefault();
        $('#zipSearch').val("");
        $('#citySearch').val("");

    });

    //event handler for register
    $(document).on('click','#confirmsignup',function(e){
        e.preventDefault();
        register.newUser();
    });



    });