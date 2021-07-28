import { useState } from 'react'

export default function FilterPrice() {

  const [openDropdown, setOpenDropdown] = useState(true)
  const [price, setPrice] = useState(20)

  const selectPrice = ({ currentTarget }) => setPrice(currentTarget.value)

  const renderPriceTitle = () => {
    const icon = openDropdown ? 'bi-chevron-down' : 'bi-chevron-up'
    return (
      <div className='d-flex flex-row align-items-center'>
        <h5>Pricing</h5>
        <i className={`bi ${icon} ms-auto fs-5`} onClick={() => setOpenDropdown(!openDropdown)}></i>
      </div>
    )
  }

  const renderPriceSlider = () => {
    return (
      <div className='mt-2 ms-2'>
        <label for="customRange1" className="form-label d-flex flex-row align-items-center w-100">
          <p>Max Price</p>
          <p className='ms-auto border border-primary px-3 py-1 rounded-3 text-primary'>RM {price}.00</p>
        </label>
        <input type="range" className="form-range __price_slider" min='10' max='100' id="customRange1" value={price} onChange={selectPrice} />

        <div className='d-flex align-items-center justify-content-between __price_min_max'>
          <div className='border px-3 py-1 rounded-3'>RM10</div>
          <div className='border px-3 py-1 rounded-3'>RM100</div>
        </div>

      </div>
    )
  }

  return (
    <div className='mb-4 __price'>
      {renderPriceTitle()}
      {openDropdown && renderPriceSlider()}
    </div>
  )
}
