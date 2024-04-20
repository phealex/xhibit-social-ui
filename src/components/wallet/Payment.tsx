import { FC } from "react";
import { BankTransfer, PaymentOption } from "..";
import { useWalletState } from "@/store";

const Payment: FC = () => {
    const paymentOption = useWalletState((state) => state.paymentOption);
  return (
    <div className=" bg-white h-full w-full p-10">
      <div className=" max-w-[360px] flex flex-col gap-10">
        <div className="">
          <PaymentOption />
        </div>
        <div className="">

            { paymentOption && (

                {
                    transfer: <BankTransfer />,
                    
                    
                }[paymentOption ]
            )
            }
        </div>
      </div>
    </div>
  );
};

export default Payment;
