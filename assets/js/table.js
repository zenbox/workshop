!(function () {
    'use strict';
    //- - - - - - - - - -
    // Global variables
    var table = document.querySelector('#issues');
    var tableHeads = document.querySelectorAll('#issues thead th');
    var tableHeadHandles = document.querySelectorAll('#issues thead th div');
    var tableFirstColumnHandles = document.querySelectorAll('#issues tbody td:first-child .fas');

    console.dir(table);
    console.dir(tableHeads);
    console.dir(tableHeadHandles);
    console.dir(tableFirstColumnHandles);

    /**
     * @desc Will not work, 
     *       there is no resize event for elements
     */
    function setResizeEvents() {
        for (var i = 0; i < tableHeadHandles.length; i++) {
            tableHeadHandles[i].addEventListener('resize', function (event) {
                console.log('resize' + event.target);
            })
        }
    }

    /** 
     * @desc Event listener first column fields,
     *       look for ident value
     */
    function setFirstColumnEvents() {
        for (var i = 0; i < tableFirstColumnHandles.length; i++) {
            tableFirstColumnHandles[i].addEventListener('click', function (event) {
                console.log('click, indent ' + event.target.parentNode.dataset.indent);
                event.target.classList.toggle('clicked');
                event.target.classList.toggle('fa-angle-down');
                event.target.classList.toggle('fa-angle-right');

                toggleRowsWithIndentGreaterThan1(event.target.parentNode.parentNode);
                setZebraTableClasses();
            })
        }
    }

    /**
     * @desc Handle indent>1 rows visiblity
     */
    function toggleRowsWithIndentGreaterThan1(node) {
        var target = node.parentNode.querySelectorAll('tr~tr');
        console.log(node);
        console.log(target);

        for (var i = 0; i < target.length; i++) {
            target[i].classList.toggle('hidden');
        }
    }

    function setZebraTableClasses() {
        var visibleTableRows = document.querySelectorAll('.issues tr:not(.hidden)');
        var invisibleTableRows = document.querySelectorAll('.issues tr.hidden');
        console.log('visible: ', visibleTableRows);
        console.log('invisible: ', invisibleTableRows);

        for (var i = 0; i < visibleTableRows.length; i++) {
            i % 2 === 0 ? visibleTableRows[i].classList.add('even') : visibleTableRows[i].classList.add('odd');
        }
    }


    /**
     * @desc The main stack to execute
     */
    function main() {
        setResizeEvents();
        setFirstColumnEvents();
    }

    // A save starting point
    window.onload = function () {
        main();
    }
    //- - - - - - - - - -
}());