import Book from "./Book";

export default function Books({ book }) {
      const { id, name, price } = book;
      return (
            <div style={{
                  border: '2px solid red',
                  margin: '10px'
            }}>
                  <h2>Book Id: {id}</h2>
                  <Book name={name} price={price}></Book>
            </div>
      )
}