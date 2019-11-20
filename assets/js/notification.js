!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    // - - - - -
    let
        notificationContext, notificationId, notificationElement, notificationText, notificationState,
        config = {
            defaultTagName: 'div',
            defaultId: 'notification',
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
        notificationContext = document.querySelector(_context);
        notificationContext.appendChild(notificationElement);

        return true;
    }

    function _setNotificationState(state) {
        notificationState = state || config.defaultState;
        notificationElement.classList.add(notificationState);
        return true;
    }

    function _setNotificationId(id) {
        notificationId = id || config.defaultId;
        notificationElement.setAttribute('id', notificationId);
        return true;
    }

    function _autoRemoveNotification() {
        let _element = document.querySelector('#' + notificationId);
        //setTimeout(_element.parentElement.remove(_element), 3000);
    }

    function _show(content) {
        var _content = content || 0;
        if (typeof (_content) !== 'string') return false;

        _createNotificationElement();
        _createNotificationText();
        _appendNotificationElement();
        _setNotificationState();
        _setNotificationId();
        _autoRemoveNotification();

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