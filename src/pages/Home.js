import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { login } from '../utils/auth'
import { Button } from 'reactstrap'

export const Home = () => {

    const { push } = useHistory()

    const handleLogin = () => {
        login()
        push('/')
    }

    return (
        <MainLayout>
            This is main layout
            <Button onClick={handleLogin}>
                Login
            </Button>
        </MainLayout>
    )
}
