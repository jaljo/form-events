import React from 'react'
import SeoPanel from  '../Container/SeoPanel'
import MetaPanel from '../Container/MetaPanel'
import { or } from 'ramda'

// Nav :: Props -> React.Component
export default ({
  closeMetaPanel,
  closeSeoPanel,
  isMetaPanelOpened,
  isSeoPanelOpened,
  openMetaPanel,
  openSeoPanel,
}) =>
  <div>
    <nav className={`${or(isSeoPanelOpened, isMetaPanelOpened) ? 'panel-opened' : ''}`}>
      <ul>
        <li
          onClick={isSeoPanelOpened ? closeSeoPanel : openSeoPanel}
          className={`${isSeoPanelOpened ? 'active' : ''}`}
        >
          Seo
        </li>
        <li
          onClick={isMetaPanelOpened ? closeMetaPanel : openMetaPanel}
          className={`${isMetaPanelOpened ? 'active' : ''}`}
        >
          Meta
        </li>
      </ul>
    </nav>
    {isSeoPanelOpened && <SeoPanel />}
    {isMetaPanelOpened && <MetaPanel />}
  </div>
