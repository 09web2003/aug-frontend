import styles from '../styles/login.module.css'
import { login } from '../services'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
export default function Login() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    console.log(token)
    if (token) {
        navigate("/listing")
    }
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const loginHandler = async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            const response = await login({ data: formData })
            if (response.ok) {
                toast.success("Login successful")
                const data = await response.json()
                localStorage.setItem("token", data.token)
                navigate("/jobs")
            }
            setIsLoading(false)
        }
        catch (error) {
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
                <h1>Already have an account?</h1>
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
                        borderRadius: "7px",
                        border: "1px solid #C2C2C2"
                    }} type="text" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <input style={{
                        padding: "10px",
                        borderRadius: "7px",
                        border: "1px solid #C2C2C2"
                    }} type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    <button style={{
                        width: "40%",
                        background: "#ED5353",
                        color: "white",
                        borderRadius: "5px",
                        padding: "10px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "1.1rem"
                    }} type="submit" disabled={isLoading} onClick={loginHandler}>{isLoading ? "Loading..." : "Sign in"}</button>
                    <h3 style={{
                        color: "#525252"
                    }}>Don&apos;t have an account? <span style={{
                        color: "black",
                        textDecoration: "underline",
                        textUnderlineOffset: "6px",
                        cursor: "pointer"
                    }}>Sign up?</span></h3>
                </form>
            </div>
        </div>
        <div className={styles.rightContainer}></div>
    </div>
}
