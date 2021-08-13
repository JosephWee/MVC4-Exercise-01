class App1 {

    constructor(rootElementId) {
        $(rootElementId).html("Calling Teleport API...");

        $.ajax({
            url: "https://api.teleport.org/api/cities",
            method: "get",
            async: false,
            beforeSend: function () {
                if (console)
                    console.log("Calling Teleport API...");
            }
        })
        .done(
            function (data) {
                if (console) {
                    console.log("Teleport API call success.");
                    if (data) {
                        console.log(data);
                    }
                }
            })
        .fail(
            function (msg) {
                if (console) {
                    console.log("Teleport API call failed.");
                    if (msg) {
                        console.log(msg);
                    }
                }
            }
        );

        $(rootElementId).html("Getting unsplash resource...");

        $.ajax({
            url: "https://unsplash.com/photos/kelqkytHsPM",
            method: "get",
            async: false,
            beforeSend: function () {
                if (console)
                    console.log("Getting unsplash resource...");
            }
        })
        .done(
            function (data) {
                if (console) {
                    console.log("unsplash resource get success.");
                    if (data) {
                        console.log(data);
                    }
                }
            })
        .fail(
            function (msg) {
                if (console) {
                    console.log("unsplash resource get failed.");
                    if (msg) {
                        console.log(msg);
                    }
                }
            }
        );

        $(rootElementId).html("Completed");
    }
}