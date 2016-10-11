// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require gmaps/google
//= require_tree .

function ShowProgressAnimation() {
  $('#loading-div-background').show();
}

function show_notification_system(msg) {
  $(document).ready(function() {
    $.meow({
      title: 'فصيلتي تخبرك',
      message: msg,
      // duration: 300000
    });
  });
}

function show_notification_blood(msg) {
  $(document).ready(function() {
    $.meow({
      title: 'حالات طارئه',
      message: 'فى حالات جديده بنفس فصيله دمك موجوده'
    });
  });
}

function prepare_to_initialize() {
  $(document).ready(function() {
   google.maps.event.addDomListener(window, 'load', initialize());
 });
}

function initialize() {

  var input = document.getElementsByClassName('search');

  var options = {
    componentRestrictions: {country: 'eg'}
  };

  var autocomplete = new google.maps.places.Autocomplete(input[0], options);

  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    var place = autocomplete.getPlace();
    document.getElementsByClassName('location_name')[0].value = document.getElementsByClassName('search')[0].value;
    document.getElementsByClassName('location_lat')[0].value = place.geometry.location.lat();
    document.getElementsByClassName('location_lng')[0].value = place.geometry.location.lng();
  });
}

$(document).ready(function() {
  $('.dtpicker').datepicker({changeYear: true, yearRange : '-100:+0',dateFormat: 'yy-mm-dd'});
});