
    var listElement = document.querySelector('#toDo ul');
    var newTask = document.querySelector('input[id=inputask]');

    var todos = JSON.parse(localStorage.getItem('list_todo'));

    function renderTodos() {
        listElement.innerHTML = '';
        for (todo of todos) {
            var todoElement = document.createElement('li');
            var linkElement = document.createElement('a');
            linkElement.setAttribute('href', '#')

            var excluirText = document.createTextNode(' excluir');
            var todoText = document.createTextNode(todo);


            var pos = todos.indexOf(todo);
            linkElement.setAttribute('onclick', 'removeTodo('+ pos +')')

            todoElement.appendChild(todoText);
            listElement.appendChild(todoElement);
            linkElement.appendChild(excluirText);
            todoElement.appendChild(linkElement);
        }
    }
    renderTodos();

    function addTodo() {
        var todoText = newTask.value;
        (todoText === '')? alert('Digite uma tarefa') :todos.push(todoText);

        newTask.value = '';
        saveAllTodo();
        renderTodos();
    }

    function removeTodo(pos) {
        todos.splice(pos, 1);
        saveAllTodo();
        renderTodos();
    }

    function saveAllTodo() {
        localStorage.setItem('list_todo', JSON.stringify(todos));
    }

    

