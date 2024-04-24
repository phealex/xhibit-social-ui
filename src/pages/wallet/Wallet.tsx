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
} from "@/components";
import { cn } from "@/lib/utils";
import { useWalletState } from "@/store";
import { FC } from "react";

const Wallet: FC = () => {
  const isFundWallet = useWalletState((state) => state.isFundWallet);
  const isConfirmTransaction = useWalletState(
    (state) => state.isConfirmTransaction
  );
  return (
    <div className=" bg-accent_blue min-h-screen w-full py-10">
      <div className="container mx-auto flex gap-5">
        <section
          className={cn(
            "w-[20%] hidden lg:flex flex-col py-10 px-4 rounded-lg  bg-white gap-8 ",
            isFundWallet && "p-0 h-fit"
          )}
        >
          {isFundWallet ? (
            <PaymentDetails />
          ) : (
            <div className="flex flex-col gap-8  w-full">
              <CardRecord />
              <TransactionRecord />
              <WalletFaq />
            </div>
          )}
        </section>
        <section className="flex flex-1 flex-col gap-10  w-full bg-white">
          {isFundWallet && isConfirmTransaction ? (
            <div className="">
              <TransactionConfirmation />
            </div>
          ) : !isFundWallet ? (
            <>
              <WalletDetails />
              <WalletSearch />
              <TransactionTable />
            </>
          ) : (
            <div className="">
              <Payment />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Wallet;
