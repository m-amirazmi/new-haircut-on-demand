import React from 'react'
import { BarberCard } from './BarberCard'
import { Row, Col } from 'reactstrap'

export const BarberList = () => {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <BarberCard />
                </Col>
                <Col md={6}>
                    <BarberCard />
                </Col>
                <Col md={6}>
                    <BarberCard />
                </Col>
                <Col md={6}>
                    <BarberCard />
                </Col>
                <Col md={6}>
                    <BarberCard />
                </Col>
                <Col md={6}>
                    <BarberCard />
                </Col>
                <Col md={6}>
                    <BarberCard />
                </Col>
                <Col md={6}>
                    <BarberCard />
                </Col>
            </Row>
        </div>
    )
}
