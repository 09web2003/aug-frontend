import styles from '../styles/login.module.css'
import { register } from '../services/index'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        terms: false
    })
    const registerHandler = async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            const response = await register({ data: formData })
            if (response.ok) {
                toast.success("Account created successfully")
                navigate("/login")
            } else {
                toast.error("Something went wrong")
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
            setIsLoading(false)
        }
    }
    return <div className={styles.container} style={{
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',

    }}>
        <div className={styles.leftContainer}>
            <div>
                <h1>Create an account?</h1>
                <h3 style={{
                    color: "#525252"
                }}>Your personal job finder is here</h3>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                }}>
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth: "400px",
                        borderRadius: "7px",
                        border: "1px solid #C2C2C2"
                    }} type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth: "400px",
                        borderRadius: "7px",
                        border: "1px solid #C2C2C2"
                    }} type="text" placeholder="Mobile" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth: "400px",
                        borderRadius: "7px",
                        border: "1px solid #C2C2C2"
                    }} type="text" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth: "400px",
                        borderRadius: "7px",
                        border: "1px solid #C2C2C2"
                    }} type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}>
                        <input type="checkbox" name="terms" id="terms" style={{
                            color: "#525252"
                        }} checked={formData.terms} onChange={(e) => setFormData({ ...formData, terms: e.target.checked })} />
                        <label htmlFor="terms">By creating an account, I agree to our terms of use and privacy policy
                        </label>
                    </div>

                    <button disabled={isLoading} style={{
                        width: "40%",
                        background: "#ED5353",
                        color: "white",
                        borderRadius: "5px",
                        padding: "10px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "1.1rem"
                    }} type="submit" onClick={registerHandler}>{isLoading ? "Creating account..." : "Create account"}</button>
                    <h3 style={{
                        color: "#525252"
                    }}>Already have an account? <span style={{
                        color: "black",
                        textDecoration: "underline",
                        textUnderlineOffset: "6px",
                        cursor: "pointer"
                    }}>Sign in?</span></h3>
                </form>
            </div>
        </div>
        <div className={styles.rightContainer}></div>
    </div>
}
