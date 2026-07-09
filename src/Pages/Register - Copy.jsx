import React from 'react'

function Register() {
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted");
};

  return (
   <div className="join-section">
  <h1>Ready to join us?</h1>

  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
      />
    </div>

    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />
    </div>

    <button type="submit">Join Now</button>
  </form>
</div>
  )
}

export default Register;
