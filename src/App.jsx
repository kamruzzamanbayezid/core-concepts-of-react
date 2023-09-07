import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Books from './Books'
import Recap from './Recap'


function App() {
  const actors = ['Sakib khan', 'Raj', 'Bapparaj', 'Joshim', 'Maruf', 'Eliyas kanchon'];

  const singers = [
    { name: 'Imran', age: 32 },
    { name: 'Anirud', age: 22 },
    { name: 'Sonu Nigam', age: 42 },
    { name: 'Arijit Sing', age: 50 },
    { name: 'Honey Sing', age: 40 }
  ]

  const books = [
    { id: 1, name: 'Bangla', price: 300 },
    { id: 2, name: 'English', price: 200 },
    { id: 3, name: 'Math', price: 400 },
    { id: 4, name: 'Biology', price: 600 }
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <Recap course="JavaScript" isDone={true}></Recap>
      <Recap course="React" isDone={false}></Recap>
      <Recap course="HTML" isDone={true}></Recap>
      <Recap course="CSS" isDone={false}></Recap>

      {/* {
        books.map(book=> <Books book={book}></Books>)
      } */}

      {/* <Singer name="Imran" age="32"></Singer> */}

      {/* {
        singers.map(singer => <Singer singer={singer}></Singer>)
      } */}

      {/* <Actor name="Salman Khan"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn Js" isDone={false}></Todo>
      <Todo task="Learn HTML" isDone={true}></Todo> */}
      {/* <Todo task="Learn React" isDone="{true}"></Todo>
      <Todo task="Learn Js" isDone="{false}"></Todo>
      <Todo task="Learn HTML" isDone="{true}"></Todo> */}
      {/* <Products name="Kola" quantity="10"></Products>
      <Products name="Mola" quantity="12"></Products>
      <Products name="Dola" quantity="22"></Products>
      <Device name="Laptop" price="50"></Device>
      <Device name="Mobile" price="30"></Device>
      <Device name="Watch" price="10"></Device>
      <Person></Person>
      <Student></Student>
      <Teacher></Teacher>
      <Items product="Shirt" brand="Aarong"></Items>
      <Items product="Pant" brand="Easy"></Items>
      <Items></Items> */}
    </>
  )
}

function Items({ product = 'Not Found', brand = 'Not Found' }) {
  return (
    <div style={{
      border: '2px solid tomato'
    }}>
      <h3>Item: {product}</h3>
      <h4>Brand: {brand}</h4>
    </div>
  )
}

function Products(promps) {
  const { name, quantity } = promps;
  return (
    <div style={{
      border: '2px solid violet'
    }}>
      <h3>Products Name: {name}</h3>
      <h4>Products Quantity: {quantity}</h4>
    </div>
  )
}

function Device(prompt) {
  return <h3 style={{
    border: '2px solid green'
  }}>Device Name: {prompt.name}</h3>
}

function Person() {
  const person = {
    name: 'sakib',
    age: 32
  }
  return (
    <div className='person'>
      <h3>My name is {person.name}.</h3>
      <h4>I am {person.age} years old.</h4>
    </div>
  )
}

function Student() {
  const identity = {
    name: 'rakib',
    age: 24,
    favSub: ['bangla', 'english'],
    address: {
      street: 'uttor goli',
    }
  }
  const studentStyle = {
    marginTop: '10px',
    borderRadius: '10px',
    border: '2px solid yellow'
  }
  return (
    <div style={studentStyle}>
      <h3>This is {identity.name}</h3>
      <h4>I'm {identity.age}</h4>
      <h5>My favorite subject is{identity.favSub[1]}</h5>
      <h5>I lived in {identity.address.street}</h5>
    </div>
  )
}

function Teacher() {
  const teacher = {
    name: 'musaraf',
    age: 26
  }

  return <h3 style={{
    background: 'gray',
    margin: '10px',
    padding: '10px'
  }}>My name is {teacher.name}. I am {teacher.age}</h3>
}

export default App
