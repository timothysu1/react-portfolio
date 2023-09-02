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
      <div>
        <form className="form" onSubmit={handleFormSubmit} onBlur={validField}>
          <div>
            <label htmlFor="nameInput">Name:</label>
            <input value={name}
              name='name'
              type="text"
              id="nameInput"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="emailInput">Email:</label>
            <input value={email}
              name='email'
              type="email"
              id="emailInput"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="messageInput">Message:</label>
            <textarea value={message}
              name='message'
              type="text"
              id="messageInput"
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">
            Submit
          </button>
          {field && (
            <div>
              {field}
            </div>
          )}
        </form>
      </div>
    </>

  )
}