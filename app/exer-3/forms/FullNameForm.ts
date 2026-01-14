'use server'

type FormState = {
  message: string,
  error:string
}

export const generateFullNameAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  if(!firstName || !lastName){
    return {
      message:"",
      error:"names are required"
    }
  }

  return {
    message: `Hello, ${firstName} ${lastName}!`,
    error:""
  }
}
