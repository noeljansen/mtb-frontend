import React, { useState, useEffect } from "react";

import { getAdverts } from './api/advert'

import MainLayout from './MainLayout';
import AdvertCard from './AdvertCard';

// react-bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Home = () => {


    const [latestAds, setLatestAds] = useState([])
    const [error, setError] = useState(false)

    const updateLatestAds = () => {
        getAdverts()
            .then(data => {
                if (!data) {
                    setError('Connection Error!')
                } else if (data.error) {
                    setError(data.error)
                } else setLatestAds(data)
            })
    }

    useEffect(() => {
        updateLatestAds()
    }, [])

    return (
        <div className="home">
            < MainLayout >
                <Container >
                    <Jumbotron>
                        <h1>Bicycle and Bike Parts Classifieds</h1>
                        <p>
                            Looking to selling your bicycle? Extra parts no longer needed? Why not sell them?
                    </p>
                        <p> Looking for a used bike? Parts to upgrade your ride? Find them here!</p>
                    </Jumbotron>
                    <Row>
                        <Col>
                            <h2>Latest Adverts</h2>
                        </Col>
                    </Row>
                    <Row lg={3}>

                        {latestAds.map((advert, i) =>
                            (
                                <Col key={i} className='advert-card-holder mb-3'>
                                    < AdvertCard advert={advert} />

                                </Col>
                            )

                        )}
                    </Row>

                    <Row>
                        <Col>
                            <h2>View Categories</h2>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
                        <Col>
                            Coming soon!
                        </Col>
                    </Row>

                </Container>
            </MainLayout >
        </div>
    )

}

export default Home;