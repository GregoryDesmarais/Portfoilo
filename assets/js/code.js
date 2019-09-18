function showSection(info) {
    $(".section").addClass("d-none");
    $(`.${info.section}`).removeClass("d-none");
    $("title").text(`Gregory Desmarais - ${info.title}`)
}

function addProjects() {
    var projBody = $(".projBody > .container");
    var entries = Object.keys(projects);
    var loop = 0;
    for (var i = 0; i < entries.length; i++) {
        if (loop == 0) {
            var newRow = $("<div>");
            newRow.addClass("row");
            projBody.append(newRow);
        }
        var newCol = $("<div>");
        newCol.addClass("col-md-6 my-4");
        projBody.find(".row:last").append(newCol);

        var newCard = $("<div>");
        newCard.addClass("card h-100  text-center");

        var newCardHeader = $("<div>");
        newCardHeader.addClass("card-header");
        newCardHeader.append(`<h5>${projects[entries[i]].name}`);

        var newCardBody = $("<div>");
        newCardBody.addClass("card-body");
        newCardBody.append(`
        <figure>
            <img class="img-fluid projPic" src="${projects[entries[i]].img}">
            <figcaption class="figure-caption">
            <p>
                ${projects[entries[i]].description}
            </p>
            </figcaption>
        </figure>
        <a href="${projects[entries[i]].codeURL}" class="btn btn-primary">View Code</a>
        <a href="${projects[entries[i]].liveURL}" class="btn btn-primary">View App</a>
        `);
        newCard.append(newCardHeader)
            .append(newCardBody)
            .appendTo(newCol);
        loop++;
        if (loop === 2) {
            loop = 0;
        }
    }
}

$(function() {

    addProjects();
    showSection({ section: "aboutMe", title: "About Me" });

    $(".navigate").click(function() {
        showSection({
            section: $(this).attr("data-section"),
            title: $(this).text()
        });
    });


})