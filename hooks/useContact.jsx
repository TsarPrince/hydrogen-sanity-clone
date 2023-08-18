import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { init } from 'emailjs-com'
init('LyVl771Thy7bdQNK2')
import { useState } from 'react'

export default function useContact() {
  const initialState = {
    phone: '',
    email: '',
    home: '',
    message: '',
  }
  const [formData, setFormData] = useState(initialState)
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send('service_klc1ubt', 'template_k0lzk21', {
        phone: formData.phone,
        email: formData.email,
        home: formData.home,
        message: formData.message,
      })
      .then(() => {
        setLoading(false)
        setFormData(initialState)
        Swal.fire('Great!', "We'll get in touch!", 'success')
      })
      .catch((e) => {
        console.log(e)
        setLoading(false)
        Swal.fire('Oops!', 'Failed to submit form, Please Try again!', 'error')
      })
  }
  return { setFormData, isLoading, handleSubmit, formData }
}
