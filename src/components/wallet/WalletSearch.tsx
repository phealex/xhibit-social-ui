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

const WalletSearch: FC = () => {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <Command>
      <CommandInput
      className=" bg-transparent"
        placeholder="Type a command or search..."
        onFocus={() => setIsTyping(true)}
        onBlur={() => setIsTyping(false)}
      />

      {isTyping && (
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
};

export default WalletSearch;