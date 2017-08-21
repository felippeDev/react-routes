import React from 'react'
import TeamAPI from './TeamAPI'
import { Link } from 'react-router-dom'

const StaffProfile = (props) => {
  const staff = TeamAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!staff) {
    return
    <div>
      <h3>404 - Staff not found</h3>
      <p>Sorry, but the selected staff was not found.</p>
    </div>
  }
  return (
    <div>
      <h1>{staff.name} (#{staff.id})</h1>
      <p>Department: <strong>{staff.job}</strong></p>
      <Link to='/Team'>Back</Link>
    </div>
  )
}

export default StaffProfile
