import React, { useRef } from 'react'

// все ожидаемые пропсы
interface TodoFormProps {
  onAdd(title: string): void
}

// React.FC<TodoFormProps> = props => - мы ожидаем пропсы, а именно тайтл типа стринг
export const TodoForm: React.FC<TodoFormProps> = props => {
  // Первый способ взаимодействия через useState
  // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  //Второй способ через useRef
  const ref = useRef<HTMLInputElement>(null)


  // обработка события нажатия клавиши Enter 
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(ref.current!.value)
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // console.log(title)
      // setTitle('')
    }
  }

  return (
    <div className='container'>
       <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter a name for the task"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter a name for the task
      </label>
    </div>
    </div>
   
  )
}
