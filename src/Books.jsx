import { useState } from "react";
import axios from "axios";
import styles from "./Books.module.css";

export function Books() {
  const [books, setBooks] = useState([]);

  async function handleLoadData() {
    try {
      const response = await axios.get(
        "https://openlibrary.org/search.json?q=the+lord+of+the+rings&author=Tolkien"
      );
      console.log(response.data.docs);
      setBooks(response.data.docs);
    } catch (err) {
      console.log("something went wrong");
    }
  }

  return (
    <>
      <button onClick={handleLoadData}>YOU SHALL NOT PASS</button>
      <ul>
        {books.map((book, index) => {
          return (
            <li key={index} className={styles.title}>
              <p>Titel: {book.title}</p>
              <p>Ausgabe: {book.edition_count}</p>
              <p>Autor: {book.author_name}</p>
              <p>Cover: {book.cover_i} </p>
              <p>Erscheinungsjahr: {book.first_publish_year} </p>
              <p>{book.key} </p>
              <p>{book.author_key} </p>
              <p>{book.public_scan_b} </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
