
// var logID = 'log',
//   log = $('<div id="'+logID+'"></div>');
// $('body').append(log);
//   $('[type*="radio"]').change(function () {
//     var me = $(this);
//     log.html(me.attr('value'));
//   });

// store votes using AJAX
//  $(function(){
//     $('#star-rating').rating(function(vote, event){
//         // we have vote and event variables now, lets send vote to server.
//         $.ajax({
//             url: "/get_votes.php",
//             type: "GET",
//             data: {rate: vote},
//         });
//     });
// });
var logID = 'log',
log = $('<div id="'+logID+'"></div>');
$('body').append(log);
$('[type*="radio"]').change(function () {
  var me = $(this);
  log.html(me.attr('value'));
});

// $("#myModal2").modal("show").on("shown", function () {
//     window.setTimeout(function () {
//         $("#myModal2").modal("hide");
//     }, 5000);
// });

function updateScroll(){
    var element = document.getElementById("action");
    element.scrollTop = element.scrollHeight;
}

setInterval("updateScroll",1000);

var scrolled = false;
function updateScroll(){
    if(!scrolled){
        var element = document.getElementById("action");
        element.scrollTop = element.scrollHeight;
    }
}

$("#action").on('scroll', function(){
    scrolled=true;
});
