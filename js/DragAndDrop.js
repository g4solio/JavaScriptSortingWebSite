function UpdateDragAndDrop()
{
  drake = dragula([todoList]).on('drag', function (el) {
  }).on('drop', function (el) {
    Fresh.notify(el);
  }).on('over', function (el, container) {
  }).on('out', function (el, container) {
  });
  console.log('Successfully make Draggable' );

}
