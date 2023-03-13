import React from 'react'
import PersonalDetails from './personal_details/PersonalDetails'
import ReportDetails from './report_details/ReportDetails'
import './detailcardStyles.css'

const DetailsCard = () => {
    const details={
        name: 'ipsum lorem',
        sex: 'ipsum lorem',
        age: 'ipsum lorem',
        occupation: 'ipsum lorem',
        email: 'ipsum lorem',
        phone: 'ipsum lorem',
        region: 'ipsum lorem',
    
        medicalinfo: 'ipsum lorem',
        allergies: 'ipsum lorem'
      }
  return (
    <div className='detailcard-container'>
        <PersonalDetails details={details}/>
        <ReportDetails details={details}/>
    </div>
  )
}

export default DetailsCard