//----------Selectors----------//

// selects class todo-input from html and stores in variable
const todoInput = document.querySelector('.todo-input');

// selects class todo-button from html and stores in variable
const todoButton = document.querySelector('.todo-button');

// selects class todo-list from html and stores in variable
const todoList = document.querySelector('.todo-list');

//------------Event Listeners---------//

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//------------Functions---------------//
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    
    //Create LI
    const newTodo = document.createElement('li');

    //Save user input to new todo
    newTodo.innerText = todoInput.value;

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

     // Trash button
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);

     //Append to List
     todoList.appendChild(todoDiv);

     //Clear todo Input Value
     todoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;
    //Delete todo item
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove(); 
    }

    //check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}