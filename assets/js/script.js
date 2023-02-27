/** A First jQuery Program Example
 *
 * @package Webapplication
 * @module In the beginning ...
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2023-02-27
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2023 Michael Reichart, Cologne
 */

// Javascript version
window.onload = function () {
    console.log("window");
};

// jQuery version
$(window.document).ready(function () {
    "use strict";
    // - - - - - - - - - -
    console.log("document");

    // Selectors
    let paragraphs = $("p.teaser");
    console.log(paragraphs);

    // Manipulation
    $("p.teaser").addClass("blue");

    // Javascript
    paragraphs = document.querySelectorAll("p.teaser");
    paragraphs.forEach((paragraph) => {
        paragraph.classList.add("brown");
    });

    // AJAX (data transfer) (since version 3 as promise!)
    $.ajax({ url: "assets/data/data.json" }).done(function (response) {
        console.log(response);
    });

    // Javascript 1 - AJAX (XmlHttpRequest)
    let xhr = new XMLHttpRequest(),
        method = "GET",
        url = "assets/data/data.json",
        data = undefined;

    xhr.addEventListener("readystatechange", function (readyState) {
        switch (readyState) {
            case 0:
                console.log("idle");
                break;
            case 1:
                console.log("opened");
                break;
            case 2:
                console.log("sent");
                break;
            case 3:
                console.log("data ...");
                break;
            case 4:
                console.log("data end");
                break;
        }
    });
    xhr.open(method, url);
    xhr.send(data);

    // Javascript 2 - fetch() as a promise
    fetch("assets/data/data.json")
        .then((response) => {
            console.log("yes!")
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });

    // - - - - - - - - - -
});
