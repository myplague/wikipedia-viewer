// $("#search-wiki").click(function() {
function getWiki() {

    $.getJSON({
        url: "http://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts%7Cinfo&list=&titles=&generator=search&exlimit=10&exintro=1&inprop=url&gsrsearch=" + $("#search-box").val() + "&callback=?",
        success: function(res, txt, xhr) {
            $("#results").html("");
            console.log(res.query);
            var respuestas = res.query.pages
            for (var pagina in respuestas) {
                console.log(respuestas[pagina]);
                $("#results").append(`<li>
             <h1><a href="${respuestas[pagina].fullurl}" target="_blank">
                  ${respuestas[pagina].title}
                  </a>
             </h1>
             ${respuestas[pagina].extract}
             </li>`);
            }
        }
    });

}
$("#search-box").on("keydown", function(event) {
        if (event.keyCode === 13) {
            getWiki();
        }
    })
    // });
