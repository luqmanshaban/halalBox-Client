import React from 'react'
import {AllMenus, Drinks, Meals, SandWiches, Searched, Snacks, Top} from './AllMenus'

type Props = {
    active: Array<Boolean>,
    searched: Array<Object>
}

const FoodMenus: React.FC<Props> = ({ active, searched }) => {
  return (
    <div>
        {active[0] && <AllMenus />}
        {active[1] && <Top />}
        {active[2] && <Meals />}
        {active[3] && <Drinks />}
        {active[4] && <Snacks />}
        {active[5] && <SandWiches />}
        {active[6] && <Searched menus={searched}/>}
    </div>
  )
}

export default FoodMenus