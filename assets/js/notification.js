!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    // - - - - -
    let
        notificationElement, notificationText, notificationState,
        config = {
            defaultTagName: 'div',
            defaultState: 'default',
            defaultContext: 'body',
            defaultContent: 'hello World'
        };

    // - - - - -
    // FUNCTIONS
    // - - - - -

    function _createNotificationElement(tagName) {
        let _tagName = tagName || config.defaultTagName;

        notificationElement = document.createElement(_tagName);
        return true;
    }

    function _createNotificationText(content) {
        let _content = content || config.defaultContent;

        notificationText = document.createTextNode(_content);
        notificationElement.appendChild(notificationText);
        return true;
    }

    function _appendNotificationElement(context) {
        let _context = context || config.defaultContext;
        _context = document.querySelector(_context);
        _context.appendChild(notificationElement);

        return true;
    }

    function _setNotificationState(state) {
        let _state = state || config.defaultState;

        notificationElement.classList.add(_state);
        return true;
    }

    function _show(content) {
        var _content = content || 0;
        if (typeof (_content) !== 'string') return false;

        _createNotificationElement();
        _createNotificationText();
        _appendNotificationElement();
        _setNotificationState();
        // _autoRemoveNotification();

        return true;
    };

    function _main() {
        // publish module and a function
        window.notification = {} || window.notification;
        window.notification.show = _show;
    }

    // - - - - -
    // CONTROL
    // - - - - -
    _main();
    // - - - - - - - - - -
}())