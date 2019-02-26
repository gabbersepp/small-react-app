export function addTodo(text) {
    return { type: "ADD_TODO", text: text };
}

export function setPreview(preview) {
    return { type: "PREVIEW", data: preview };
}