import React from 'react'
import { Banner } from 'payload/components'

import './index.scss'

const baseClass = 'before-dashboard'

const AfterDashboard: React.FC = () => {
  return (
    <div className="group-field">
      <h2 className="dashboard__label">External Links</h2>

      <ul className="dashboard__card-list">
        <li>
          <div className="card card-media card--has-onclick" id="card-media">
            <div className="card__actions">
              <a href="http://templates.framework-y.com/yellowbusiness/pages/index-main.html" target="_blank" className="btn btn--style-icon-label btn--full btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right">
                Design Template - Yellow Business
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="card card-media card--has-onclick" id="card-media">
            <div className="card__actions">
              <a href="https://bgss-front.vercel.app/" target="_blank" className="btn btn--style-icon-label btn--full btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right">
                Vercel - Production
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="card card-media card--has-onclick" id="card-media">
            <div className="card__actions">
              <a href="https://bgss-front-develop.vercel.app/" target="_blank" className="btn btn--style-icon-label btn--full btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right">
                Vercel - Staging
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AfterDashboard
