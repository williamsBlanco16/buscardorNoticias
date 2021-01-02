import React from 'react'
import Form from './Form'
import Header from './Header'
export default function App() {
  return (
    <>
      <Header
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Form/>
      </div>
    </>
  )
}
