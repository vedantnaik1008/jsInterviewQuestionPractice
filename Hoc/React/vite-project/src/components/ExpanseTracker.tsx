import { useState } from "react";

type Props = {
    id?: number;
    expanseName: string;
    expanseValue: number;
};

const ExpanseTracker = () => {
    const [input, setInput] = useState<Props>({
        expanseName: '',
        expanseValue: 0
    })

    const [data, setData] = useState<Props[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setInput({...input, [name] : value})
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!input.expanseName || !input.expanseValue){
            alert('please fill all the fields')
            return;
        }
        const newArray : Props = {
            id: data.length + 1,
            expanseName: input.expanseName,
            expanseValue: input.expanseValue
        }
        setData([...data, newArray])
        setInput({ expanseName: '', expanseValue: 0 });
    }
   
    console.log(input);
    const Total = data.reduce((acc, cur) => acc + Number(cur.expanseValue), 0);
    console.log('total:', Total);
    
  return (
      <div>
          <div className=''>
              <form action='' onSubmit={handleSubmit}>
                  <label htmlFor='name'>
                      Expanse Name
                      <input
                          id='name'
                          type='text'
                          name='expanseName'
                          value={input.expanseName}
                          onChange={handleChange}
                      />
                  </label>
                  <label htmlFor='number'>
                      Expanse Value
                      <input
                          id='number'
                          type='number'
                          name='expanseValue'
                          value={input.expanseValue}
                          onChange={handleChange}
                      />
                  </label>
                  <button type='submit'>Submit</button>
              </form>
          </div>
          {data.length > 0 && (<table>
              <tr>
                  <th>Expanse Name</th>
                  <th>Expanse Value</th>
              </tr>
              {data.map((item) => (
                  <tr key={item.expanseName}>
                      <td>{item.expanseName}</td>
                      <td>{item.expanseValue}</td>
                  </tr>
              ))}
              <tr className="border">
                  <td>Total: </td>
                  <td>{Total}</td>
              </tr>
          </table>)}
      </div>
  );
}

export default ExpanseTracker
