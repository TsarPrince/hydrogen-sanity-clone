import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { init } from 'emailjs-com'
init('3GMfbhK_wWvhtTDCO')
import { useState } from 'react'

export default function useContact() {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    propertyaddress: '',
    message: '',
  }
  const [formData, setFormData] = useState(initialState)
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send('wilenhomes', 'template_txjwpek', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        propertyaddress: formData.propertyaddress,
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
