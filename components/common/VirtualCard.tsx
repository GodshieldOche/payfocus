import Image from 'next/image'
import React, { useRef, useState } from 'react'
import CardImage from '../../public/card.png'
import Frame from '../../public/Frame 2035.png'
import mastercard from '../../public/image 1.png'
import visa from '../../public/visa.png'
import { Card } from '../../typeDefs'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'

const array = [
    {
        Id: 'b4856-fba2-11ec-b0e6-e20d387cb972',
        owner: 'uglify',
        currency: '566',
        name: 'Unche Emmanuel',
        number: '5340723160524429',
        pin: '0000',
        cvv: '312',
        expiry: '10/25',
        address: 'Leisure Court Estate',
        balance: 5000,
        type: 'MasterCard',
        transactions: null
      },
      {
        Id: '70dd3-fdf2-11ec-831f-409c09150349',
        owner: 'uglify',
        currency: '566',
        name: 'Uniccon Group',
        number: '1234576621872857',
        pin: '0000',
        cvv: '965',
        expiry: '07/25',
        address: 'Lanre Shittu Motors, Mabushi, Abuja',
        balance: 7800,
        type: 'VisaCard',
        transactions: null
      },
    {
        Id: 'b4856-fba2-11ec-b0e6-e20d387cb972',
        owner: 'uglify',
        currency: '566',
        name: 'Unche Emmanuel',
        number: '5340723160524429',
        pin: '0000',
        cvv: '312',
        expiry: '10/25',
        address: 'Leisure Court Estate',
        balance: 5000,
        type: 'MasterCard',
        transactions: null
      },
      {
        Id: '70dd3-fdf2-11ec-831f-409c09150349',
        owner: 'uglify',
        currency: '566',
        name: 'Uniccon Group',
        number: '1234576621872857',
        pin: '0000',
        cvv: '965',
        expiry: '07/25',
        address: 'Lanre Shittu Motors, Mabushi, Abuja',
        balance: 7800,
        type: 'VisaCard',
        transactions: null
      },
    {
        Id: 'b4856-fba2-11ec-b0e6-e20d387cb972',
        owner: 'uglify',
        currency: '566',
        name: 'Unche Emmanuel',
        number: '5340723160524429',
        pin: '0000',
        cvv: '312',
        expiry: '10/25',
        address: 'Leisure Court Estate',
        balance: 5000,
        type: 'MasterCard',
        transactions: null
      },
      {
        Id: '70dd3-fdf2-11ec-831f-409c09150349',
        owner: 'uglify',
        currency: '566',
        name: 'Uniccon Group',
        number: '1234576621872857',
        pin: '0000',
        cvv: '965',
        expiry: '07/25',
        address: 'Lanre Shittu Motors, Mabushi, Abuja',
        balance: 7800,
        type: 'VisaCard',
        transactions: null
      },
    {
        Id: 'b4856-fba2-11ec-b0e6-e20d387cb972',
        owner: 'uglify',
        currency: '566',
        name: 'Unche Emmanuel',
        number: '5340723160524429',
        pin: '0000',
        cvv: '312',
        expiry: '10/25',
        address: 'Leisure Court Estate',
        balance: 5000,
        type: 'MasterCard',
        transactions: null
      },
      {
        Id: '70dd3-fdf2-11ec-831f-409c09150349',
        owner: 'uglify',
        currency: '566',
        name: 'Uniccon Group',
        number: '1234576621872857',
        pin: '0000',
        cvv: '965',
        expiry: '07/25',
        address: 'Lanre Shittu Motors, Mabushi, Abuja',
        balance: 7800,
        type: 'VisaCard',
        transactions: null
      },
]


interface Props {
    cards: Card[]
}

