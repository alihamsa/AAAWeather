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
    ["jquery", "hbs", "bootstrap", "simpleDisplay", "openWeather"],
    function($, Handlebars, bootstrap, simpleDisplay, openWeather) {

    var y;

    var foo = function(x){
        y = $.parseJSON(x);
        console.log(y);
        simpleDisplay.simpleDisplay(y);
    };

    openWeather.callAPI('37212', foo);

    });