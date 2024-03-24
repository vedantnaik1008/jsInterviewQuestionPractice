import React, { useCallback, useEffect, useState } from 'react'
import { Fetching } from './Json';

const Search = () => {
    const [input, setInput] = useState('')
    const [data, setData] = useState<Fetching[]>([]);
    const fetching = useCallback(async () => {
        const getData = await fetch(
            `https://jsonplaceholder.typicode.com/users?query=${input}`
        );
        const response = await getData.json();
        setData(response);
    }, [input]);
    
    useEffect(() => {
        fetching();
    }, [fetching]);

    const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        fetching()
    }
  return (
      <div className='search'>
          <form onSubmit={onSubmitHandle}>
              <input
                  value={input}
                  type='text'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setInput(e.target.value)
                  }
              />
          </form>
          {input && data && data.length > 0 ? (<>
            {data.filter((item)=> item.name.toLowerCase().includes(input.toLowerCase())).map((res)=> (
                <p key={res.id}>{res.name}</p>
            ))}
          </>) : (null)}
      </div>
  );
}

export default Search
