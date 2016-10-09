
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
// $(document).ready(function () {
// $("#myModal1").modal("show").on("shown", function () {
//     window.setTimeout(function () {
//         $("#myModal").modal("hide");
//     }, 2000);
// });
// })
