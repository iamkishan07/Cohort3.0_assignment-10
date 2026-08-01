import React, { useContext } from 'react'
import WelcomeBack from '../HomeComponents/WelcomeBack'
import CartOperations from '../HomeComponents/CartOperations'
import Category from '../HomeComponents/Category'
import ProductRateArrival from '../HomeComponents/ProuductRateArrival'
import Express from '../HomeComponents/Express'
import { MyStore } from '../context/ContextApi'

const HomePage = () => {

  return (
    <div className='flex flex-col gap-6 w-full p-4'>
      <WelcomeBack/>
      <CartOperations/>
    <Category/>
      <ProductRateArrival/>
      <Express/>
    </div>
  )
}

export default HomePage