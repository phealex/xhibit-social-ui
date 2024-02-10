import { FC } from "react";
import JoinBanner from "./JoinBanner";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { formControlProps } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { disciplines } from "@/constants";

const JobProfile: FC<formControlProps> = ({ form }) => {
  return (
    <div className="flex flex-col gap-[50px]">
      <JoinBanner />
      <div className="flex flex-col gap-[30px]">
        <FormField
          control={form.control}
          name="discipline"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="discipline">Discipline</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a discipline" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {disciplines.map((discipline, index) => (
                    <SelectItem key={index} value={discipline.key}>
                      {discipline.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default JobProfile;
