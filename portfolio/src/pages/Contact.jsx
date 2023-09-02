import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [field, setField] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setName('')
      setEmail('')
      setMessage('')
      setField("Message Sent!")
    } else {
      setField('Please Fill Out All Fields')
    }

  }
  const validField = (e) => {
    let fieldMessage = ''
    if (!e.target.value) {
      if (e.target.id == 'nameInput') {
        fieldMessage = 'Name Required'
      } else if (e.target.id == 'emailInput') {
        fieldMessage = 'Email Required'
      } else if (e.target.id == 'messageInput') {
        fieldMessage = 'Message Required'
      }
    }
    setField(fieldMessage)
  }

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'nameInput':
        setName(e.target.value)
        break;
      case 'emailInput':
        setEmail(e.target.value)
        break;
      case 'messageInput':
        setMessage(e.target.value)
        break;
    }
  }

  return (
    <>
      <div className="row justify-content-center" >
        <form onSubmit={handleFormSubmit} onBlur={validField} className="form col-5">
          <div className="mb-2">
            <label htmlFor="nameInput" className="form-label">Name:</label>
            <input value={name}
              name='name'
              type="text"
              id="nameInput"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="emailInput" className="form-label">Email:</label>
            <input value={email}
              name='email'
              type="email"
              id="emailInput"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="messageInput" className="form-label">Message:</label>
            <textarea value={message}
              name='message'
              type="text"
              id="messageInput"
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary my-2">
            Submit
          </button>
          {field && (
            <div className="mb-2 text-danger">
              *{field}
            </div>
          )}
        </form>
      </div>
    </>

  )
}