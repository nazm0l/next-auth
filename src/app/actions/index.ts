'use server'

export async function doLogin(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')
  console.log(email, password)
}