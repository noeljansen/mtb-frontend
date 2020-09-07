import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom'

import { getBreadCrumbs } from './api/utils'

import BreadCrumbs from './BreadCrumbs'

// react-bootstrap components
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const AdvertCard = ({ advert }) => {

    const displayAncestors = (categories) => {
        const breadCrumbs = getBreadCrumbs(categories)
        return (
            <div className='advert-card-breadcrumbs'>
                <BreadCrumbs categories={categories} />
            </div>
        )
    }

    const displayImage = (images) => {
        if (!images[0]) {
            return "/img/no-image.jpg"
        } else return images[0]
    }

    return (
        <div >
            <Card>
                <Card.Header as="h5">{advert.title}</Card.Header>
                <Card.Img variant="top" src={displayImage(advert.images)} />
                <Card.Body>
                    <Card.Title>${advert.price.toFixed(2)}</Card.Title>
                    <Card.Text>
                        {advert.description}
                    </Card.Text>
                    <Link to={`/ads/${advert._id}`}>
                        <Button variant="success">View Ad</Button>
                    </Link>
                </Card.Body>
                <Card.Footer>{displayAncestors(advert.category.ancestors)}</Card.Footer>
            </Card >
        </div >
    )
}

export default AdvertCard