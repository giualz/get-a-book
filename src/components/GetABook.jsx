import { render } from "react-dom";
export default function GetABook() {

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

    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type='submit' value='Get a book' />
            </form>
        </>
    )

}