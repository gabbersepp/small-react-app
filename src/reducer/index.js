function addTodo(todos, action) {
    if (action.type === "ADD_TODO") {
        todos.push(action.text);
    }

    return todos;
}

function preview(preview, action) {
    if (action.type === "PREVIEW") {
        return action.data;
    }

    return preview;
}

export function reduce(state = initial, action) {
    return {
        todos: addTodo(state.todos, action),
        preview: preview(state.preview, action)
    };
}

let initial = {
    todos: []
}