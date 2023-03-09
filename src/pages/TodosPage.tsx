import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]) // может быть и такая запись Array<ITodo>

// 2 useEffect нужны для запоминания предыдущего 
// значения и чтобы после перезагрузки данные сохранялись
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  // метод для добавления нового элемента todo в список
  // функция, которая принимает title типа: string
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(), 
      completed: false // по умолчанию у всех false
    }
    // setTodos([newTodo, ...todos]) // можно и так, но эта запись не учитывает предыдущий стейт
    setTodos(prev => [newTodo, ...prev]) // здесь уже новый массив выводится, основываясь на предыдущем стейте
  }

  // метод переключения completed или нет
  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  // удаление todoшек
  const removeHandler = (id: number) => {
    const shoudRemove = confirm('Ви впевнені, що хочете видалити елемент?')
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }


  // чтобы передать параметры onAdd={addHandler} onToggle={toggleHandler}
// onRemove={removeHandler} их нужно назначать - в interface  или type*/}
  return (
    <div className='todos-page'>
      <TodoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </div>
  )
}
