import React from "react"
import Card from 'react-bootstrap/Card';
function Cards(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.location}</Card.Subtitle>
                <Card.Text>{props.price}</Card.Text>
                <Card.Text>{props.minimum_nights}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards