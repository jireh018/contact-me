import React, {useState} from 'react'
import FormInput from '../components/FormInput'
import axios from 'axios'
const initialState = {
    email:'',
    subject:'',
    html:'',
    status:'Send message',
    disableButton: false,
}

const Contact = () => {
    const [form, setForm] = useState(initialState)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        validateInput(e)
      }
    
      const validateInput = (e) => {
        const {name, value} = e.target
        
        switch (name) {
          case 'email':
            if(!value)
              console.log('Please enter Email!.')
            break;
          case 'subject':
            if(!value)
              console.log('Please enter Subject.')
            break;
          case 'message':
            if(!value){
              console.log('Please enter Message.')
            }
            break;
          default:
            break;
        }
      }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setForm({...form, status: 'Sending...', disableButton: true})
        try {
            const {data} = await axios.post(`/api/v1/contact-me`, form)
            setForm({...form, status: 'Sent!'})
            console.log('data', data.msg)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='flex justify-center'>
        <div className='m-auto mt-10 border border-t-[#19838b] bg-white rounded-lg shadow sm:max-w-md xl:p-0'>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact App</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Try it by sending a message to your mail.</p>
                    <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                        {/**Email */}
                        <FormInput 
                            name='email' 
                            type='email' 
                            value={form.email} 
                            handleChange={handleChange} 
                            validateInput={validateInput}
                            labelText='Your email'
                            placeholder='name@company.com'
                        />
                        {/**Subjec */}
                        <FormInput 
                            name='subject' 
                            type='text' 
                            value={form.subject} 
                            handleChange={handleChange} 
                            validateInput={validateInput}
                            labelText='Subject'
                            placeholder='Let me know how I can help you'
                        />
                        
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" name='html' rows="6"
                                onChange={handleChange} 
                                onBlur={validateInput}
                                value={form.html}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button 
                            type="submit"
                            disabled={form.disableButton}
                            className="w-100 bg-[#2cb1bc] hover:bg-[#19838b] py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                {form.status}
                            </button>
                    </form>
                </div>
            </section>
        </div>
    </div>
    
  )
}

export default Contact