const VirtualCard: React.FC<Props> = ({ cards }) => {

    const [index, setIndex] = useState(0)
   const scrollRef: any = useRef(0)

   const handleLeft = (e:any) => {
        e.preventDefault()
        // console.log(cardRef.current.getElementsByClassName('hidden')[0].innerText)\
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + 400, 
            behavior: 'smooth'
        })
        if(index < cards.length - 1) {
            setIndex(index + 1)
        }
        
   }

   const handleRight = (e:any) => {
        e.preventDefault()
        // console.log(cardRef)
        scrollRef.current.scrollTo({left: scrollRef.current.scrollLeft - 400, behavior: 'smooth'})
        if(index > 0) {
            setIndex(index - 1)
        }
   }

   const handleJump = (indexer: number) => {
        scrollRef.current.scrollTo({left: indexer * 400, behavior: 'smooth'})
        setIndex(indexer)
   }

  return (
    <div className='flex flex-col items-center w-full h-full  space-y-9' >
        <div ref={scrollRef} onScroll={() => {
            console.log(Math.trunc(scrollRef.current.scrollLeft / 150))
            setIndex(Math.trunc(scrollRef.current.scrollLeft / 150))
            } 
        }
             className={`flex ${cards.length === 1 ? "justify-center" : "justify-start"} px-3 items-center w-full h-full space-x-[18px] overflow-y-hidden overflow-x-auto scroller   `}>
            {
                cards.map((card, i) => (
                    <div key={card.Id} className='relative w-fit h-fit  '>
                        <div className='relative  !w-[398px] !h-[230.91px] '>       
                            <Image
                                src={CardImage}
                                width={398}
                                height={230.91}
                            />
                            <div className='absolute top-0 left-10'>
                                <Image
                                    src={Frame}
                                />
                            </div>
                        </div>
                        <div className='absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col pb-[9px] pt-7 px-[18.57px]'>
        
                            <div className='flex items-center justify-between'>
                                <h3 className='text-light font-[700]  text-[13.9242px] uppercase '>{card.owner}</h3>
                                <h3 className='text-light font-semibold  text-[14.3795px] capitalize'>{card.name}</h3>
                            </div>
                            <h1 className="hidden">{card.Id}</h1>
        
                            <h1 className='font-semibold text-[23.207px] text-light mt-[30px] '>
                               {`
                                    ${card.currency === '840' 
                                    ? '$'
                                    : card.currency === "724"
                                    ? '€'
                                    : card.currency === "826"
                                    ? '£'
                                    : '₦'
                                    }
                                    ${card.balance}
                                `}
                            </h1>
                            <h1 className='font-semibold leading-[20px] text-[16.2449px] text-light mt-[25px] '>
                                {`
                                    ${card.number.slice(0,4)}
                                    ${card.number.slice(4,8)}
                                    ${card.number.slice(8,12)}
                                    ${card.number.slice(12,16)}
                                `}
                            </h1>
                            <div className='flex items-start  justify-between'>
                                <div className='flex flex-col space-y-1 mt-[35px]'>
                                    <h4 className='font-semibold text-[10.4431px] text-light'>VALID TILL</h4>
                                    <h4 className='font-semibold text-[10.4431px] text-light'>{card.expiry}</h4>
                                </div>
                                <div className='flex flex-col '>
                                    <div className='relative flex justify-end'>
                                        <Image src={ card.type === "MasterCard" ? mastercard : visa} />
                                    </div>
                                    <h3 className='font-semibold tracking-wider text-right text-[11px] text-light mt-1'>
                                        {
                                            card.type === "MasterCard" ? 'mastercard' : 'visa'
                                        }
                                    </h3>
                                    <h4 className='font-semibold tracking-wider text-right text-[11px] -mt-1 text-light'>virtual</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
           
        </div>

        <div className='flex items-center justify-between w-full max-w-[399px]  '>
            <div className='hidden sm:block'>
                <HiOutlineArrowLeft onClick={handleRight} className='text-lg text-primaryOne xl:!text-2xl cursor-pointer'/>
            </div>
            
            <div className='flex items-center justify-between space-x-1 w-full sm:!mx-7 '>
                {
                    cards.map((card, i) => (
                        <span 
                            onClick={() => handleJump(i) }
                            key={card.Id} 
                            className={`h-[3px] cursor-pointer !w-full ${i === index ? 'bg-primaryOne' : 'bg-secondaryFour'}   `}/>
                    ))
                }
            </div>
            <div className='hidden sm:block'>
                <HiOutlineArrowRight onClick={handleLeft} className=' text-lg text-primaryOne xl:!text-2xl cursor-pointer'/>
            </div>
        </div>

    </div>
    
  )
}

export default VirtualCard
