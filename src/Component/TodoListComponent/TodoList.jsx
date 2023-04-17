import { TodoItem } from "../TodoItemsComponent/TodoItems"

export function TodoList({ todos, toggleTodo, deleteTodo,editTodo}) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos For Today"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}