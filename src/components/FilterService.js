import React, { useState } from 'react'

export default function FilterService() {
  const [serviceList, setServiceList] = useState([
    { id: '1', name: 'men\'s haircut' },
    { id: '2', name: 'haircut machine' },
    { id: '3', name: 'beard haircut' },
    { id: '4', name: 'stacking' },
    { id: '5', name: 'hairstyling' },
    { id: '6', name: 'hair + beard haircut' },
    { id: '7', name: 'razor shave' },
    { id: '8', name: 'beard / head camo' }
  ])

  const [serviceSelected, setServiceSelected] = useState([])

  const [openDropdown, setOpenDropdown] = useState(true)

  const selectService = ({ target }) => {
    const selected = serviceList.find((service) => service.id === target.id)
    const findInSelected = serviceSelected.find((service) => service.id === target.id)
    const copyServiceSelected = [...serviceSelected]
    if (!findInSelected) {
      copyServiceSelected.push(selected)
      setServiceSelected(copyServiceSelected)
    }

    if (!!findInSelected) {
      const filtered = copyServiceSelected.filter((service) => service.id !== target.id)
      setServiceSelected(filtered)
    }
  }

  const renderServiceTitle = () => {
    const icon = openDropdown ? 'bi-chevron-down' : 'bi-chevron-up'
    return (
      <div className='d-flex flex-row align-items-center'>
        <h5>Type of service</h5>
        <i className={`bi ${icon} ms-auto fs-5`} onClick={() => setOpenDropdown(!openDropdown)}></i>
      </div>
    )
  }

  const renderServiceList = () => serviceList.map(({ id, name }) => {
    const icon = serviceSelected.find((service) => service.id === id) ? 'bi-circle-fill text-primary' : 'bi-circle'
    return (
      <div key={id} className='ms-2 my-2 d-flex flex-row __filter_service'>
        <p className='text-capitalize'>{name}</p>
        <i id={id} className={`bi ${icon} ms-auto`} onClick={selectService} />
      </div>
    )
  })

  const renderService = () => {
    return (
      <div>
        {renderServiceList()}
      </div>
    )
  }

  return (
    <div className='mb-4'>
      {renderServiceTitle()}
      {openDropdown && renderService()}
    </div>
  )
}
