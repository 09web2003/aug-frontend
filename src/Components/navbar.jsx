import img1 from "../../public/navbar_1.png"
import img2 from "../../public/navbar_2.png"
import img3 from "../../public/navbar_3.png"
export default function Navbar() {
    return (<div
        style={{
            width: "100%",
            height: "10vh",
            background: "#ED5353",
            borderBottomLeftRadius: "4rem",
            borderBottomRightRadius: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "2rem",
            position: "relative",
            fontWeight: "bold",
        }}
    >
        <>
            <div style={{
                position: "relative",
                zIndex: "10",
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                alignItems: "center",
                overflow: "hidden"
            }}>
                <p>Jobfinder</p>
                <div style={{
                    display: "flex",
                    gap: "2rem",
                }}>
                    <button style={{
                        background: "transparent",
                        color: "white",
                        border: "2px solid white",
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        borderRadius: "0.5rem",
                    }}>Login</button>
                    <button style={{
                        background: "white",
                        color: "#ED5353",
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        borderRadius: "0.5rem",
                        border: "none",
                    }}>Register</button>
                </div>

            </div>
            <img style={{
                position: "absolute",
                left: "0.6rem",
                bottom: "0rem",
                width: "20vw",
                height: "5vh",
            }} src={img1} alt="" />
            <img style={{
                position: "absolute",
                top: "0rem",
                width: "20vw"
            }} src={img2} alt="" />
            <img style={{
                position: "absolute",
                right: "3rem",
                top: "0rem",
                width: "20vw",
                height: "10vh",
            }} src={img3} alt="" />
        </>
    </div >)
}