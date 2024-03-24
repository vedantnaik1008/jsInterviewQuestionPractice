import { useEffect, useState } from 'react'

type User = {
    userId: number;
    id: number;
    title: string;
}

const Pagination = () => {
    const [data, setData] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetching = async () => {
            const getData = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=100`
            );
            const response = await getData.json();
            setData(response);
        };
        fetching();
    }, []);
    const itemsPerPage = 10;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentData = data.slice(start, end);
    console.log(currentData);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const ChangePage = (PageNumber: number) => {
        if (PageNumber >= 1 && PageNumber <= totalPages) {
            setPage(PageNumber);
        }
    };
    const Previous = () => {
        ChangePage(page - 1)
    }

    const Next = () => {
        ChangePage(page + 1);
    };

        const windowPageSize = 5
        const startPage = Math.max(1, page - Math.floor(windowPageSize/2))
        const endPage = Math.min(totalPages, startPage + windowPageSize - 1)
        const range = (start: number, end: number) => Array.from({length: end - start + 1}, (_, i) => start + i)
        const pageNumbers = range(startPage, endPage)
    return (
        <div className='pagination-back'>
            {currentData.map((res) => (
                <p key={res.id}>{res.title}</p>
            ))}
            <div className='pagination'>
                <button disabled={page === 1} onClick={Previous} className=''>
                    Previous
                </button>

                {/* {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        disabled={page === index + 1}
                        className=''
                        onClick={() => ChangePage(index + 1)}>
                        {index + 1}
                    </button>
                ))} */}
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        disabled={page === number}
                        className=''
                        onClick={() => ChangePage(number)}>
                        {number}
                    </button>
                ))}
                <button
                    disabled={page === totalPages}
                    onClick={Next}
                    className=''>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination
