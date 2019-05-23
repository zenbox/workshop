/**
 * All In One
 */

jQuery('form > button') // collection of all buttons        -> button
  .before('<div>')
  .prev() // change the collection to the previous sibling  -> div
  .attr('id', 'new') // add attribute to the collection

  .append('<input>') // add input into div
  .children() // select the all new children
  .last() // take the last child                            -> input
  .attr('id', 'cb')
  .attr('type', 'checkbox')

  .parent() //                                              -> div
  .append('<label>')
  .children() // array!
  .eq(1) //                                                 -> label
  .attr('for', 'cb')
  .text('OK!')

  .parent() //                                              -> div
  .append('<p>')
  .children() // array!
  .last() //                                                -> p
  .text('Lorem ipsum dolor ...');