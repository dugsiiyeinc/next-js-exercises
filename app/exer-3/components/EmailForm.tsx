'use client'

import { useActionState } from "react";
import { generateEmailAction } from "../forms/emailForm";

const initialMessage={
  message:"",
  error:""
}

const EmailForm = () => {

  const [state,formAction]=useActionState(generateEmailAction,initialMessage)
  
  return (
    <form action={formAction}>
      <input type="email" name="email" placeholder="enter an email"/>
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

export default EmailForm
