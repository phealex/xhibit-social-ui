import {
  CardRecord,
  TransactionRecord,
  TransactionTable,
  WalletDetails,
  WalletFaq,
  WalletSearch,
  PaymentDetails,
  Payment,
  TransactionConfirmation,
  WalletVerification,
  WithdrawalDetails,
} from "@/components";
import { cn } from "@/lib/utils";
import { useWalletState } from "@/store";
import { FC } from "react";

const Wallet: FC = () => {
  const isFundWallet = useWalletState((state) => state.isFundWallet);
  const isConfirmTransaction = useWalletState(
    (state) => state.isConfirmTransaction
  );
  const isShowWalletVerification = useWalletState(
    (state) => state.isShowWalletVerification
  );
  const isShowWithdrawal = useWalletState((state) => state.isShowWithdrawal);
  return (
    <div className=" bg-accent_blue min-h-screen w-full py-10">
      {
        isShowWalletVerification ? (
         <WalletVerification />
        ) : (
      <div className="container mx-auto flex gap-5">
        <section
          className={cn(
            "w-[20%] hidden lg:flex flex-col py-10 px-4 rounded-lg  bg-white gap-8 ",
            isFundWallet && "p-0 h-fit"
          )}
        >
          {isFundWallet ? (
            <PaymentDetails />
          ) : isShowWithdrawal ? (
           <WithdrawalDetails />
          ) : (
            <div className="flex flex-col gap-8  w-full">
              <CardRecord />
              <TransactionRecord />
              <WalletFaq />
            </div>
          )}
        </section>
        <section className="flex flex-1 flex-col gap-10  w-full bg-white min-h-screen md:min-h-[calc(100vh-80px)]">
          { isShowWithdrawal ? (
            <div className=""></div>
          ) :
            !isFundWallet ? (
              <>
              <WalletDetails />
              <WalletSearch />
              <TransactionTable />
            </>
            ) : isConfirmTransaction ? (
              <TransactionConfirmation />
            ) : (
              <Payment />
            )
          }
        </section>
      </div>
        )
      }
    </div>
  );
};

export default Wallet;
