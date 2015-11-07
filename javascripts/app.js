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
    ["jquery", "hbs", "bootstrap", "openWeather", "searchBy"], function($, Handlebars, bootstrap, openWeather, searchBy) {

    //Declare variable for firebase reference
    var firebaseRef = new Firebase("https://movie-viewer.firebaseio.com/");

    var foo = function(x){
        y = $.parseJSON(x);
        console.log(y);
    };

    openWeather.callAPI('37212', foo);

    $(document).on('click','#search',function(e){
        e.preventDefault();
        zipInput = $('#zipSearch').val();
        cityInput = $('#citySearch').val();

        if (zipInput.length > 0){
            searchBy.zip(foo);
        } else if (cityInput.length > 0) {
            searchBy.city(foo);
        } else {
            alert('Please input either Zip Code or City Name');
        }

    })

    $(document).on('click','#reset',function(e){
        e.preventDefault();
        $('#zipSearch').val("");
        $('#citySearch').val("");

    })


    });