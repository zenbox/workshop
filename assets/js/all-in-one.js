/**
 * All In One
 */

jQuery('form > button')
  .before('<div>')
  .prev()
  .attr('id', 'new')

  .append('<input>')
  .children()
  .last()
  .attr('id', 'cb')
  .attr('type', 'checkbox')

  .parent()
  .append('<label>')
  .children() // array!
  .eq(1)
  .attr('for', 'cb')
  .text('OK!')

  .parent()
  .append('<p>')
  .children() // array!
  .last()
  .text('Lorem ipsum dolor ...')

  .parent()
  .children()
  .eq(0)
  .text('sit amet consectetur')

;