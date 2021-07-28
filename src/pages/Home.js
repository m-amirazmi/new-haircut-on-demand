import React from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { HomeFilter } from '../components/HomeFilter'
import { FilterLocation } from '../components/FilterLocation'
import { BarberList } from '../components/BarberList'
import { Container, Row, Col } from 'reactstrap'
import styles from '../assets/css/Home.module.css'

export const Home = () => {

    return (
        <MainLayout>
            <Container className={styles.content}>
                <Row>
                    <Col md={3}>
                        <div className={styles.sidebar}>
                            <HomeFilter />
                        </div>
                    </Col>
                    <Col md={9}>
                        <FilterLocation />
                        <BarberList />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}
