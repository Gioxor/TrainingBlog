//$(document).ready(function () {
//    alert($(".article").length);
//});
//console.log($("#comment"));

$(document).ready(function () {
    $("#comment").click(function () {
        // action goes here!!
        //console.log("bottoneschiacciato")
        var nickText = $("#formGroupExampleInput").val();
        var commentText = $("#formGroupExampleInput2").val();
        var comment = "<p>" + nickText + " scrive: </br> " + commentText + "</p>";
        //$(".comment").html(nickText + " scrive: </br> " + commentText);
        $(".col-9").append(comment);
        $("input").val("");
    });

})