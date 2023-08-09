import React from 'react'
import { Banner } from 'payload/components'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className="group-field">
      <h2 className="dashboard__label">Welcome to the CMS for BGSS. 😘</h2>
    </div>
  )
}

export default BeforeDashboard
