class RestController {

    constructor() {}

    get(url, onSuccess, onError) {
        $.get({
            url: url,
            success: onSuccess,
            dataType: 'json'
        });

    }

    post(url, data, onSuccess, onError) {
        $.post({
            type: "POST",
            url: url,
            data: JSON.stringify(data),
            dataType: 'json',
            success: onSuccess
        });


    }

    delete(url, data, onSuccess, onError) {
        $.delete({
            type: "DELETE",
            url: url,
            success: onSuccess,
            dataType: 'json'
        });
    }


    put(url, data, onSuccess, onError) {
        $.put({
            url: url,
            type: "put",
            success: onSuccess,
            dataType: 'json'
        });


    }
}


// get(url, onSuccess, onError) {
//     $.get({
//         type: "GET",
//         url: url,
//         //url: "https://api.npoint.io/24620ef625c768a4f3c4",
//         dataType: 'json',
//         async: true,
//         success: (data, response) => {
//             let risposta = response[0];
//             let jsonPost = [];
//             if (risposta) {
//                 for (var i in data) {
//                     if (data[i].public) {
//                         if (data[i].featured) {
//                             showArticle(data[i]);
//                         } else {
//                             jsonPost.push(data[i]);
//                         }
//                     }
//                 }
//                 for (let j in jsonPost) {
//                     showArticle(jsonPost[j]);
//                 }
//             } else {
//                 console.log("ERROR");
//             }
//         }
//     })
// }

// post(url, data, onSuccess, onError) {
//     $.post({
//         type: "POST",
//         url: "https://texty-89895.firebaseio.com/posts.json",
//         data: json,
//         dataType: 'json',
//         success: (response) => {
//             let risposta = response[0];
//             if (risposta) {
//                 console.log("success");
//             } else {
//                 console.log("rip");
//             }
//         }
//     });



// }