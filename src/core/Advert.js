import React, { useState, useEffect } from "react";

import { getAdvert } from './api/advert'
import { getBreadCrumbs } from './api/utils'

import MainLayout from './MainLayout';
import AdvertCard from './AdvertCard';
import BreadCrumbs from './BreadCrumbs'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

const Advert = (props) => {
    const [advertData, setAdvertData] = useState()
    const [error, setError] = useState()

    const callGetAdvert = () => {
        const advertId = props.match.params.advertId    // This gets the ID from the URL in the router
        console.log(`advertId: ${advertId}`)
        getAdvert(advertId)
            .then(data => {
                if (!data) {
                    setError('Connection Error!')
                } else if (data.error) {
                    setError(data.error)
                } else setAdvertData(data)
            })

    }

    useEffect(() => {
        callGetAdvert()
    }, [])

    const showError = () => {
        return (
            <p>{error}</p>
        )
    }

    const showData = () => {
        if (advertData)
            return (
                <div>
                    <h1>{advertData.title}</h1>
                    <h3>${advertData.price.toFixed(2)}</h3>
                    {showBreadCrumbs()}
                    <div className="advert-location-date">
                        <p><span>Location: TBA</span><span className="ml-5">Date Listed: {advertData.createdAt.substring(0, 10)}</span></p>
                    </div>
                    <div className="advert-description mt-2">
                        <p>{advertData.description}</p>
                    </div>
                    <Button variant="danger mb-2">Contact Seller</Button>
                    {/* <p>{JSON.stringify(advertData)}</p> */}
                </div>
            )
    }

    const showBreadCrumbs = () => {
        if (advertData)
            return (
                <div>
                    <BreadCrumbs categories={advertData.category.ancestors} />
                </div>
            )
    }

    const showImageCarousel = () => {
        if (advertData) {
            if (!advertData.images[0]) {
                return (
                    <div>
                        <img
                            className="d-block w-100"
                            src="/img/no-image.jpg"
                            alt="First slide"
                        />
                    </div>
                )
            } else {
                return (
                    <div>
                        <Carousel>
                            {
                                advertData.images.map((image, i) =>
                                    (
                                        <Carousel.Item key={i}>
                                            <img
                                                className="d-block w-100"
                                                src={image}
                                                alt="Mountain bike part"
                                            />
                                        </Carousel.Item>
                                    )
                                )
                            }
                        </Carousel>
                    </div>
                )
            }
        }
    }

    return (
        <MainLayout>
            <Container>
                <Row className="bg-light">
                    <Col>{showBreadCrumbs()}</Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="advert-images">
                        {showImageCarousel()}
                    </Col>
                    <Col className="advert-information">
                        {showError()}
                        {showData()}
                    </Col>
                </Row>
            </Container>

        </MainLayout>
    )
}

export default Advert