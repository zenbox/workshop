/* global console, window, document */
/**
 * An Acrobat Application
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/18
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

var
  DEBUG = true,
  DEBUG_LEVEL = 0,
  fields = {
    '1.1.4': {
      id: '1.1.4',
      isMandatory: true,
      minimumLength: 4,
      maximumLength: 8,
      pattern: '[a-zA-Z0-9]',
      description: '1.1.4 Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
    },

    '1.1.5': {
      id: '1.1.5',
      isMandatory: true,
      minimumLength: 4,
      maximumLength: 8,
      pattern: '[a-zA-Z0-9]',
      description: '1.1.5 Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
    }
  };

// - - - - - - - - - -
if (DEBUG) console.show();
if (DEBUG) console.clear();
// - - - - - - - - - -