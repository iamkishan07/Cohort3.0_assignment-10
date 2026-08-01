import React from 'react'
import LoginSection from '../components/LoginSection'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white grid lg:grid-cols-2">
        <LoginSection/>
        <Login/>
    </div>
  )
}

export default LoginPage
