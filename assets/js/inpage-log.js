/** In-page logging
 * @desc uses an output element to log
 *       strings within the svg graph
 * @version 1.0.0
 * 
 * @example log('any string 1', 'any string 2')
 * 
 * @param {any} _arguments to handle one or more values
 * @returns none
 */
!(function () {
    document.write('<style>#log{opacity:0.5;font-family:Menlo;color:grey;display:block;position:absolute;right:1rem;top:1rem;font-size:12px;}</style>');

    let
        log, output,
        size = 20,
        messages = ['ready.'],
        string = '',
        previousString = '',
        level = undefined;

    output = document
        .createElement('output');

    output
        .setAttribute('id', 'log');

    document
        .body
        .appendChild(output);

    log = function () {
        let style = '',
            prefix = '',
            suffix = '',
            counter = 0;

        previousString = string;
        string = '';

        for (let i = 0; i < arguments.length; i += 1) {

            switch (arguments[i]) {
                case 'error':
                    prefix = '<i style="color:red;">';
                    suffix = '</i>';
                    string += prefix + arguments[i] + ' ';
                    break;
                case 'warning':
                    prefix = '<i style="color:orange;">';
                    suffix = '</i>';
                    string += prefix + arguments[i] + ' ';
                    break;
                case 'success':
                    prefix = '<i style="color:green;">';
                    suffix = '</i>';
                    string += prefix + arguments[i] + ' ';
                    break;
                case 'default':
                default:
                    if (i > 0)
                        string += arguments[i] + ', ';
                    suffix = '';
                    break;
            }
        }
        string = string.substring(0, string.length - 2) + suffix;


        if (previousString !== string) {

            if (log.level === arguments[0] || log.level === undefined)
                messages.push(string);
        }

        if (messages.length >= size) messages.shift();
        document.querySelector('#log').innerHTML = '';

        for (let i = 0; i < messages.length; i += 1) {
            document.querySelector('#log').innerHTML +=
                '&gt; ' +
                messages[i] +
                '<br />';
        }

    }

    window.log = log;
}());