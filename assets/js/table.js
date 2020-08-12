!(function () {
    'use strict';
    //- - - - - - - - - -
    // Global variables
    var table, tableHeads, tableHeadHandles, tableFirstColumnHandles;

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
                
                console.log('click, indent ' + event.target.parentNode.parentNode.dataset.indent);
                // event.target.classList.toggle('clicked');

                event.target.classList.toggle('fa-angle-down');
                event.target.classList.toggle('fa-angle-right');

                toggleRowsWithHigherIndent(event.target.parentNode.parentNode, event.target.parentNode.parentNode.dataset.indent);
                setZebraTableClasses();
            })
        }
    }

    /**
     * @desc Handle indent>1 rows visiblity
     */
    function toggleRowsWithHigherIndent(node,indent) {
        
        console.log(node.parentNode);

        var target = node.parentNode.querySelectorAll('tr[data-indent="' + indent + '"]~tr');

        console.log(node);
        console.log(target);

        // Toggle class hidden (display:none)
        for (var i = 0; i < target.length; i++) {
            target[i].classList.toggle('hidden');
        }
    }

    function setZebraTableClasses() {

        var visibleTableRows = document.querySelectorAll('.issues tr:not(.hidden)');
        var invisibleTableRows = document.querySelectorAll('.issues tr.hidden');

        // console.log('visible: ', visibleTableRows);
        // console.log('invisible: ', invisibleTableRows);

        for (var i = 0; i < visibleTableRows.length; i++) {
            i % 2 === 0 ? visibleTableRows[i].classList.add('even') : visibleTableRows[i].classList.add('odd');

            if (i % 2 === 0) {
                visibleTableRows[i].classList.add('even');
            } else {
                visibleTableRows[i].classList.add('odd');
            }

        }
    }


    /**
     * @desc The main stack to execute
     */
    function main() {
        // Set gobal objects
        table = document.querySelector('#issues');
        tableHeads = document.querySelectorAll('#issues thead th');
        tableHeadHandles = document.querySelectorAll('#issues thead th div');
        tableFirstColumnHandles = document.querySelectorAll('#issues tbody td:first-child .fas');

        // console.log(table);
        // console.log(tableHeads);
        // console.log(tableHeadHandles);
        // console.log(tableFirstColumnHandles);

        setResizeEvents();
        setFirstColumnEvents();
        setZebraTableClasses();
    }

    // A save starting point
    window.onload = function () {
        main();
    }
    //- - - - - - - - - -
}());