'use client'

import { useActionState } from "react";
import { generateFullNameAction } from "../forms/FullNameForm";

const initialMessage={
  message:"",
  error:""
}

const FullNameForm = () => {

  const [state,formAction]=useActionState(generateFullNameAction,initialMessage)
  
  return (
    <form action={formAction}>
      <input type="text" name="firstName" placeholder="enter a first name"/>
      <input type="text" name="lastName" placeholder="enter a last name"/>
      <button type="submit">Submit</button>

      {
        state.message && (
          <p className="text-sky-500">{state.message}</p>
        )
      }
      {
        state.error && (
          <p className="text-red-500">{state.error}</p>
        )
      }
    </form>
  )
}

export default FullNameForm
