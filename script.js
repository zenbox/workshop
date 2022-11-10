;(function () {
    ;("use strict")
    // - - - - - - - - - -
    window.addEventListener("keyup", (event) => {
        onkeyup(event)
    })

    function onkeyup(event) {
        event.preventDefault()
        // console.log(document.activeElement)

        console.log(event.keyCode)
        // console.log(event.target.closest("form   "))

        switch (event.keyCode) {
            case 9:
                console.log("TAB")
                break
            case 13:
                console.log("ENTER")
                break
            case 40:
                console.log("DOWN")
                break
            case 38:
                console.log("UP")
                break
            case 39:
                console.log("RIGHT")
                break
            case 37:
                console.log("LEFT")
                break
        }
    }

    // - - - - - - - - - -
    // Flying Focus
    // - - - - - - - - - -
    var DURATION = 150

    var ringElem = null
    var movingId = 0
    var prevFocused = null
    var keyDownTime = 0

    var win = window
    var doc = document
    var docElem = doc.documentElement
    var body = doc.body

    docElem.addEventListener(
        "keydown",
        function (event) {
            var code = event.which
            // Show animation only upon Tab or Arrow keys press.
            if (code === 9 || (code > 36 && code < 41)) {
                keyDownTime = Date.now()
            }
        },
        false
    )

    docElem.addEventListener(
        "focus",
        function (event) {
            var target = event.target
            if (target.id === "flying-focus") {
                return
            }

            var isFirstFocus = false
            if (!ringElem) {
                isFirstFocus = true
                initialize()
            }

            var offset = offsetOf(target)
            ringElem.style.left = offset.left + "px"
            ringElem.style.top = offset.top + "px"
            ringElem.style.width = target.offsetWidth + "px"
            ringElem.style.height = target.offsetHeight + "px"

            if (isFirstFocus || !isJustPressed()) {
                return
            }

            onEnd()
            target.classList.add("flying-focus_target")
            ringElem.classList.add("flying-focus_visible")
            prevFocused = target
            movingId = setTimeout(onEnd, DURATION)
        },
        true
    )

    docElem.addEventListener(
        "blur",
        function () {
            onEnd()
        },
        true
    )

    function initialize() {
        ringElem = doc.createElement("flying-focus") // use uniq element name to decrease the chances of a conflict with website styles
        ringElem.id = "flying-focus"
        ringElem.style.transitionDuration =
            ringElem.style.WebkitTransitionDuration = DURATION / 1000 + "s"
        body.appendChild(ringElem)
    }

    function onEnd() {
        if (!movingId) {
            return
        }
        clearTimeout(movingId)
        movingId = 0
        ringElem.classList.remove("flying-focus_visible")
        prevFocused.classList.remove("flying-focus_target")
        prevFocused = null
    }

    function isJustPressed() {
        return Date.now() - keyDownTime < 42
    }

    function offsetOf(elem) {
        var rect = elem.getBoundingClientRect()
        var clientLeft = docElem.clientLeft || body.clientLeft
        var clientTop = docElem.clientTop || body.clientTop
        var scrollLeft =
            win.pageXOffset || docElem.scrollLeft || body.scrollLeft
        var scrollTop = win.pageYOffset || docElem.scrollTop || body.scrollTop
        var left = rect.left + scrollLeft - clientLeft
        var top = rect.top + scrollTop - clientTop
        return {
            top: top || 0,
            left: left || 0,
        }
    }

    var style = doc.createElement("style")
    style.textContent =
        "#flying-focus {\
	position: absolute;\
	margin: 0;\
	background: transparent;\
	-webkit-transition-property: left, top, width, height;\
	transition-property: left, top, width, height;\
	-webkit-transition-timing-function: cubic-bezier(0,1,0,1);\
	transition-timing-function: cubic-bezier(0,1,0,1);\
	visibility: hidden;\
	pointer-events: none;\
	box-shadow: 0 0 2px 3px #78aeda, 0 0 2px #78aeda inset; border-radius: 2px;\
}\
#flying-focus.flying-focus_visible {\
	visibility: visible;\
	z-index: 9999;\
}\
.flying-focus_target {\
	outline: none !important; /* Doesn't work in Firefox :( */\
}\
/* http://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links/199319 */\
.flying-focus_target::-moz-focus-inner {\
	border: 0 !important;\
}\
/* Replace it with @supports rule when browsers catch up */\
@media screen and (-webkit-min-device-pixel-ratio: 0) {\
	#flying-focus {\
		box-shadow: none;\
        outline: 2px dashed hsla(0, 100%, 50%, 0.85);\
		outline-offset: -3px;\
	}\
}\
"
    body.appendChild(style)
    // - - - - - - - - - -

    /*
     *   This content is licensed according to the W3C Software License at
     *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
     *
     *   Supplemental JS for the disclosure menu keyboard behavior
     */
    ;("use strict")

    class DisclosureNav {
        constructor(domNode) {
            this.rootNode = domNode
            this.controlledNodes = []
            this.openIndex = null
            this.useArrowKeys = true
            this.topLevelNodes = [
                ...this.rootNode.querySelectorAll(
                    ".main-link, button[aria-expanded][aria-controls]"
                ),
            ]

            this.topLevelNodes.forEach((node) => {
                // handle button + menu
                if (
                    node.tagName.toLowerCase() === "button" &&
                    node.hasAttribute("aria-controls")
                ) {
                    const menu = node.parentNode.querySelector("ul")
                    if (menu) {
                        // save ref controlled menu
                        this.controlledNodes.push(menu)

                        // collapse menus
                        node.setAttribute("aria-expanded", "false")
                        this.toggleMenu(menu, false)

                        // attach event listeners
                        menu.addEventListener(
                            "keydown",
                            this.onMenuKeyDown.bind(this)
                        )
                        node.addEventListener(
                            "click",
                            this.onButtonClick.bind(this)
                        )
                        node.addEventListener(
                            "keydown",
                            this.onButtonKeyDown.bind(this)
                        )
                    }
                }
                // handle links
                else {
                    this.controlledNodes.push(null)
                    node.addEventListener(
                        "keydown",
                        this.onLinkKeyDown.bind(this)
                    )
                }
            })

            this.rootNode.addEventListener("focusout", this.onBlur.bind(this))
        }

        controlFocusByKey(keyboardEvent, nodeList, currentIndex) {
            switch (keyboardEvent.key) {
                case "ArrowUp":
                case "ArrowLeft":
                    keyboardEvent.preventDefault()
                    if (currentIndex > -1) {
                        var prevIndex = Math.max(0, currentIndex - 1)
                        nodeList[prevIndex].focus()
                    }
                    break
                case "ArrowDown":
                case "ArrowRight":
                    keyboardEvent.preventDefault()
                    if (currentIndex > -1) {
                        var nextIndex = Math.min(
                            nodeList.length - 1,
                            currentIndex + 1
                        )
                        nodeList[nextIndex].focus()
                    }
                    break
                case "Home":
                    keyboardEvent.preventDefault()
                    nodeList[0].focus()
                    break
                case "End":
                    keyboardEvent.preventDefault()
                    nodeList[nodeList.length - 1].focus()
                    break
            }
        }

        // public function to close open menu
        close() {
            this.toggleExpand(this.openIndex, false)
        }

        onBlur(event) {
            var menuContainsFocus = this.rootNode.contains(event.relatedTarget)
            if (!menuContainsFocus && this.openIndex !== null) {
                this.toggleExpand(this.openIndex, false)
            }
        }

        onButtonClick(event) {
            var button = event.target
            var buttonIndex = this.topLevelNodes.indexOf(button)
            var buttonExpanded = button.getAttribute("aria-expanded") === "true"
            this.toggleExpand(buttonIndex, !buttonExpanded)
        }

        onButtonKeyDown(event) {
            var targetButtonIndex = this.topLevelNodes.indexOf(
                document.activeElement
            )

            // close on escape
            if (event.key === "Escape") {
                this.toggleExpand(this.openIndex, false)
            }

            // move focus into the open menu if the current menu is open
            else if (
                this.useArrowKeys &&
                this.openIndex === targetButtonIndex &&
                event.key === "ArrowDown"
            ) {
                event.preventDefault()
                this.controlledNodes[this.openIndex].querySelector("a").focus()
            }

            // handle arrow key navigation between top-level buttons, if set
            else if (this.useArrowKeys) {
                this.controlFocusByKey(
                    event,
                    this.topLevelNodes,
                    targetButtonIndex
                )
            }
        }

        onLinkKeyDown(event) {
            var targetLinkIndex = this.topLevelNodes.indexOf(
                document.activeElement
            )

            // handle arrow key navigation between top-level buttons, if set
            if (this.useArrowKeys) {
                this.controlFocusByKey(
                    event,
                    this.topLevelNodes,
                    targetLinkIndex
                )
            }
        }

        onMenuKeyDown(event) {
            if (this.openIndex === null) {
                return
            }

            var menuLinks = Array.prototype.slice.call(
                this.controlledNodes[this.openIndex].querySelectorAll("a")
            )
            var currentIndex = menuLinks.indexOf(document.activeElement)

            // close on escape
            if (event.key === "Escape") {
                this.topLevelNodes[this.openIndex].focus()
                this.toggleExpand(this.openIndex, false)
            }

            // handle arrow key navigation within menu links, if set
            else if (this.useArrowKeys) {
                this.controlFocusByKey(event, menuLinks, currentIndex)
            }
        }

        toggleExpand(index, expanded) {
            // close open menu, if applicable
            if (this.openIndex !== index) {
                this.toggleExpand(this.openIndex, false)
            }

            // handle menu at called index
            if (this.topLevelNodes[index]) {
                this.openIndex = expanded ? index : null
                this.topLevelNodes[index].setAttribute(
                    "aria-expanded",
                    expanded
                )
                this.toggleMenu(this.controlledNodes[index], expanded)
            }
        }

        toggleMenu(domNode, show) {
            if (domNode) {
                domNode.style.display = show ? "block" : "none"
            }
        }

        updateKeyControls(useArrowKeys) {
            this.useArrowKeys = useArrowKeys
        }
    }

    /* Initialize Disclosure Menus */

    window.addEventListener(
        "load",
        function () {
            var menus = document.querySelectorAll(".disclosure-nav")
            var disclosureMenus = []

            for (var i = 0; i < menus.length; i++) {
                disclosureMenus[i] = new DisclosureNav(menus[i])
            }

            // listen to arrow key checkbox
            var arrowKeySwitch = document.getElementById(
                "arrow-behavior-switch"
            )
            if (arrowKeySwitch) {
                arrowKeySwitch.addEventListener("change", function () {
                    var checked = arrowKeySwitch.checked
                    for (var i = 0; i < disclosureMenus.length; i++) {
                        disclosureMenus[i].updateKeyControls(checked)
                    }
                })
            }

            // fake link behavior
            disclosureMenus.forEach((disclosureNav, i) => {
                var links = menus[i].querySelectorAll(
                    '[href="#mythical-page-content"]'
                )
                var examplePageHeading = document.getElementById(
                    "mythical-page-heading"
                )
                for (var k = 0; k < links.length; k++) {
                    // The codepen export script updates the internal link href with a full URL
                    // we're just manually fixing that behavior here
                    links[k].href = "#mythical-page-content"

                    links[k].addEventListener("click", (event) => {
                        // change the heading text to fake a page change
                        var pageTitle = event.target.innerText
                        examplePageHeading.innerText = pageTitle

                        // handle aria-current
                        for (var n = 0; n < links.length; n++) {
                            links[n].removeAttribute("aria-current")
                        }
                        event.target.setAttribute("aria-current", "page")
                    })
                }
            })
        },
        false
    )

    // - - - - - - - - - -
})()
