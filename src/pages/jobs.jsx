import styles from '../styles/login.module.css'
import { addJob } from '../services'
import { useState } from 'react'
import toast from 'react-hot-toast'
export default function Jobs() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        salary: "",
        skills: "",
        remote: ""
    })
    const addJobHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const response = await addJob({ data: formData })
        if (response.ok) {
            toast.success("Job added successfully")
        }
        setIsLoading(false)
    }
    return <div className={styles.container} style={{
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'start',
        height: '100vh',
        width: '100vw',

    }}>
        <div className={styles.leftContainer}>
            <div>
                <h1>Add Job Description</h1>

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
                    }} type="text" placeholder="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth: "400px",
                        borderRadius: "7px",
                        border: "1px solid #C2C2C2"
                    }} type="text" placeholder="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth: "400px",
                        borderRadius: "7px",
                        border: "1px solid #C2C2C2"
                    }} type="text" placeholder="location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth: "400px",
                        borderRadius: "7px",
                        border: "1px solid #C2C2C2"
                    }} type="text" placeholder="salary" value={formData.salary} onChange={(e) => setFormData({ ...formData, salary: e.target.value })} />
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth: "400px",
                        borderRadius: "7px",
                        border: "1px solid #C2C2C2"
                    }} type="text" placeholder="skills" value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value })} />
                    <select style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth: "400px",
                        borderRadius: "7px",
                        border: "1px solid #C2C2C2"
                    }} value={formData.remote} onChange={(e) => setFormData({ ...formData, remote: e.target.value })}>
                        <option value="">Remote</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>


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
                    }} type="submit" onClick={addJobHandler}>{isLoading ? "Creating job..." : "Create Job"}</button>
                </form>
            </div>
        </div>
        <div className={styles.rightContainer}></div>
    </div>
}