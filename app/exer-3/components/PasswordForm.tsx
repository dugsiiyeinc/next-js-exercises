'use client'

import { useActionState } from "react";
import { generatePasswordAction } from "../forms/PasswordForm";

const initialMessage={
  message:"",
  error:""
}

const PasswordForm = () => {

  const [state,formAction]=useActionState(generatePasswordAction,initialMessage)
  
  return (
    <form action={formAction}>
      <input type="password" name="password" placeholder="enter a password"/>
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

export default PasswordForm
