import React from 'react'
import { Card } from 'react-bootstrap'
type StoreItemProps = {
    id: number
    name: string
    price: Number
    imgUrl: string
}

const StoreItems = ({ id, name, price, imgUrl }: StoreItemProps) => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>

                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default StoreItems