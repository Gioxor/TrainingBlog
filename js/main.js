$(document).ready(function () {

    $("#liked").hide();
    $("#comment").click(function () {

        var nickText = $("#formGroupExampleInput").val();
        var commentText = $("#formGroupExampleInput2").val();
        var commentContainer = $(".comments-container");
        var comment = '<li class="list-group-item">' + '<a href="#" class="badge badge-secondary">' + nickText + '</a>' + '</br>' + commentText + '</li>';
        commentContainer.append(comment);
        $("input").val("");
    });

    $("#btnlike").click(function () {
        console.log("btn schiacciato");
        $("#btnlike").html('Non mi piace più');
        $("#like").hide();
        $("#liked").show();
    });

    $("#list").click(addItem);

    //Article insert
    $("#insertButton").click(addPost);

    for (var i = 0; i < articles.length; i++) {
        showArticle(articles[i]);
    };


});