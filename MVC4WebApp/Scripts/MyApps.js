class App1 {

    constructor(rootElementId) {
        $(rootElementId).html();

        $.get("https://api.teleport.org/api/cities/",
            function (data) {
                if (data) {
                    if (console)
                        console.log(data);
                }
            })
            .done(
                function (data) {
                    if (data) {
                        if (console)
                            console.log(data);
                    }
                })
            .fail(
                function (msg) {
                    if (msg) {
                        if (console)
                            console.log(msg);
                    }
                }
            );
    }
}

class App2 {

    constructor(rootElementId) {
        $(rootElementId).html();

        $.get("https://unsplash.com/photos/kelqkytHsPM",
            function (data) {
                if (data) {
                    if (console)
                        console.log(data);
                }
            })
            .done(
                function (data) {
                    if (data) {
                        if (console)
                            console.log(data);
                    }
                })
            .fail(
                function (msg) {
                    if (msg) {
                        if (console)
                            console.log(msg);
                    }
                }
            );
    }
}