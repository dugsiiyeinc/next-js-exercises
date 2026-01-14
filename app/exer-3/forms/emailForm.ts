'use server'

type FormState = {
  message: string,
  error:string
}

export const generateEmailAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const email = formData.get("email") as string;

  if(!email || email.trim()===""){
    return {
      message:"",
      error:"email is required"
    }
  }

  return {
    message: `thanks for submitting, ${email}!`,
    error:""
  }
}
