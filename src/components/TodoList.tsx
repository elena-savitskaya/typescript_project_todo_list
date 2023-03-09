import React from 'react'
import { ITodo } from '../interfaces'

// описываем все входящие параметры
type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  //елси элементов нет
  if (todos.length === 0) {
    return <p className="center">No tasks yet!</p>
  }

  // метод для того, чтобы confirm работал
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <div className='container'>
       <ul>
        {todos.map(todo => {
          //если todo.completed, то добавляем класс completed
          const classes = ['todo']
          if (todo.completed) {
            classes.push('completed')
          }

          return (
            <li className={classes.join(' ')} key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  // воспользуемся встроенным методом bind
                  //конструкция вернет новую функцию и не будет ее вызывать
                  onChange={onToggle.bind(null, todo.id)}
                />
                <span>{todo.title}</span>
                <i
                  className="material-icons red-text"
                  //  onClick={removeHandler} - если без confirm, то было бы вот так
                  onClick={event => removeHandler(event, todo.id)}
                >
                  delete
                </i>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
   
  )
}
