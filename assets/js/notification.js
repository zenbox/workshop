!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    // - - - - -
    let
        notificationElement,
        config = {
            defaulttagName: 'div',
            defaultState: 'default',
            defaultContext: 'body'
        };

    // - - - - -
    // FUNCTIONS
    // - - - - -
    function _show(content) {
        var _content = content || 0;
        if (typeof (_content) !== 'string') return false;
        return _content;
    };

    function _createNotificationElement(tagName) {
        let _tagName = tagName || config.defaultTagName;

        notificationElement = document.createElement(_tagName);
        return true;
    }

    function _appendNotificationElement(context) {
        let _context = context || config.default.context;

        _context.appendChild(notificationElement);
        return true;
    }

    function _setNotificationState(state) {
        let _state = state || config.defaultState;

        notificationElement.classlist.addClass(_state);
        return true;
    }

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