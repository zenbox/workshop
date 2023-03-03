jQuery.fn.closable = function () {
    // ...
    let closableImage = $("<img>")
        .attr(
            "src",
            "assets/js/libs/jquery-closable-1.0.0/assets/figures/close.svg"
        )
        .attr("id", "jquery-closable")
        .addClass("jquery-closable");

    // Pointer for the collection
    this.each(function () {
        // Imports css
        let link = $("<link>");
        link.attr("rel", "stylesheet");
        link.attr(
            "href",
            "assets/js/libs/jquery-closable-1.0.0/assets/css/jquery-closable.css"
        );
        $("head").append(link);

        // Pointer for an element within a collection
        $(this).on("mouseenter", function (event) {
            $(event.target) // = this
                .append(closableImage);

            $(closableImage).on("click", (event) => {
                $(event.target).parent().remove();
            });
        });
        $(this).on("mouseleave", function (event) {
            $("#jquery-closable").remove();

            $(closableImage).off("click");
        });
    });
};
