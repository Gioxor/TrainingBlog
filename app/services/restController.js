class RestController {

    constructor() {}

    get(url, onSuccess, onError) {
        $.get({
            url: url,
            success: onSuccess,
            dataType: 'json',
            error: onError
        })
    }


    post(url, data, onSuccess, onError) {
        $.post({
            type: "POST",
            url: url,
            data: JSON.stringify(data),
            dataType: 'json',
            success: onSuccess,
            contentType: "application/json",
            error: onError
        });
    }


    delete(url, data, onSuccess, onError) {
        $.delete({
            type: "DELETE",
            url: url,
            success: onSuccess,
            dataType: 'json',
            error: onError
        });
    }


    put(url, data, onSuccess, onError) {
        $.put({
            url: url,
            type: "put",
            success: onSuccess,
            dataType: 'json',
            error: onError
        });


    }
}