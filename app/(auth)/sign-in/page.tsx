import LoginForm from '@/components/Forms/LoginForm'
import { ReduxProvider } from '@/components/ReduxProvider/ReduxProvider'
import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="font-[sans-serif] max-w-screen-2xl mx-auto h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <ReduxProvider>
          <LoginForm />
        </ReduxProvider>
        <div className="h-full md:py-6 flex items-center relative max-md:before:hidden before:absolute before:bg-gradient-to-r before:from-gray-50 before:via-[#E4FE66] before:to-[#55F5A3] before:h-full before:w-3/4 before:right-0 before:z-0">
          <Image width={1080}
            height={720} src="https://readymadeui.com/photo.webp" className="rounded-md lg:w-4/5 md:w-11/12 z-50 relative" alt="Dining Experience" />
        </div>
      </div>
    </div>
  )
}

export default LoginPage