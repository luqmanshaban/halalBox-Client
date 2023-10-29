import React from 'react'
import Home from './modals/home'
import Menus from './modals/menus'
import Orders from './modals/orders'
import History from './modals/history'
import Messages from './modals/messages'

type Props = {
    active: Array<Boolean>
}

const Main: React.FC<Props> = ({ active }) => {
  return (
    <div>
        {active[0] && (<Home />)}
        {active[1] && (<Orders />)}
        {active[2] && (<Menus />)}
        {active[3] && (<History />)}
        {active[4] && (<Messages />)}
        
    </div>
  )
}

export default Main