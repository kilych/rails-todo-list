// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs

//= require jquery3
//= require jquery_ujs
//= require select2

// ./vendor: https://github.com/fronteed/icheck/blob/1.x/icheck.min.js
//= require_tree .

$(document).ready(function() {
  $('#show_btn').click(function () {
    // $("#form_container").show();
    $("#form_container_outer").css('display', 'flex');
  });

  $('#hide_link').click(function(event) {
    event.preventDefault();
    $("#form_container_outer").hide();
  });

  $('#submit_link').click(function(event) {
    event.preventDefault();
    $("#form").submit();
  });

  $('input[type="checkbox"]').iCheck({
    checkboxClass: 'icheckbox_square-blue',
  });

  $('.icheckbox_square-blue.checked')
    .closest('label').children('form').children('button').children('p')
    .css('text-decoration', 'line-through');

  $('input[type="checkbox"]').on('ifChecked', function () {
    $(this)
      .closest('label').children('form').children('button').children('p')
      .css('text-decoration', 'line-through');
  });

  $('input[type="checkbox"]').on('ifUnchecked', function () {
    $(this)
      .closest('label').children('form').children('button').children('p')
      .css('text-decoration', 'none');
  });

  $('input[type="checkbox"]').on('ifToggled', function () {
    $(this).closest('form').submit();
  });

  // alert($('li > label > form > button').length);
  // $('li > label > form > button').off();
  // $('li > label > form > button').attr('enabled', 'enabled');
  // $('li > label > form > button').click(function(event) {
  //   event.preventDefault();
  //   $(this).closest('form').submit();
  // });

  $('select').select2({
    minimumResultsForSearch: -1,
    width: '100%',
  });
});
