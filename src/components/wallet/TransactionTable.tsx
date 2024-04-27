import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyTx } from "@/assets";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useWalletState } from "@/store";
import { cn } from "@/lib/utils";

const TransactionTable: FC = () => {

  const transactionRecords = useWalletState((state) => state.transactionRecords);
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className=" h-[60px] bg-dark_green/10 flex items-center gap-10 w-fit">
        <TabsTrigger
          className=" font-Jakarta font-semibold text-xs text-dark_green px-5 data-[state=active]:bg-white data-[state=active]:text-primary_blue rounded-md h-full"
          value="all"
        >
          All
        </TabsTrigger>
        <TabsTrigger
          className=" font-Jakarta font-semibold text-xs text-dark_green px-5 data-[state=active]:bg-white data-[state=active]:text-primary_blue rounded-md h-full"
          value="received"
        >
          Received
        </TabsTrigger>
        <TabsTrigger
          className=" font-Jakarta font-semibold text-xs text-dark_green px-5 data-[state=active]:bg-white data-[state=active]:text-primary_blue rounded-md h-full"
          value="sent"
        >
          Sent
        </TabsTrigger>
      </TabsList>
      <TabsContent className=" flex flex-col gap-6 items-center" value="all">
        {/* <img src={EmptyTx} alt="" className=" max-w-[326px] h-[225px] " />
        <div className="flex flex-col gap-[10px]">
          <p className=" font-Jakarta font-normal text-base text-center text-dark_green">
            Oops, we couldn't find any transactions!
          </p>
          <p className=" font-Jakarta font-normal text-base text-dark_green/70 text-center">
            Please try filtering by a different criteria or reach out to us if
            you need help..
          </p>
        </div> */}
        <Table>
  <TableCaption>A list of your recent transactions.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="">Transaction details</TableHead>
      <TableHead>Date/time</TableHead>
      <TableHead>Type</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      transactionRecords.map((record, index) => (
        <TableRow key={index}>
          <TableCell className="font-medium">{record.details}</TableCell>
          <TableCell>{record.date}, {record.time}</TableCell>
          <TableCell>{record.type}</TableCell>
          <TableCell className="flex items-center gap-1">
            {
              record.status === "Pending" ? (
                <span className="bg-accent_yellow w-[10px] h-[10px] inline-block rounded-full ">
            
                </span>
              ): (
                <span className="bg-accent_green w-[10px] h-[10px] inline-block rounded-full ">
                  {""}
                </span>
              )
            }
            {record.status}
            </TableCell>
          <TableCell     className={cn(
                      " font-Jakarta text-right font-medium text-xs",
                      record.type === "Withdrawal" || record.type === "Transfer"
                        ? " text-accent_red"
                        : " text-accent_green"
                    )}>
                       {record.type === "Withdrawal" || record.type === "Transfer"
                      ? "-"
                      : "+"}{" "}
                      {record.amount}</TableCell>
        </TableRow>
      ))
    }

  </TableBody>
</Table>

      </TabsContent>
      <TabsContent
        className=" flex flex-col gap-6 items-center"
        value="received"
      >
        <img src={EmptyTx} alt="" className=" max-w-[326px] h-[225px] " />
        <div className="flex flex-col gap-[10px]">
          <p className=" font-Jakarta font-normal text-base text-center text-dark_green">
            Oops, we couldn't find any transactions!
          </p>
          <p className=" font-Jakarta font-normal text-base text-dark_green/70 text-center">
            Please try filtering by a different criteria or reach out to us if
            you need help..
          </p>
        </div>
      </TabsContent>
      <TabsContent className=" flex flex-col gap-6 items-center" value="sent">
        <img src={EmptyTx} alt="" className=" max-w-[326px] h-[225px] " />
        <div className="flex flex-col gap-[10px]">
          <p className=" font-Jakarta font-normal text-base text-center text-dark_green">
            Oops, we couldn't find any transactions!
          </p>
          <p className=" font-Jakarta font-normal text-base text-dark_green/70 text-center">
            Please try filtering by a different criteria or reach out to us if
            you need help..
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TransactionTable;
