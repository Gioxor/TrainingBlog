class ArticleController {

    constructor() {
        this.articles = [];
        this.restController = new RestController();
        //UI
        this.commentContainer;
        this.postsContainer;
        this.postContainer;
        this.modal;
        this.openModalBtn;
        this.modalTitle;
        this.modalText;
        this.modalPublicCheck;
        this.modalFeaturedCheck;
        this.insertButton
        this.likeBotton;
        this.tag;

    }

    init() {
        $(document).ready(function () {
            this.commentContainer = $(".comments-container");
            this.postContainer = $("#postContainer");
            this.modalTitle = $("#articleTitleInput");
            this.modalText = $("#textArea");
            this.modalPublicCheck = $("#pubblicSwitch1");
            this.modalFeaturedCheck = $("#switch2");
            this.likeButton = $("#btnlike");
            this.insertButton = $("#insertButton");
            this.tag = ["tag1", "tag2"];


            //$("#liked").hide();
            // $("#comment").click(function () {

            //     var nickText = $("#formGroupExampleInput").val();
            //     var commentText = $("#formGroupExampleInput2").val();

            //     var comment = '<li class="list-group-item">' + '<a href="#" class="badge badge-secondary">' + nickText + '</a>' + '</br>' + commentText + '</li>';
            //     commentContainer.append(comment);
            //     $("input").val("");
            // });

            //Article insert
            $("#insertButton").click(function () {

                let Ar = new Article(this.modalTitle.val(),
                    this.modalText.val(),
                    this.modalPublicCheck.is(':checked'),
                    this.modalFeaturedCheck.is(':checked'),
                    this.tag
                );
                //this.addUIPost(Ar);
                this.postArticles(Ar);
                this.closeModal();
            }.bind(this));

            for (let i in articles) {
                this.addUIPost(articles[i]);
            }
            this.getArticles();
            //this.deleteArticle();


        }.bind(this));

    }


    addUIPost(postArticle) {
        //aggiungere un articolo\
        var postContainer = $("#postContainer").clone();
        postContainer.css("display", "block");
        postContainer.attr("id", "");
        postContainer.addClass("class", "postContainer");

        var postHeader = postContainer.find(".card-header");
        var postBody = postContainer.find(".card-text");

        postHeader.html(postArticle.title);
        postBody.html(postArticle.body + "<br>Tag: " + postArticle.tag);
        $("#postsRow").append(postContainer);

    }

    showArticle(postArticle) {
        let uiTitle = `<h4>${postArticle.title}</h4>`;
        let uiBody = `<p class="article">${postArticle.body}<br>#${postArticle.tag}</p>`;
        //commentSection = $(".commentSection").html();
        sectionContainer.append(uiTitle, uiBody);
    }

    closeModal() {
        $("#myModal").modal("hide");
    }


    getArticles() {
        this.restController.get("https://texty-89895.firebaseio.com/posts.json", function (data, status, xhr) {
            let jsonPost = [];
            for (var i in data) {
                var post = data[i];
                if (post.public) {
                    if (post.featured) {
                        this.addUIPost(post);
                    } else {
                        jsonPost.push(post);
                    }
                }
            }
            for (let j in jsonPost) {
                this.addUIPost(jsonPost[j]);
            }
        }.bind(this))
    }


    postArticles(data) {
        // post(url, data, onSuccess, onError) {
        this.restController.post("https://texty-89895.firebaseio.com/posts.json", data, function () {

        }.bind(this))
    }

    deleteArticle() {
        this.restController.delete(`https://texty-89895.firebaseio.com/posts/` + `-MJ7lGD4Sr2e1IIYzQ7n` + `.json`, function () {

        }.bind(this))
    }

    putArticles(data) {
        this.restController.put("https://texty-89895.firebaseio.com/posts.json", data, function () {

        }.bind(this))
    }
}