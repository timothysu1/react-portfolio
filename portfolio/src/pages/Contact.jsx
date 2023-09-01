export default function Contact() {

  const handFormSubmit = (e) => {
    e.preventDefult();


  }


  return (
    <>
      <div>
        <form className="form" action="mailto:t6026314@gmail.com">
          <input value={name}
            name='name'
            type="text"
            placeholder="Name"
          />
          <input value={name}
            name='email'
            type="text"
            placeholder="Email"
          />
          <input value={name}
            name='message'
            type="text"
            placeholder="Message"
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </>

  )
}