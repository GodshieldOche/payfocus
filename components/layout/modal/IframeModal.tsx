import React from 'react'

const IframeModal = () => {
  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/50 w-full h-full overflow-hidden flex items-end md:items-center  justify-center'>
        <div className='w-[460px] h-[400px] bg-light rounded-[10px] flex flex-col items-center py-[24px] px-[16px] space-y-5 '>
            <iframe src="https://checkout.payfocuss.com/fund-uglify" title="W3Schools Free Online Web Tutorials"></iframe>
        </div>
    </div>
  )
}

export default IframeModal
