/** Data Update Example
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-18
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

!(function () {
    'use strict';
    // - - - - - - - - - -
    // Declarations
    var
        data = ['a', 'b', 'c', 'd', 'e'],
        data_1 = ['A', 'B', 'C', 'D', 'E'],
        group = undefined;

    // Functions

    function onButtonUpdateClick(event) {
        group
            .data(data)
            .enter();

        // Remove unneeded circles
        group
            .exit()
            .remove();

        group
            .enter()
            .append('div')
            .merge(group) // ! 
            .classed('circle', true)
            .text(function (d, i) {
                return d;
            })
    }

    // Control
    // build the dataset
    group = d3.select('#circles')
        .selectAll('div')
        .data(data)
        .append('div')
        .classed('circle', true)
        .text(function (d) {
            return d;
        })


    // Event control
    d3.select('button#update')
        .on('click', onButtonUpdateClick);
    // - - - - - - - - - -
}())