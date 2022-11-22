import { useState } from "react";
import styled from 'styled-components'

export default function GetABook() {

    const [author, setAuthor] = useState([]);
    const [title, setTitle] = useState([]);
    const [cover, setCover] = useState([])
    const [link, setLink] = useState([])

    async function submitHandler(e) {
        e.preventDefault()
        const date = '2022-11-20'
        const key = 'x9xFUfOuCzqe9NTpYZ2GYA5LktLUuTtF'
        const url = `https://api.nytimes.com/svc/books/v3/lists/${date}/Combined%20Print%20and%20E-Book%20Fiction.json?api-key=${key}`;
        const res = await fetch(url);
        const data = await res.json();
        const books = data.results.books
        const list = []
        books.forEach(item => {
            list.push({ author: item.author, title: item.title, cover: item.book_image, link: item.amazon_product_url })
        })
        const randomId = Math.floor(Math.random() * 15)
        const randomBook = list[randomId]
        console.log(list)
        console.log(randomId)
        console.log(randomBook)
        // setItems(randomBook);
        setAuthor(randomBook.author);
        setTitle(randomBook.title);
        setCover(randomBook.cover);
        setLink(randomBook.link);
    }

    return (
        <>
            <SForm onSubmit={submitHandler}>
                <SInput type='submit' value='Get a book' />
                {<div>
                    <a href={link}><img src={cover} alt={title} /></a>
                </div>}
            </SForm>
        </>
    )

}

const SForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center
`
const SInput = styled.input`
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
`
