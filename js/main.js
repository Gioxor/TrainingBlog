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

    // for (var i = 0; i < articles.length; i++) {
    //     showArticle(articles[i]);
    // };

    $.get({
        type: "GET",
        url: "https://api.npoint.io/24620ef625c768a4f3c4",
        dataType: 'json',
        async: true,
        success: (data, response) => {
            let risposta = response[0];
            let jsonPost = [];
            if (risposta) {
                for (var i in data) {
                    if (data[i].public) {
                        if (data[i].featured) {
                            showArticle(data[i]);
                        } else {
                            jsonPost.push(data[i]);
                        }
                    } else {
                        console.log("Non mostrare");
                    }
                }
                for (let j in jsonPost) {
                    showArticle(jsonPost[j]);
                }
            } else {
                console.log("ERROR");
            }
        }

    })

});