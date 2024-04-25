import { FC } from "react";
import { BankTransfer, PaymentOption, OnlinePayment, CryptoPayment } from "..";
import { useWalletState } from "@/store";

const Payment: FC = () => {
    const paymentOption = useWalletState((state) => state.paymentOption);
  return (
    <div className=" bg-white h-full w-full p-10">
      <div className="  flex flex-col gap-10">
        <div className="">
          <PaymentOption />
        </div>
        <div className="max-w-[360px]">

            { paymentOption && (
                {
                    transfer: <BankTransfer />,
                    online: <OnlinePayment />,
                    crypto: <CryptoPayment />
                }[paymentOption ]
            )
            }
        </div>
      </div>
    </div>
  );
};

export default Payment;
