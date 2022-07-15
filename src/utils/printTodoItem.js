export default function printTodoItem(id, title, completed) {
    return `${id}. ${title} - ${completed}`;
}

export function printTodoItemPlus(id, title, completed) {
    return `${id}. ${title} [${completed}] !!!`;
}