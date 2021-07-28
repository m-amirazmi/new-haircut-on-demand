import { useState } from "react"

export default function FilterBarberGender() {
  const [openDropdown, setOpenDropdown] = useState(true)
  const [genderList, setGenderList] = useState([
    { id: '1', name: 'male' },
    { id: '2', name: 'female' }
  ])
  const [genderSelected, setGenderSelected] = useState([])

  const selectGender = ({ target }) => {
    const selected = genderList.find((gender) => gender.id === target.id)
    const findInSelected = genderSelected.find((gender) => gender.id === target.id)
    const copyGenderSelected = [...genderSelected]
    if (!findInSelected) {
      copyGenderSelected.push(selected)
      setGenderSelected(copyGenderSelected)
    }

    if (!!findInSelected) {
      const filtered = copyGenderSelected.filter((service) => service.id !== target.id)
      setGenderSelected(filtered)
    }
  }

  const renderServiceTitle = () => {
    const icon = openDropdown ? 'bi-chevron-down' : 'bi-chevron-up'
    return (
      <div className='d-flex flex-row align-items-center'>
        <h5>Barber's Gender</h5>
        <i className={`bi ${icon} ms-auto fs-5`} onClick={() => setOpenDropdown(!openDropdown)}></i>
      </div>
    )
  }

  const renderServiceList = () => genderList.map(({ id, name }) => {
    const icon = genderSelected.find((service) => service.id === id) ? 'bi-circle-fill text-primary' : 'bi-circle'
    return (
      <div key={id} className='ms-2 my-2 d-flex flex-row __filter_service'>
        <p className='text-capitalize'>{name}</p>
        <i id={id} className={`bi ${icon} ms-auto`} onClick={selectGender} />
      </div>
    )
  })

  return (
    <div className=''>
      {renderServiceTitle()}
      {openDropdown && renderServiceList()}
    </div>
  )
}
