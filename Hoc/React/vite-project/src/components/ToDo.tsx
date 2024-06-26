import { useState, useEffect } from "react";

interface Itodo {
    id: number;
    task: string;
}



const ToDo = () => {
    const [todo, setTodo] = useState<Itodo[]>([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const storeTodos = localStorage.getItem('todo');
        if (storeTodos) {
            setTodo(JSON.parse(storeTodos));
        }
    }, []);

    const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;
        const newTodo = {
            id: todo.length + 1,
            task: input
        };
        const newArray = [...todo, newTodo];
        localStorage.setItem('todo', JSON.stringify(newArray));
        setTodo(newArray);
        setInput('');
    };

    const handleDelete = (id: number) => {
        const todosDeleted = todo.filter((item) => item.id !== id);
        localStorage.setItem('todo', JSON.stringify(todosDeleted));
        setTodo(todosDeleted);
    };
  return (
      <>
          <form onSubmit={handleAdd}>
              <input
                  value={input}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setInput(e.target.value)
                  }
                  type='text'
              />
              <button type='submit'>Add</button>
          </form>
          <ul>
              {todo.map((item) => (
                  <>
                      <li key={item.id}>{item.task}</li>
                      <button onClick={() => handleDelete(item.id)}>
                          Delete
                      </button>
                  </>
              ))}
          </ul>
      </>
  );
}

export default ToDo
