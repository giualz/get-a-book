import { useState } from "react"

export default function Select() {

    const genres = ["Combined Print and E-Book Fiction", "Combined Print and E-Book Nonfiction", "Hardcover Fiction", "Hardcover Nonfiction", "Trade Fiction Paperback", "Mass Market Paperback", "Paperback Nonfiction", "E-Book Fiction", "E-Book Nonfiction", "Hardcover Advice", "Paperback Advice", "Advice How-To and Miscellaneous", "Hardcover Graphic Books", "Paperback Graphic Books", "Manga", "Combined Print Fiction", "Combined Print Nonfiction", "Chapter Books", "Childrens Middle Grade", "Childrens Middle Grade E-Book", "Childrens Middle Grade Hardcover", "Childrens Middle Grade Paperback", "Paperback Books", "Picture Books", "Series Books", "Young Adult", "Young Adult E-Book", "Young Adult Hardcover", "Young Adult Paperback", "Animals", "Audio Fiction", "Audio Nonfiction", "Business Books", "Celebrities", "Crime and Punishment", "Culture", "Education", "Espionage", "Expeditions Disasters and Adventures", "Fashion Manners and Customs", "Food and Fitness", "Games and Activities", "Graphic Books and Manga", "Hardcover Business Books", "Health", "Humor", "Indigenous Americans", "Relationships", "Mass Market Monthly", "Middle Grade Paperback Monthly", "Paperback Business Books", "Family", "Hardcover Political Books", "Race and Civil Rights", "Religion Spirituality and Faith", "Science", "Sports", "Travel", "Young Adult Paperback Monthly"]

    async function submitHandler(e) {
        e.preventDefault()
        const date = '2022-11-20'
        const key = 'x9xFUfOuCzqe9NTpYZ2GYA5LktLUuTtF'
        const url = `https://api.nytimes.com/svc/books/v3/lists/${date}/Combined%20Print%20and%20E-Book%20Nonfiction.json?api-key=${key}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(e.target.text)
        // console.log(data)
        // console.log(genre)
    }

    // const [genre, setGenre] = useState()
    // const handleAddrTypeChange = (e) => console.log((setGenre[e.target.value]))
    return (
        <>
            <form onSubmit={submitHandler}>
                <p>Select a Genre:</p>
                <select name='genrelist' id='genrelist'>
                    {genres.map(item => { return (<option value={item} key={item}>{item}</option>) })}
                </select>
                <br />
                <input type='submit' value='Get a book' />
            </form>
        </>
    )
}