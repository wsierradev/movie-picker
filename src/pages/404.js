import React from "react"
import { Link } from "gatsby"


export default function Home() {
  return (
    <div>
      <p>You took a wrong turn.</p>
      <Link to="/index/">Movie List</Link>
    </div>
  )
}