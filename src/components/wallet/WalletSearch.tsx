import { FC, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { useWalletState } from "@/store";
import { TransactionRecords } from "@/constants";


const WalletSearch: FC = () => {
  const [isTyping, setIsTyping] = useState(false);

  const transactionRecords = useWalletState((state) => state.transactionRecords);

  return (
    // <Command className={cn(" bg-transparent border h-fit border-dark_green ", isTyping && "border-hidden" )}>
    //   <CommandInput
    //   className=" "
    //     placeholder="Type a command or search..."
    //     onFocus={() => setIsTyping(true)}
    //     onBlur={() => setIsTyping(false)}
    //   />

    //   {isTyping && (
    //     <CommandList>
    //       <CommandEmpty>No results found.</CommandEmpty>
    //       <CommandGroup heading="Suggestions">
    //         <CommandItem>Calendar</CommandItem>
    //         <CommandItem>Search Emoji</CommandItem>
    //         <CommandItem>Calculator</CommandItem>
    //       </CommandGroup>
    //       <CommandSeparator />
    //       <CommandGroup heading="Settings">
    //         <CommandItem>Profile</CommandItem>
    //         <CommandItem>Billing</CommandItem>
    //         <CommandItem>Settings</CommandItem>
    //       </CommandGroup>
    //     </CommandList>
    //   )}
    // </Command>
    <Input
      className={cn(" bg-transparent border h-12 border-dark_green ", isTyping && " outline-none focus-visible:ring-transparent" )}
      placeholder="Type a name or data..."
      onFocus={() => setIsTyping(true)}
      onBlur={() => setIsTyping(false)}
      onChange={(e) =>{
        if(e.target.value === "") return useWalletState.setState({transactionRecords: TransactionRecords})

        const filteredArr = transactionRecords.filter((item) => {
          // return e.target.value.toLowerCase().split('').some(letter => item.details.toLowerCase().includes(letter));
          return item.details.toLowerCase().includes(e.target.value.toLowerCase());
        });

        console.log(filteredArr)

        if(filteredArr.length > 0){
          useWalletState.setState({transactionRecords: filteredArr})
          return
        } 

        useWalletState.setState({transactionRecords: TransactionRecords})

      }}

    />
  );
};

export default WalletSearch;