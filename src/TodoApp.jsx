import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {

    // const { data: todos = [], isLoading } = useGetTodosQuery();

    const [todoId, setTodoId] = useState(1);
    const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);



    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading {isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            {/* <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'DONE' : 'Pending'} </strong>
                        {todo.title}
                    </li>
                ))}
            </ul> */}

            <button
                onClick={() => setTodoId(todoId - 1)}
            >
                Prev  Todo
            </button>

            <button
                onClick={() => setTodoId(todoId + 1)}
            >
                Next Todo
            </button>
        </>
    )
}
