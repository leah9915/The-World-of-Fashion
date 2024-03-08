var don = [];
var userInput;


$(".add").click(function() {
    userInput = $(".picture-url").val();
    don.push(userInput);
    $(".gallery").append("<img src='" + userInput + "'>");
    $(".picture-url").val("");
});


$(".hello").click(function() {
    $("img:last").remove();
});
