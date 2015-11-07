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
    ["jquery", "hbs", "bootstrap", "openWeather"], function($, Handlebars, bootstrap, openWeather) {

    //Declare variable for firebase reference
    var firebaseRef = new Firebase("https://movie-viewer.firebaseio.com/");

    var foo = function(x){
        y = $.parseJSON(x);
        console.log(y);
    };

    openWeather.callAPI('37212', foo);
>>>>>>> daf03ec57ceb3a7d34d3f215a440846b2c5616d2

    });