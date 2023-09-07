import './Book.css'

export default function Book({name,price }){
      return (
            <div className='book'>
                  <h3>Book Name: {name}</h3>
                  <h4>Price: {price}</h4>
            </div>
      )
}