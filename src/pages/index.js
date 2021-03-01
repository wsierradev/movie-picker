import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"


export default function Home() {
  return (
    <div>
      <Header/>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <Link to="/random/">Random Movie</Link>
      <Link to="/list/">Movie List</Link>
    </div>
  )
}