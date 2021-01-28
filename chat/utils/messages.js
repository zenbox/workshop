const moment = require('moment');

function formatMessages(text, username = 'USERNAME') {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    };
}

module.exports = formatMessages;