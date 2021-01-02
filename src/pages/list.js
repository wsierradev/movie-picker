import React from "react"
import Header from "../components/header"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"


export default function List() {
  return (
    <div>
      <Header headerText="Movie List"  />
      <Header headerText="It's pretty cool" />
  
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
  )
}