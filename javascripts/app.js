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
    ["jquery", "hbs", "bootstrap", "openWeather", "searchBy", "simpleDisplay", "register", "logIn","userWeather"], function($, Handlebars, bootstrap, openWeather, searchBy, simpleDisplay, register, logIn, userWeather) {

    //Declare variable for firebase reference
    var firebaseRef = new Firebase("https://movie-viewer.firebaseio.com/");

    //Making parsed object global
    var currentWeatherObject;

    //hide the search form until log in is completed
    $("#searchForm").hide();

    //callback function that fixes a parse error and then calls the display function
    var foo = function(x){
        y = $.parseJSON(x);
        currentWeatherObject = y;
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
    //event handler for log In
    $(document).on('click','#signinButton',function(e){
        e.preventDefault();
        logIn.userLogIn();
    });

 //event handler for log In
    $(document).on('click','button.inlineBlock',function(e){
        e.preventDefault();

        // var index = $(this).children('span')[0].attr('value');
        var mySpan = $(this).children('span')[0];
        var index = $(mySpan).attr('value');
        // console.log(index);
        userWeather.save(currentWeatherObject, index);

        $(this).hide();
    });



    });