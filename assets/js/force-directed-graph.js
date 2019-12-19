/** Force Directed Graph
 *
 * @package D3
 * @module force-directed
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-19
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

!(function () {
    'use strict';
    //- - - - - - - - - -
    // Declaration
    let
        canvas, svg, group;

    // Settings
    canvas = {
        width: 1200,
        height: 800,
        viewbox: {
            x: 0,
            y: 0,
            width: 1200,
            height: 800
        },
        padding: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        }
    };

    // Functions
    function setCanvas(contextSelector) {
        svg = d3.select(contextSelector)
            .append('svg')
            .attr('width', canvas.width)
            .attr('height', canvas.height)
            .attr('viewbox',
                canvas.viewbox.x + ' ' +
                canvas.viewbox.y + ' ' +
                canvas.viewbox.width + ' ' +
                canvas.viewbox.height)
    }

    function setGroup(id) {
        group = svg.append('g')
            .attr('id', id)
    }

    // Control
    setCanvas('#diagram');
    setGroup('root');

    d3.json('assets/data/miserables.json');

    //- - - - - - - - - -
}());