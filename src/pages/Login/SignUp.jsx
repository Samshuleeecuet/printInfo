import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import { TbFidgetSpinner } from 'react-icons/tb'

const img_hosting_token = import.meta.env.VITE_Image_Upload;

const SignUp = () => {
    const {
        loading,
        setLoading,
        verifyEmail,
        createUser,
        updateUserProfile,
      } = useContext(AuthContext)
      const navigate = useNavigate()
      const location = useLocation()
      const from = location.state?.from?.pathname || '/'
      const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = ()=>{
        setShowPassword(!showPassword)
    }
      const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
      // Handle user registration
      const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const cuetId = event.target.cuetid.value 
       
        if(password.length<8){
          toast.error('Password Must be 8 Character')
        }
        // Image Upload
        const image = event.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)
        if(image){
          fetch(img_hosting_url, {
          method: 'POST',
          body: formData,
        })
          .then(res => res.json())
          .then(imageData => {
            const imageUrl = imageData.data.display_url
            console.log(imageUrl)
            createUser(email, password)
              .then(result => {
                updateUserProfile(name, imageUrl)
                  .then((result) => {
                    console.log('signup',result)
                    verifyEmail(result.user)
                    .then(()=>{
                      toast.success('Signup successful')
                      navigate(from, { replace: true })
                    })
                  })
                  .catch(err => {
                    setLoading(false)
                    console.log(err.message)
                    toast.error(err.message)
                  })
              })
              .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
              })
          })
          .catch(err => {
            setLoading(false)
            console.log(err.message)
            toast.error(err.message)
          })
        }else{
          createUser(email, password)
              .then(result => {
                updateUserProfile(name)
                  .then(() => {
                    verifyEmail(result.user)
                    .then(()=>{
                      toast.success('Signup successful')
                      navigate(from, { replace: true })
                    })
                  })
                  .catch(err => {
                    setLoading(false)
                    console.log(err.message)
                    toast.error(err.message)
                  })
              })
        }
      }

      return (
        <div className='flex justify-center items-center min-h-screen'>
          <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
            <div className='mb-8 text-center'>
              <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
              <p className='text-sm text-gray-400'>Welcome to PrinterInfo</p>
            </div>
            <form
              onSubmit={handleSubmit}
              noValidate=''
              action=''
              className='space-y-6 ng-untouched ng-pristine ng-valid'
            >
              <div className='space-y-4'>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter Your Name Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>
                <div>
                  <label htmlFor='image' className='block mb-2 text-sm'>
                     Photo
                  </label>
                  <input
                    type='file'
                    id='image'
                    name='image'
                    accept='image/*'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Email address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    required
                    placeholder='Enter Your Email Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>
                <div>
                  <label htmlFor='cuetid' className='block mb-2 text-sm'>
                    CUET ID
                  </label>
                  <input
                    type='text'
                    name='cuetid'
                    id='cuetid'
                    required
                    placeholder='Enter Your CUET ID Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>
                <div>
                  <div className='flex justify-between'>
                    <label htmlFor='password' className='text-sm mb-2'>
                      Password
                    </label>
                  </div>
                  <div className='flex'>
               <input
                    name='password'
                    id='password'
                    required
                    placeholder='*******'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' type={showPassword ? 'text' : 'password'}   />
               <span className='relative right-10 top-3 text-rose-500 text-2xl' onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}</span>
               </div>
        
                </div>
              </div>
    
              <div>
                <button
                  type='submit'
                  className='bg-rose-500 w-full rounded-md py-3 text-white'
                >
                  {loading ? (
                    <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                  ) : (
                    'Continue'
                  )}
                </button>
              </div>
            </form>
            
            <p className='px-6 text-sm text-center text-gray-400'>
              Already have an account?{' '}
              <Link
                to='/login'
                className='hover:underline hover:text-rose-500 text-gray-600'
              >
                Login
              </Link>
              .
            </p>
          </div>
        </div>
      )
};

export default SignUp;