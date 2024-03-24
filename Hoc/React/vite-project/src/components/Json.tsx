import { useCallback, useEffect, useState } from 'react';

//https://jsonplaceholder.typicode.com/users

export type Fetching = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
};

interface Form {
  name: string;
  email: string;
  password: string;
}

const Json = () => {
    const [data, setData] = useState<Fetching[]>([]);
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [submittedForms, setSubmittedForms] = useState<
        Form[]
    >([]);

    useEffect(() => {
        const fetching = async () => {
            const getData = await fetch(
                `https://jsonplaceholder.typicode.com/users`
            );
            const response = await getData.json();
            setData(response);
        };
        fetching();
    }, []);

    useEffect(() => {
        const storedFormData = localStorage.getItem('form');
        if (storedFormData) {
           try {
               const parsedData = JSON.parse(storedFormData);
               if (Array.isArray(parsedData)) {
                   setSubmittedForms(parsedData);
               } else {
                   throw new Error('Stored form data is not an array');
               }
           } catch (error) {
               console.error('Failed to parse stored form data:', error);
           }
        }
    }, []);

    const getInputValues = useCallback((data: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = data.target;
        const inputs = { [name]: value };
        setForm({ ...form, ...inputs });
    }, [form]);
    const onSubmitHandle = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password) {
            setErrorMessage('All fields must be filled out.');
            return;
        }
        const newSubmittedForm = {
            name: form.name,
            email: form.email,
            password: form.password
        };
        const updatedSubmittedForms = [...submittedForms, newSubmittedForm];
        localStorage.setItem('form', JSON.stringify(updatedSubmittedForms));
        setSubmittedForms(updatedSubmittedForms);
        alert("your form is Submitted, Thanks for using our a platform!")
        setForm({ name: '', email: '', password: '' });
        setErrorMessage('');
    }, [form, submittedForms]);
    return (
        <div className='Json'>
            {data.map((item) => (
                <p className='' key={item.id}>
                    {item.name}
                </p>
            ))}
            <form onSubmit={onSubmitHandle}>
                <input
                    value={form.name}
                    type='text'
                    name='name'
                    onChange={getInputValues}
                />
                <input
                    value={form.email}
                    type='email'
                    name='email'
                    onChange={getInputValues}
                />
                <input
                    value={form.password}
                    type='password'
                    name='password'
                    onChange={getInputValues}
                />
                {errorMessage && <p role='alert'>{errorMessage}</p>}
                <button type='submit'>Submit</button>
            </form>
            <ul>
                {submittedForms.map((submittedForm, index) => (
                    <li key={index}>
                        Name: {submittedForm.name}, Email: {submittedForm.email} Password: {submittedForm.password}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Json;
