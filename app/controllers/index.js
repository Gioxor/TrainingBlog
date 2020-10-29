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


            //Article insert
            $("#insertButton").click(function () {

                let Ar = new Article(this.modalTitle.val(),
                    this.modalText.val(),
                    this.modalPublicCheck.is(':checked'),
                    this.modalFeaturedCheck.is(':checked'),
                    this.tag
                );
                this.addUIPost(Ar);
                this.postArticles(Ar);
                this.closeModal();
            }.bind(this));

            for (let i in articles) {
                this.addUIPost(articles[i]);
            }
            this.getArticles();
            //if (alert) this.showAlert();
            //this.deleteArticle();

        }.bind(this));

    }

    showAlert() {
        var alertContainer = $("#alertContainer")
        alertContainer.css("display", "block");
    }

    showAlertError() {
        var alertContainerError = $("#alertContainerError")
        alertContainerError.css("display", "block");
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

    closeModal() {
        $("#myModal").modal("hide");
    }

    getArticles() {
        this.restController.get("http://localhost:3000/articles", function (data, status, xhr) {
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
        }.bind(this), function () {
            this.showAlertError();
        }.bind(this));
    }

    postArticles(data) {
        this.restController.post("http://localhost:3000/articles", data, function () {
            this.showAlert();

        }.bind(this), function () {
            this.showAlertError();
        }.bind(this));
    }

    deleteArticle(articleId) {
        this.restController.delete(`http://localhost:3000/articles/` + articleId + `.json`, function () {

        }.bind(this))
    }

    putArticles(data) {
        this.restController.put("http://localhost:3000/articles", data, function () {

        }.bind(this))
    }
}