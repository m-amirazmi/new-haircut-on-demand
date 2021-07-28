import { useState } from "react"

export const FilterLocation = () => {

  const [locationList, setLocationList] = useState([
    {
      stateId: '1', state: 'selangor', regions: [
        { regionId: '1.1', region: 'ampang' },
        { regionId: '1.2', region: 'seri kembangan' },
        { regionId: '1.3', region: 'ara damansara' },
        { regionId: '1.4', region: 'balakong' },
        { regionId: '1.5', region: 'batu caves' },
        { regionId: '1.6', region: 'cheras' },
        { regionId: '1.7', region: 'damansara damai' },
        { regionId: '1.8', region: 'glenmarie' },
        { regionId: '1.9', region: 'gombak' },
      ]
    },
    {
      stateId: '2', state: 'kuala lumpur', regions: [
        { regionId: '2.1', region: 'ampang hilir' },
        { regionId: '2.2', region: 'bangsar' },
        { regionId: '2.3', region: 'brickfields' },
        { regionId: '2.4', region: 'bukit bintang' },
        { regionId: '2.5', region: 'bukit jalil' },
        { regionId: '2.6', region: 'desa pandan' },
      ]
    }
  ])

  const [selectedState, setSelectedState] = useState({})
  const [selectedRegion, setSelectedRegion] = useState({})

  const selectState = ({ currentTarget }) => {
    const findState = locationList.find((location) => location.stateId === currentTarget.id)
    setSelectedState(findState)
  }

  const selectRegion = ({ currentTarget }) => {
    const findRegion = selectedState?.regions?.find((region) => region.regionId === currentTarget.id)
    setSelectedRegion(findRegion)
  }

  const renderStateList = () => locationList.map((location) => <li><a key={location.stateId} id={location.stateId} className="dropdown-item text-capitalize" href="#" onClick={selectState}>{location.state}</a></li>)

  const renderRegionList = () => selectedState?.regions?.map((region) => <li><a key={region.stateId} id={region.regionId} className="dropdown-item text-capitalize" href="#" onClick={selectRegion}>{region.region}</a></li>)

  const renderStateFilter = () => {
    const state = selectedState.state || 'select state'
    return (
      <div className="btn-group mx-md-2">
        <button className="btn shadow-sm dropdown-toggle d-flex align-items-center" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
          <p className='mx-1 text-capitalize'>{state}</p>
        </button>
        <ul className="dropdown-menu bg-light" aria-labelledby="defaultDropdown">
          {renderStateList()}
        </ul>
      </div>
    )
  }

  const renderRegionFilter = () => {
    const region = selectedRegion?.region || 'select region'
    const disabled = !selectedState?.regions && '__disabled'
    const list = !!selectedState.regions ? renderRegionList() : <li><a className="dropdown-item __disabled" href="#">Please select state first</a></li>

    return (
      <div className="btn-group mx-md-2">
        <button className="btn shadow-sm dropdown-toggle d-flex align-items-center" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
          <p className={`mx-1 text-capitalize ${disabled}`}>{region}</p>
        </button>
        <ul className="dropdown-menu bg-light" aria-labelledby="defaultDropdown">
          {list}
        </ul>
      </div>
    )
  }

  const renderLocationFilter = () => {
    return (
      <div className='d-flex __location_filter'>
        {renderStateFilter()}
        {renderRegionFilter()}
      </div>
    )
  }

  return renderLocationFilter()
}
