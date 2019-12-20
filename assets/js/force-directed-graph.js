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
    document.querySelector('body').addEventListener('contextmenu', function (event) {
        console.log('CM');
        event.preventDefault();
    })
    //- - - - - - - - - -
    // Declaration
    let
        canvas, svg, group, link, nodes, simulation, color, globalData, circles;

    // ! Adding a color scheme
    color = d3.scaleOrdinal(d3.schemeCategory10);

    // Settings
    canvas = {
        width: 870,
        height: 600,
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
                canvas.viewbox.height);
    }

    function setGroup(id) {
        let _id = id || undefined;

        if (!_id) return false;

        try {
            group = svg.append('g')
                .attr('id', _id);
        } catch (error) {
            console.log(error);
        }
        return true;
    }

    function createGraph(data) {
        let dataLinksBySource, dataLinksCount;

        globalData = data;

        // globalData.nodes.push({
        //     "id": "Michael",
        //     "group": 4
        // });
        // globalData.links.push({
        //     "source": "Valjean",
        //     "target": "Michael",
        //     "value": 50
        // });

        // - - - - - - - - - -
        // Aggregate data
        // - - - - - - - - - -
        // links by source
        // ! .entries() builds an array!
        dataLinksBySource = d3.nest()
            .key(function (d) {
                return d.source;
            })
            .entries(data.links);
        // - - - - -
        // console.log(dataLinksBySource);
        // - - - - -

        // count links per name
        // ! .object() builds an object!

        dataLinksCount = d3.nest()
            .key(function (d) {
                return d.source;
            })
            .rollup(function (v) {
                return v.length;
            })
            .object(data.links);
        // - - - - -
        // console.log(dataLinksCount);
        // - - - - - - - - - -

        // Set the force direction params
        simulation = d3.forceSimulation()
            .force('link', d3.forceLink()
                .id(function (d, i) {
                    return d.id;
                })
                .distance(60)
            )
            .force('charge', d3.forceManyBody()
                .strength(-70))
            .force('center', d3.forceCenter(canvas.width / 2, canvas.height / 2));


        // Build the links
        link = group.append('g')
            .classed('links', true)
            .selectAll('line')
            .data(data.links)
            .enter()
            .append('line')
            .attr('style', function (d, i) {
                // ! Line thickness
                return 'stroke-width:' + Math.sqrt(d.value) + ';';
            })

        // Build the nodes  
        nodes = group.selectAll('image')
            .data(data.nodes)
            .enter()
            .append('g')
            .classed('nodes', true)
            .attr('transform', 'scale(1,1) rotate(0) translate(0,0)')
            .append('circle')
            // .append('image')
            // .attr('xlink:href', 'assets/figures/full-moon.svg')
            .attr('style', function (d) {
                // ! Use the color scheme
                return 'fill:' + color(d.group) + ';';
            })
            .attr('r', function (d) {
                let r;
                if (dataLinksCount[d.id]) {
                    r = dataLinksCount[d.id] * 3;
                } else {
                    r = 0;
                }
                if (r < 5) r = 5;
                return r;
            })
            .on('click', onClick)
            .call(d3.drag()
                .on('start', onDragStart)
                .on('drag', onDrag)
                .on('end', onDragStop)
            )

        // building title and text attributes
        nodes.append('title')
            .text(function (d) {
                return d.id;
            });

        nodes.append('text')
            .attr('transform', 'translate(5, 0) rotate(0)')
            .text(function (d, i) {
                return d.id;
            });

        // Realtime engine
        simulation
            .nodes(data.nodes)
            .on('tick', ticked)

        simulation.force('link')
            .links(data.links)
    }

    function ticked() {
        // draw links
        if (link) {
            link
                .attr('x1', function (d, i) {
                    return d.source.x;
                })
                .attr('y1', function (d, i) {
                    return d.source.y;
                })
                .attr('x2', function (d, i) {
                    return d.target.x;
                })
                .attr('y2', function (d, i) {
                    return d.target.y;
                });
        }

        // draw nodes
        if (nodes) {
            nodes.attr('transform', function (d, i) {
                return 'scale(1,1) rotate(0) translate(' + d.x + ',' + d.y + ')';
            });
        }
    }

    // ! Add a click event handler
    function onClick(node) {
        // console.dir(d3.event);
        // console.dir(node);
        // console.log(this);

        let addData, onDataEnter, onDataUpdate, onDataExit;

        // Add data
        addData = function () {
            globalData.nodes.push({
                "id": "Michael",
                "group": 4
            });
            globalData.links.push({
                "source": "Valjean",
                "target": "Michael",
                "value": 18
            });
            return globalData;
        };

        onDataEnter = function (enter) {
            return enter
                .append('circle')
                .transition()
                .duration(10)
                .attr('style', 'fill:red;')
                .attr('cx', d3.event.x)
                .attr('cy', d3.event.y)
                .attr('r', 50)
                .call(function (enter) {
                    return enter
                        .transition()
                        .duration(250)
                        .attr('stroke-weight', '5');
                });
        };

        onDataUpdate = function (update) {
            return update
                .transition()
                .duration(10)
                .attr('cx', d3.event.x)
                .attr('cy', d3.event.y)
                .attr('style', 'fill:black;')
                .call(function (update) {
                    return update
                        .transition()
                        .duration(250)
                        .attr('stroke-weight', '5');
                });
        };

        onDataExit = function (exit) {
            return exit
                .transition()
                .duration(10)
                .attr('style', 'fill:green;')
                .call(function (exit) {
                    return exit
                        .transition()
                        .duration(250)
                        .attr('cy', canvas.height / 2)
                        .remove()
                })
        };

        // console.log(addData().nodes);
        // console.log(addData().links);

        // svg.selectAll('circle')
        //     .data(addData().nodes, function (d) {
        //         return d;
        //     })
        //     .join(onDataEnter, onDataUpdate, onDataExit);
        // nodes = group.selectAll('circle')
        //     .data(data.nodes)
        //     .enter()
        //     .append('g')
        //     .classed('nodes', true)
        //     .append('circle')
        //     .attr('r', function (d) {
        //         let r;
        //         if (dataLinksCount[d.id]) {
        //             r = dataLinksCount[d.id] * 3;
        //         } else {
        //             r = 0;
        //         }
        //         if (r < 5) r = 5;
        //         return r;
        //     });
        //let data = addData();
        let
            data = globalData,
            enter;

        // group.selectAll('circle')
        //     .data(data.nodes)
        //     .enter()
        //     .append('g')
        //     .classed('nodes', true)
        //     .append('circle')
        //     .attr('r', function (d) {
        //         let r;
        //         if (dataLinksCount[d.id]) {
        //             r = dataLinksCount[d.id] * 3;
        //         } else {
        //             r = 0;
        //         }
        //         if (r < 5) r = 5;
        //         return r;
        //     });

        // group
        //     .append('image')
        //     .attr('id', 'plane')
        //     .attr('x', width - margin.right - 150)
        //     .attr('y', margin.top + 130)
        //     .attr('width', '150')
        //     .attr('transform', 'scale(1, 0.8)')
        //     .attr('xlink:href', 'assets/figures/plane-2.svg');

        // <image xlink:href="assets/figures/plane-2.svg"> </image>

        d3
            .json('assets/data/miserables.json')
            .then(function (data) {
                // - - - - -
                data = addData();

                document.querySelector('output').innerText =
                    '(' + data.nodes.length + ', ' + data.links.length + ')';

                circles = group.selectAll('circle')
                    .data(data);

                group.exit().remove();

                enter = circles.enter()
                    .append('g');

                enter.append('circle')
                    .attr('cx', canvas.width / 2)
                    .attr('cy', canvas.height / 2)
                    .attr('r', 100);

                circles = circles.merge(enter); // Update
                // - - - - -
                // Realtime engine
                simulation.force('link')
                    .links(data.links);

                simulation
                    .nodes(data.nodes)
                    .restart();
                //     .on('tick', ticked)

                // - - - - -
            });
    }

    function onDragStart(node) {
        if (!d3.event.active) simulation
            .alphaTarget(0.5)
            .restart();
        node.fx = node.x;
        node.fy = node.y;
    }

    function onDrag(node) {

        // console.dir(d3.event);

        let
            type = d3.event.sourceEvent.type,
            meta = d3.event.sourceEvent.metaKey,
            ctrl = d3.event.sourceEvent.ctrlKey,
            shift = d3.event.sourceEvent.shiftKey,
            alt = d3.event.sourceEvent.altKey,
            which = d3.event.sourceEvent.which;

        switch (which) {
            default:
            case 1:
                // console.log('left mouse button');
                // console.log(meta);
                // console.log(alt);
                break;
            case 2:
                // console.log('middle mouse button');
                break;
            case 3:
                // console.log('right mouse button');
                break;

        }

        node.fx = d3.event.x;
        node.fy = d3.event.y;
    }

    function onDragStop(node) {
        if (!d3.event.active) simulation
            .alphaTarget(0)
            .restart();
        node.fx = null;
        node.fy = null;
    }

    // Control
    setCanvas('#diagram');
    setGroup('root');

    d3
        .json('assets/data/miserables.json')
        .then(createGraph);

    //- - - - - - - - - -
}());