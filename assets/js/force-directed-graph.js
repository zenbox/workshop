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
        canvas, svg, group, link, nodes, simulation;

    // Settings
    canvas = {
        width: 630,
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
        let dataLinksBySource;

        // Aggregate data
        // sort links by name
        dataLinksBySource = d3.nest()
            .key(function (d, i) {
                return d.source
            })
            .rollup(function (v) {
                return v.length;
            })
            .object(data.links);

        // console.log(dataLinksBySource);
        // console.log(data.links);

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
                return 'stroke-width:' + d.value + ';';
            })
        // - - - - - - - - - -
        // only to see something
        // - - - - - - - - - -
        // .attr('x1', function (d, i) {
        //     return canvas.padding.left;
        // })
        // .attr('y1', function (d, i) {
        //     return i * 2;
        // })
        // .attr('x2', function (d, i) {
        //     return canvas.width - canvas.padding.right;
        // })
        // .attr('y2', function (d, i) {
        //     return i * 2;
        // })
        // - - - - - - - - - -

        // Build the nodes
        nodes = group.selectAll('circle')
            .data(data.nodes)
            .enter()
            .append('g')
            .classed('nodes', true)
            .attr('transform', 'scale(1,1) rotate(0) translate(0,0)')
            .append('circle')
            .attr('r', function (d, i) {
                return Math.floor(d.group * 3);
            })
            .on('click', function () {
                console.log('click!');
            })
            .call(d3.drag()
                .on('start', onDragStart)
                .on('drag', onDrag)
                .on('end', onDragStop)
            )
        // - - - - - - - - - -
        // only to see something
        // - - - - - - - - - -
        // .attr('cx', function (d, i) {
        //     return i * 10;
        // })
        // .attr('cy', function (d, i) {
        //     return i * 10;
        // });
        // - - - - - - - - - -

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

    function onDragStart(node) {
        if (!d3.event.active) simulation
            .alphaTarget(0.5)
            .restart();
        node.fx = node.x;
        node.fy = node.y;
    }

    function onDrag(node) {

        console.dir(d3.event);

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
                console.log('left mouse button');
                console.log(meta);
                break;
            case 2:
                console.log('middle mouse button');
                break;
            case 3:
                console.log('right mouse button');
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