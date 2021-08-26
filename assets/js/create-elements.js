/** Creating Elements
  *
  * @package Webapplication
  * @module 
  * @author Michael <michael.reichart@gfu.net>
  * @version v1.0.0
  * @since 2021-08-26
  * @see i.e. inspired by ... {link to}
  * @license MIT {https://opensource.org/licenses/MIT}
  * @copyright (c) 2021 Michael Reichart, Cologne
  */

var element = document.createElement('h2');
var textContent = document.createTextNode('lorem ipsum dolor sit amet consectetur');

var context = document.querySelector('body')

element.setAttribute('id', 'my-element-id');
element.removeAttribute('id', 'my-element-id');

element.classList.add('my-first-class');
element.classList.remove('my-first-class');
element.classList.toggle('my-first-class');

element.classList.add('my-second-class');

element.setAttribute('data-t-c', 'header');

element.appendChild(textContent);
context.appendChild(element);

document.querySelector('h1').innerText = 'my new text';
document.querySelector('h1').innerHTML = 'my <span style="color:red">new</span> text';
