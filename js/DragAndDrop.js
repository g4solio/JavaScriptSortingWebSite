var timer;

function UpdateDragAndDrop()
{
  drake = dragula([todoList]).on('drag', function (el) {
    timer.stop();
  }).on('drop', function (el) {
    Fresh.notify(el);
    timer.start();
  }).on('over', function (el, container) {
  }).on('out', function (el, container) {
  });
  console.log('Successfully make Draggable' );

}
