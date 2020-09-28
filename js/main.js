//$(document).ready(function () {
//    alert($(".article").length);
//});
//console.log($("#comment"));

$(document).ready(function () {
    checkedContainer = $("#checked");
    uncheckedContainer = $("#unchecked");
    $("#liked").hide();
    $("#comment").click(function () {
        // action goes here!!
        //console.log("bottoneschiacciato")
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

    $("#list").click(function () {
        var listElement = $("#inputList").val();
        //console.dir(checkboxes);
        //aggiungi checkbox quando inserisci elemento
        var cb = `<input type="checkbox" class="list" ><label>${listElement}</label></br>`;
        uncheckedContainer.append(cb);

        $(".list").change(function () {
            checkedContainer.toggleClass("completed");
            console.log("we");
            var cbM = `<input type="checkbox" checked="checked">${listElement}</input></br>`;
            uncheckedContainer.empty();
            checkedContainer.append(cbM);

        });
        $("input").val("");

    });

    //var checkboxes = $('input[name="list"]');
    //console.dir(checkboxes);

});