import { useState } from 'react'
import FilterBarberGender from './FilterBarberGender'
import FilterPrice from './FilterPrice'
import FilterService from './FilterService'

export const HomeFilter = () => {
    const [showFilter, setShowFilter] = useState(true)

    const renderTitle = () => {
        const icon = showFilter && 'text-primary'
        return (
            <div className='d-flex align-items-center __filter_header'>
                <h4>Filter Service</h4>
                <h4 className={`ms-auto ${icon}`}><i className="bi bi-filter" onClick={() => setShowFilter(!showFilter)} /></h4>
            </div>
        )
    }

    const renderContent = () => {
        if (showFilter) return (
            <div className='mt-3 __filter_content'>
                <FilterService />
                <FilterPrice />
                <FilterBarberGender />
            </div>
        )
    }

    return (
        <div className='mt-2 card card-body bg-light __filter'>
            {renderTitle()}
            {renderContent()}
        </div>
    )
}
