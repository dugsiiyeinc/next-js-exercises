'use server'

type FormState = {
  message: string,
  error:string
}

export const generatePasswordAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const password = formData.get("password") as string;

  if(password.length<6){
    return {
      message:"",
      error:"password must be at least 6 characters"
    }
  }

  return {
    message: `Your password is correct`,
    error:""
  }
}
