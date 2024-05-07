import { WalletFAQData } from '@/constants'
import React, { FC } from 'react'

const WalletFaq: FC = () => {
  return (
        <div className="flex flex-col gap-[30px] ">
          <div className="flex items-center justify-between">
            <p className=" font-Jakarta font-medium text-xs text-dark_green">
              FAQS
            </p>
          </div>
          <div className=" w-full rounded-md flex flex-col gap-5">
          {
            WalletFAQData.map((faq, index) => (
                <p className=" font-Jakarta font-medium text-xs cursor-pointer text-dark_green/70 " key={index}>
                    {faq}
                </p>
            ))
          }
          </div>
        </div>
  )
}

export default WalletFaq