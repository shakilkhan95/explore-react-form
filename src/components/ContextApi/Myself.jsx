import React, { use, } from 'react'
import { MoneyContext } from './FamilyTree'

const Myself = () => {
    const [money, setMoney] = use(MoneyContext);
  return (
    <div>
        <h2>Myself</h2>
        <button onClick={()=>setMoney(money + 5000)}>Add Money</button>
    </div>
  )
}

export default Myself