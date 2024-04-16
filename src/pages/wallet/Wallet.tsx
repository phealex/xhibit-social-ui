import { CardRecord } from "@/components"
import { FC } from "react"

const Wallet: FC = () => {
  return (
    <div className=" bg-accent_blue min-h-screen w-full py-10">
    <div className="container mx-auto flex gap-5">
      <section className="w-[20%] hidden lg:flex flex-col py-10 px-4 rounded-lg  bg-white gap-5">
      <CardRecord />
      </section>
      <section className="flex flex-1 flex-col gap-10  w-full">
       
      </section>
    </div>
  </div>
  )
}

export default Wallet