/**
 * Some DOM manipulation ...
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/04/16
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
!(function () {
    'use strict';
    // - - - - - - - - - -

    // create html objects
    let
        context = document.querySelector('output'),
        ul = document.createElement('ul'), // <ul></ul>
        li = document.createElement('li'), // <li></li>
        text = document.createTextNode('Lorem ipsum'); // Lorem ipsum

    console.log(ul, li, text);

    ul.setAttribute('class', 'example value2');

    ul.classList.add('bold');
    ul.classList.add('red');
    ul.classList.add('hey');
    ul.classList.remove('hey');
    ul.classList.toggle('hey');
    ul.classList.toggle('hey');


    li.appendChild(text);
    ul.appendChild(li);

    setTimeout(
        function () {
            document.body.appendChild(ul);
        }, 8000);

    document.body.insertBefore(ul, context);

    document.body.removeChild(ul);

    // - - - - - - - - - -
}())