import React from "react";
import Navbar from "../Components/navbar";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function Listing() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          height: "20vh",
          width: "80vw",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: " #FF202040 0px 3px 8px",
          textAlign: "center",
          marginTop: "2rem",
          paddingTop: "2rem",
        }}
      >
        <div
          style={{
            border: "1px solid #E3E3E3",
            width: "65vw",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "1rem",
            display: "flex",
            padding: "0.5rem",
            alignItems: "center",
          }}
        >
          <HiMiniMagnifyingGlass
            style={{
              fontSize: "2rem",
            }}
          />
          <input
            style={{
              width: "63vw",
              border: "none",
              height: "3rem",
              fontSize: "1.5rem",
              color: "#9C9C9C",
            }}
            type="text"
            name=""
            placeholder="Type any job title"
          />
        </div>
        <div
          style={{
            marginTop: "1.8em",
            display:"flex",
            marginLeft:"6.5em",
            justifyContent:"space-between",
            

          }}
        >
          <div>
          <select
            style={{
              padding: "0.3em 1.4em",
              borderRadius: "6px",
              border: "3px solid rgba(227, 227, 227, 0.8)",
            }}
          >
            <option value="skill">skill</option>
          </select>
            <span
              style={{
                border: "none",
                padding: "0.5em 1em",
                background: "#FF202025",
                color: "black",
                marginLeft:"1rem"
               
              }}
            >
              Frontend
            </span>
            <button style={{
              padding:"0.4em 0.5em",
              color:"white",
              fontSize:"1em",
              background: "#ED5353",
              border:"none",
              fontWeight:"bold"
            }}>x</button>
            <span style={{
                border: "none",
                padding: "0.5em 1em",
                background: "#FF202025",
                color: "black",
                marginLeft:"1rem"
               
              }}>css</span>
            <button style={{
              padding:"0.4em 0.5em",
              color:"white",
              fontSize:"1em",
              background: "#ED5353",
              border:"none",
              fontWeight:"bold"}}
            >x</button>
          </div>
          <div style={{
            marginRight:"5.5rem"
          }}>
          <button style={{
                        background: "#ED5353",
                        color: "white",
                        border: "2px solid white",
                        padding: "0.2rem 1rem",
                        fontSize: "0.9rem",
                        borderRadius: "0.5rem",
                    }}>Apply Filter</button>
                    <button style={{
                        background: "white",
                        color: "#ED5353",
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                        borderRadius: "0.5rem",
                        border: "none",
                    }}>Clear</button>
          </div>
        </div>
       




      </div>
    </div>
  );
}
