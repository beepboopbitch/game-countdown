
import './sass/styles.scss';



//buiness logic

function get_elapsed_time_string(total_seconds) {
  function pretty_time_string(num) {
    return ( num < 10 ? "0" : "" ) + num;
  }

  var days = Math.floor(total_seconds / (3600*24));
  total_seconds = total_seconds % (3600*24);

  var hours = Math.floor(total_seconds / 3600);
  total_seconds = total_seconds % 3600;

  var minutes = Math.floor(total_seconds / 60);
  total_seconds = total_seconds % 60;

  var seconds = Math.floor(total_seconds);

  // Pad the minutes and seconds with leading zeros, if required
  days = pretty_time_string(days);
  hours = pretty_time_string(hours);
  minutes = pretty_time_string(minutes);
  seconds = pretty_time_string(seconds);

  // Compose the string for display
  var currentTimeString = days + ":" + hours + ":" + minutes + ":" + seconds;

  return currentTimeString;
}


//ui logic

var elapsed_seconds = 864000;
setInterval(function() {
  elapsed_seconds = elapsed_seconds - 1;
  $('#box_header').text(get_elapsed_time_string(elapsed_seconds));
}, 1000);

$(document).ready(function() {
  event.preventDefault();
  $(".blog-content-1").hide();
  $(".hide-1").hide();
  $(".blog-post-main-1").click(function(){
    $(".blog-content-1").show();
    $(".hide-1").show();
  });
  $(".hide-1").click(function(){
    $(".blog-content-1").hide();
    $(".hide-1").hide();
  }); //end blog 1
  $(".blog-content-2").hide();
  $(".hide-2").hide();
  $(".blog-post-main-2").click(function(){
    $(".blog-content-2").show();
    $(".hide-2").show();
  });
  $(".hide-2").click(function(){
    $(".blog-content-2").hide();
    $(".hide-2").hide();
  }); //end blog 2
  $(".blog-content-3").hide();
  $(".hide-3").hide();
  $(".blog-post-main-3").click(function(){
    $(".blog-content-3").show();
    $(".hide-3").show();
  });
  $(".hide-3").click(function(){
    $(".blog-content-3").hide();
    $(".hide-3").hide();
  }); //end blog 3
});
