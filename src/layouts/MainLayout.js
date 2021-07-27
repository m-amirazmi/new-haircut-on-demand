import React from 'react'
import { TopNav } from '../components/generals/TopNav'

export const MainLayout = (props) => {
    return (
        <div>
            <TopNav />
            {props.children}
        </div>
    )
}
