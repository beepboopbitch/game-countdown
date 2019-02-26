
import './sass/styles.scss';





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


var elapsed_seconds = 864000;
setInterval(function() {
  elapsed_seconds = elapsed_seconds - 1;
  $('#box_header').text(get_elapsed_time_string(elapsed_seconds));
}, 1000);
