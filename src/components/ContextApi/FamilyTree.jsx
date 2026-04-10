import React, { createContext, useState } from 'react'
import Grandpa from './Grandpa'
import './Container.css'

export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money, setMoney] = useState(0);
  return (
    <MoneyContext value={[money, setMoney]}>
      <section className="container flex">
        <h3>Family Tree</h3>
        <p>Total Money: {money}</p>
        <Grandpa />
      </section>
    </MoneyContext>
  );
}

export default FamilyTree