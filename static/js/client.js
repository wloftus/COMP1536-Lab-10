$(document).ready(function() {
    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#getHTML').click(function(e) {
        $("#htmlList").show();
        $("#defaultText").hide();
        $("#jsonList").hide();
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                var div = $("#htmlList");
                div.html("<h2>OUR TOP 10 EXERCISES</h2>" + data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });


    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
    $('#getJSON').click(function(e) {
        $("#htmlList").hide();
        $("#defaultText").hide();
        $("#jsonList").show();
        // don't allow the anchor to visit the link
        e.preventDefault();
        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#jsonList");
                let htmlStr = "<h2>OUR TOP 10 SONGS FOR WORKING OUT</h2><ol id='items'>";
                for(i in data) {
                    htmlStr += "<li>" + i + ": " + data[i] + "</li>";
                }
                htmlStr += "</ol>";
                div.html(htmlStr);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });
});
