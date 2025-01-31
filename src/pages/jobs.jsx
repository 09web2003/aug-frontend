import styles from '../styles/login.module.css'
import { addJob, getJob, updateJob } from '../services'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

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
    const [jobFetching, setJobFetching] = useState(false)
    const { id } = useParams()
    const editJob = id !== undefined
    const fetchJob = async () => {
        try {
            setJobFetching(true)
            const response = await getJob(id)
            const data = await response.json()
            // setFormData(data)
            setFormData({
                title: data.title,
                description: data.description,
                location: data.location,
                salary: data.salary,
                skills: data.skills.join(","),
                remote: data.remote
            })
            console.log(data)
            setJobFetching(false)
        } catch (error) {
            console.log(error)
            setJobFetching(false)
        }
    }
    const addJobHandler = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            if (editJob) {
                const response = await updateJob({ id, data: formData })
                if (response.ok) {
                    toast.success("Job updated successfully")
                }
            } else {
                const response = await addJob({ data: formData })
                if (response.ok) {
                    toast.success("Job added successfully")
                }
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
            setIsLoading(false)
        }
        finally {
            fetchJob()
        }
    }

    useEffect(() => {
        if (id) {
            fetchJob()
        }
    }, [id])
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
                {jobFetching ? <p>Fetching job...</p> :
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
                        }} type="submit" onClick={addJobHandler}>{isLoading ? (editJob ? "Updating job..." : "Creating job...") : (editJob ? "Update Job" : "Create Job")}</button>
                        {editJob && <button style={{
                            width: "40%",
                            background: "#ED5353",
                            color: "white",
                            borderRadius: "5px",
                            padding: "10px",
                            border: "none",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "1.1rem"
                        }} type="submit">Cancel</button>}
                    </form>
                }
            </div>
        </div>
        <div className={styles.rightContainer}></div>
    </div>
}