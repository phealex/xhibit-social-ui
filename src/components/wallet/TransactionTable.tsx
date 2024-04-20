import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyTx } from "@/assets";

const TransactionTable = () => {
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
