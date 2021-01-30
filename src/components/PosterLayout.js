import React from "react"
import Image from "react-bootstrap/Image"
import Col from "react-bootstrap/Col"

export default function PosterLayout(props) {
  return (
    <Col>
      <Image
        style={{ height: "48vw" }}
        src={props.Poster}
        alt={props.Title}
        rounded
      />
    </Col>
  )
}
