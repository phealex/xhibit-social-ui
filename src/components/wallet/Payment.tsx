import { FC } from "react";
import { PaymentOption } from "..";
import { useWalletState } from "@/store";

const Payment: FC = () => {
    const paymentOption = useWalletState((state) => state.paymentOption);
  return (
    <div className=" bg-white h-full w-full p-10">
      <div className=" max-w-[360px] flex flex-col gap-10">
        <div className="">
          <PaymentOption />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Payment;
