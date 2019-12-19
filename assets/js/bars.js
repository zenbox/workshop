/** A Simple D3 Bars Graph 
 *
 * @package DataVisualization
 * @module Bars
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-18 v1.0.0
 * @see i.e. inspired by Mike Bostock {https://observablehq.com/@mbostock/best-candidate-circles}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

!(function () {
    'use strict';
    // - - - - - - - - - -
    // Declarations

    // Event Handler Functions

    // Functions

    // Control (Event Control)
    window.d3.csv('assets/data/data.csv',
        function (row) {
            return {
                name: row.name,
                value: parseInt(row.value)
            };
        }).then(function (data) {
        // local scope of then
        var bar;

        bar = d3.select('.chart')
            // Adding groups
            .selectAll('g')
            .data(data)
            .enter()
            .append('g');

        // group translate
        // <g tranform="rotate(30) scale(1,1) translate()"></g>
        bar
            .attr('transform', function (d, i) {
                return 'translate(' + (450 + i * 80) + ' ,0) rotate(30) scale(1,1) skewX(-30)';
            });

        // create a rectangle
        bar.append('rect')
            .attr('height', function (d) {
                return d.value / 5;
            })
            .attr('width', 20)
            .attr('x', 0)
            .attr('y', function (d, i) {
                return 400 - d.value / 5;
            });

        // create a text
        bar.append('text')
            .text(function (d) {
                return d.name
            })
            .attr('x', -15)
            .attr('y', function (d, i) {
                return 420;
            })
    });

    // Propagation
    window.moduleName = {};
    moduleName = {};
    // - - - - - - - - - -
}());
console.clear();