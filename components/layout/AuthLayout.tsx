import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useRouter } from 'next/router'


const AuthLayout: React.FC<any> = ({children, title}) => {

    const router = useRouter()

  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="PayFocus by Uniccon group" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='w-full h-full min-h-screen grid grid-cols-12 gap-10 xl:gap-14 font-Poppins'>

            <div className='col-span-12 lg:col-span-5 pt-[30px] px-3 md:px-0 lg:pl-[35px] xl:pl-[50px] w-full max-w-md mx-auto lg:mx-0 lg:max-w-full  '>

                <div className='flex flex-col space-y-3'>
                    <HiOutlineArrowLeft className='text-lg xl:!text-xl cursor-pointer hidden' />
                    <div className='!mt-[25px] hidden xl:flex justify-start'>
                        <Image src='/logo.png' width={177} height={42} />
                    </div>
                    <div className='!mt-[25px] flex justify-center lg:justify-start  xl:hidden'>
                        <Image src='/logo.png' width={170} height={38} />
                    </div>
                </div>

                <div>
                    {children}
                </div>

            </div>

            
            {/* Conditional side image */}
            <div className='hidden lg:block lg:col-span-7 relative '>
                <div className='!relative w-full h-full '>
                    <Image 
                        src={ 
                            router.pathname.includes('signup') 
                            ? 'https://res.cloudinary.com/dk6uhtgvo/image/upload/v1663683098/PayFocus/image_7_iqry3h.png'
                            : 'https://res.cloudinary.com/dk6uhtgvo/image/upload/v1663756802/PayFocus/man-1868730_1920_1_f7zwst.png'
                        }
                        layout='fill'
                        objectFit='cover'
                        priority
                    />
                </div>
                <div className='w-full h-full bg-black/50 z-40 absolute top-0 '></div>
            </div>
        </div>
    </>
  )
}

export default AuthLayout