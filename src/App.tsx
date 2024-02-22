import React, { useState } from 'react'
import './App.css'

interface User {
  name: string;
  lastname: string; 
  gender: string;
  age: number;
}

function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState<User>();

function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }
function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const target = e.target as HTMLFormElement;

  const contactFormData = new FormData(target);
  const contactFormDataObject = Object.fromEntries(contactFormData.entries()
  ) as unknown as Omit<User, "age"> & {
    age: string;
  };
  console.log(contactFormDataObject);

  const userData = {
    name: contactFormDataObject.name,
    lastname: contactFormDataObject.lastname,
    gender: contactFormDataObject.gender,
    age: Number(contactFormDataObject.age),
  }
  setUser(userData);
}

  return (
    <>
      <input type="text" onChange={handleChangeName}/> <br />
      Input Value: {name}
      <hr />
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input name='name' id='name' type="text" />

          <label htmlFor="lastname">Lastname</label>
          <input name='lastname' id='lastname' type="text" />

          <label htmlFor="age">Age</label>
          <input name='age' id='age' type="number" />

          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">

            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <button>Submit</button>
        </div>
      </form>
      <br />
      <div>
        <div>Name: {user?.name}</div>
        <div>Lastname: {user?.lastname}</div>
        <div>Age: {user?.age}</div>
        <div>Gender: {user?.gender}</div>
      </div>
    </>
  )
}

export default App
