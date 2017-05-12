(function() {

  'use strict';

  var ENTER_KEY = 13;
  var newTodoDom = document.getElementById('new-todo');
  var syncDom = document.getElementById('sync-wrapper');


  // EDITING STARTS HERE (you dont need to edit anything above this line)

  var db = new PouchDB('DatabaseTodosV5');
  PouchDB.debug.enable('pouchdb:find');
  // Replace with remote instance, this just replicates to another local instance.
  var remoteCouch = 'todos_remote';

  db.changes({
    since: 'now',
    live: true
  }).on('change', showTodos);
  var dbChangedPromises = [];
  // We have to create a new todo document and enter it in the database
  function addTodo(text, completed, time) {
    console.log("wow " + text);
    if(text)
    {
      var todo = {
        _id: new Date().toISOString(),
        title: text,
        completed: completed,
        timeRemaning: time,
        canFlow: true
      };
      return db.put(todo, function callback(err, result) {
        console.log(err);
        if (!err) {
          return result;
        }
      });
  }
  }

  // Show the current list of todos by reading them from the database
  function showTodos() {
    db.allDocs({include_docs: true, descending: true}, function(err, doc) {
      redrawTodosUI(doc.rows);
    });
  }

  function checkboxChanged(todo, event) {
    todo.completed = event.target.checked;
    Promise.all(dbChangedPromises).then(function(){
      dbChangedPromises.push(db.put(todo));
    });
    
  }

  // User pressed the delete button for a todo, delete it
  function deleteButtonPressed(todo) {
    Promise.all(dbChangedPromises).then(function(){
      dbChangedPromises.push(db.remove(todo));
    });
  }

  // The input box when editing a todo has blurred, we should save
  // the new title or delete the todo if the title is empty
  function todoBlurred(todo, event) {
    var trimmedText = event.target.value.trim();
    if (!trimmedText) {
    Promise.all(dbChangedPromises).then(function(){
      dbChangedPromises.push(db.remove(todo));

    });
      
    } else {
      todo.title = trimmedText;
    Promise.all(dbChangedPromises).then(function(){
      dbChangedPromises.push(db.put(todo));

    });
    }
  }

  // Initialise a sync with the remote server
  function sync() {
    syncDom.setAttribute('data-sync-state', 'syncing');
    var opts = {live: true};
    db.replicate.to(remoteCouch, opts, syncError);
    db.replicate.from(remoteCouch, opts, syncError);
  }

  // EDITING STARTS HERE (you dont need to edit anything below this line)

  // There was some form or error syncing
  function syncError() {
    syncDom.setAttribute('data-sync-state', 'error');
  }

  // User has double clicked a todo, display an input so they can edit the title
  function todoDblClicked(todo) {
    var div = document.getElementById(todo._id);
    var inputEditTodo = document.getElementById('input_' + todo._id);
    div.className = 'editing';
    inputEditTodo.focus();
  }

  // If they press enter while editing an entry, blur it to trigger save
  // (or delete)
  function todoKeyPressed(todo, event) {
    if (event.keyCode === ENTER_KEY) {
      var inputEditTodo = document.getElementById('input_' + todo._id);
      inputEditTodo.blur();
    }
  }

  // Given an object representing a todo, this will create a list item
  // to display it.
  function createTodoListItem(todo) {
    var checkbox = document.createElement('input');
    checkbox.className = 'toggle';
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', checkboxChanged.bind(this, todo));

    var label = document.createElement('label');
    label.appendChild( document.createTextNode(todo.title));
    label.addEventListener('dblclick', todoDblClicked.bind(this, todo));

    var deleteLink = document.createElement('button');
    deleteLink.className = 'destroy';
    deleteLink.addEventListener( 'click', deleteButtonPressed.bind(this, todo));


    var timeFlowSwitch = document.createElement("button");
    timeFlowSwitch.className = "timeFlowSwitch";
    timeFlowSwitch.addEventListener("click", function(){
      if(todo.timeFlowSwitch == false)
      {
        todo.timeFlowSwitch = true;
      }
      else
      {
        todo.timeFlowSwitch = false;
      }
    });

    var divDisplay = document.createElement('div');
    divDisplay.className = 'view';
    divDisplay.appendChild(checkbox);
    divDisplay.appendChild(label);
    divDisplay.appendChild(deleteLink);
    divDisplay.appendChild(timeFlowSwitch);

    var inputEditTodo = document.createElement('input');
    inputEditTodo.id = 'input_' + todo._id;
    inputEditTodo.className = 'edit';
    inputEditTodo.value = todo.title;
    inputEditTodo.addEventListener('keypress', todoKeyPressed.bind(this, todo));
    inputEditTodo.addEventListener('blur', todoBlurred.bind(this, todo));

    var li = document.createElement('li');
    li.id = todo._id;
    li.className = 'Draggable';
    li.appendChild(divDisplay);
    li.appendChild(inputEditTodo);

    if (todo.completed) {
      li.className += 'complete';
      checkbox.checked = true;
    }

    return li;
  }

  function redrawTodosUI(todos) {
    var ul = document.getElementById('todoList');
    ul.innerHTML = '';
    todos.forEach(function(todo) {
      if(todo.doc.title)
      {
       var todoCreated = createTodoListItem(todo.doc);
        ul.appendChild(todoCreated);
      }
      else
      {
        Promise.all(dbChangedPromises).then(function(){

          dbChangedPromises.push(db.remove(todo));
        });
      }
    });
  }

  function newTodoKeyPressHandler( event ) {
    if (event.keyCode === ENTER_KEY) {
      Promise.all(dbChangedPromises).then(function(){
        dbChangedPromises = [];
        dbChangedPromises.push(addTodo(newTodoDom.value, false, 30));
        newTodoDom.value = '';
      });
      
    }
  }

  function addEventListeners() {
    newTodoDom.addEventListener('keypress', newTodoKeyPressHandler, false);
  }

  addEventListeners();
  showTodos();
  UpdateDragAndDrop();
  StartTimer();
  function StartTimer()
  {
    var timer = new Timer();
    timer.start();
    timer.addEventListener('secondsUpdated', function (e) {
      db.allDocs({include_docs: true, descending: true}, function(err, doc) {

        doc.rows.forEach(function(todo)
          {
            if(todo.doc.canFlow)
            {
              if(todo.doc.timeRemaning > 0)
              {
                todo.doc.timeRemaning = todo.doc.timeRemaning - 1;
                console.log(todo.doc.timeRemaning);
                Promise.all(dbChangedPromises).then(function(){
                  db.put(todo.doc);
                });
              }
            }
          });
      });
    });
  }
  if (remoteCouch) {
    sync();
  }


 var Fresh = {

  notify:function(el)
  {
    var ul = document.getElementById("todoList");
    var items = ul.getElementsByTagName("li");
    var promises = [];
    var deletePromises = [];
    Promise.all(dbChangedPromises).then(useless => {
      console.log(dbChangedPromises);
      dbChangedPromises = [];
      for (var i = 0; i < items.length; ++i) {

        var todoDB = db.get(items[i].id).then(function(todo)
          {
            return todo;
          }).catch(err => {
            console.log(err);
          });

        promises.push(todoDB);
        dbChangedPromises.push(promises);
      }
      Promise.all(promises).then(todos => {
          todos.forEach(function (todo)
            {

              var switchTodo = todo;
                                    //console.log("finito "+ switchTodo.title);

              deletePromises.push(db.remove(todo).then(function(){
                //console.log(switchTodo.title);
                return switchTodo;
              }).catch());
            dbChangedPromises.push(deletePromises);
            });

      }).then(function()
      {
        Promise.all(deletePromises).then(deletes => {
        //console.log(deletes);
        deletes.reverse();
        deletes.forEach(function(todo)
          {
              console.log(todo.title);

              dbChangedPromises.push(addTodo(todo.title,todo.completed,todo.timeRemaning).catch(err =>{
                console.log(err);
              }));
            // db.put(todoNew).then(function()
            //   {
            //     //console.log("wow");
            //   }).catch(function(err)
            //   {
            //     //console.log("porcodio "+ err);
            //   });
          });
      });

      });

      });
  }

 }
 window.Fresh = Fresh;

})();

