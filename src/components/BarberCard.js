import React from 'react'

export const BarberCard = () => {

  const renderAvatar = () => {
    return (
      <div className='d-flex align-items-center'>
        <i className="bi bi-person-circle fs-1"></i>
        <div className='ms-auto'>
          <p>from <span className='fs-4'>RM20.00</span></p>
        </div>
      </div>
    )
  }

  const renderBarberName = () => {
    return (
      <div className='d-flex align-items-center fs-4'>
        <p className=''>Muhamad Amir</p>
        <div className='ms-auto d-flex align-items-center text-primary'>
          <i className="bi bi-star-fill mx-1 fs-6"></i>
          <p className='fs-6 mx-1'>5.00</p>
          <p className='fs-6'>(364 clients)</p>
        </div>
      </div>
    )
  }

  const renderRegion = () => {
    return (
      <div className='__barber_card_region'>
        <p>Ampang, Selangor</p>
      </div>
    )
  }

  const renderServiceTag = () => {
    return (

      <div className='mt-auto'>
        <div>
          <p className='__text_gray'>Top Service Offered:</p>
        </div>
        <div>

          <span className='badge rounded-pill text-secondary border border-secondary text-capitalize me-1'>men's haircut</span>
          <span className='badge rounded-pill text-secondary border border-secondary text-capitalize me-1'>men's haircut</span>
          <span className='badge rounded-pill text-secondary border border-secondary text-capitalize me-1'>men's haircut</span>
        </div>
      </div>
    )
  }

  const renderButtons = () => {
    return (
      <div className='d-flex mt-3'>
        <button className='btn btn-outline-primary w-100'>Book Now</button>
        <button className='btn btn-white border-0 w-100'>More Info</button>
      </div>
    )
  }

  return (
    <div className='mb-4 d-flex flex-column card card-body bg-light __barber_card'>
      {renderAvatar()}
      {renderBarberName()}
      {renderRegion()}
      {renderServiceTag()}
      {renderButtons()}
    </div>
  )
}
