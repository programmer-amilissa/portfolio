import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset} from '../features/auth/authSlice'
import { FaUser } from 'react-icons/fa'
import Spinner from '../components/Spinner' 

function Register() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobilenumber: '',
        password: '',
        password2: ''
    })

    const { firstname, lastname, email, mobilenumber, password, password2 } = formData


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/dashboard')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
    
        if(password !== password2){
            toast.error('Passwords do not match')
        }else{
            const userData = {
                firstname,
                lastname,
                mobilenumber,
                email,
                password
            }
            dispatch(register(userData))
        }
    }
    
      if (isLoading) {
        return <Spinner />
      }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>
                    Please create an account
                </p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            value={firstname}
                            placeholder="Enter your First name"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastname"
                            value={lastname}
                            placeholder="Enter your Last name"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your Email Address"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="mobilenumber"
                            name="mobilenumber"
                            value={mobilenumber}
                            placeholder="Enter your Mobile number"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter Password"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password2"
                            name="password2"
                            value={password2}
                            placeholder="Confirm Password"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-block'>
                        Create Account
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register