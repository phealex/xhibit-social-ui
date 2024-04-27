import {
  MultiStepProps,
  WalletVerificationFormSchema,
} from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { useWalletState } from "@/store";
import { Label } from "../ui/label";
import { Plus, File } from "lucide-react";
import { cn } from "@/lib/utils";

const Step1: FC<MultiStepProps> = ({ handleNext }) => {
  const selectedFile = useWalletState((state) => state.verificationData.imageFile);


  const verificationData = useWalletState((state) => state.verificationData);

  const form = useForm<z.infer<typeof WalletVerificationFormSchema>>({
    resolver: zodResolver(WalletVerificationFormSchema),
    defaultValues: {
      bankName: verificationData.bankName,
      accountNumber: verificationData.accountNumber,
      bvn: verificationData.bvn,
      idType: verificationData.idType,
      idNumber: verificationData.idNumber,
      image: verificationData.image,
    },
  });

  function onSubmit(data: z.infer<typeof WalletVerificationFormSchema>) {
    console.log(data);
    useWalletState.setState({
      verificationData: {
        ...verificationData,
        idType: data.idType,
        idNumber: data.idNumber,
        image: data.image,
        bankName: verificationData.bankName,
        accountNumber: verificationData.accountNumber,
        bvn: verificationData.bvn,
      },
    });
    handleNext();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="bankName"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Bank name
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Bank name" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="grb">GTB</SelectItem>
                  <SelectItem value="kuda">Kuda MFB</SelectItem>
                  <SelectItem value="access">Access Bank</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="accountNumber"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Bank account Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Bank account number"
                  className=" font-Jakarta font-normal text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bvn"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Bank verification number (BVN)
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Bank verification number (BVN)"
                  className=" font-Jakarta font-normal text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="idType"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Identification document
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Identification Document" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="nin">National Identity Card</SelectItem>
                  <SelectItem value="drivers">Driver's License</SelectItem>
                  <SelectItem value="voters">Voter's Card</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.getValues().idType && (
          <>
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem className=" w-full flex flex-col gap-[2px]">
                  <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                    {form.getValues().idType === "passport"
                      ? "Passport number"
                      : form.getValues().idType === "nin"
                      ? "National Identity Number"
                      : form.getValues().idType === "drivers"
                      ? "Driver's License number"
                      : form.getValues().idType === "voters"
                      ? "Voter's Card number"
                      : "ID number"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Bank account number"
                      className=" font-Jakarta font-normal text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" flex items-center justify-between">
                    <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                      Project file
                    </p>
                  </FormLabel>
                  <FormControl>
                    <>
                      <Label
                        htmlFor="file"
                        className={cn(
                          " w-full h-[54px] rounded cursor-pointer flex items-center justify-center flex-col gap-2",
                          !selectedFile ? " border border-dashed" : ""
                        )}
                      >
                        {selectedFile ? (
                          <div className=" w-full h-full rounded flex items-center justify-center">
                            <File className=" w-[20px] h-[20px] text-primary_blue  " />
                            <p className=" font-Jakarta text-[16px] font-normal text-dark_green text-center">
                              {selectedFile.name}
                            </p>
                          </div>
                        ) : (
                          <div className="flex gap-1 items-center rounded-md">
                          <Plus className=" w-[20px] h-[20px] " />
                          <h1 className=" font-Jakarta text-[16px] font-normal text-dark_green text-center">
                            Choose File
                          </h1>
                        </div>
                        )}
                      </Label>
                      <Input
                        //   {...field}
                        type="file"
                        id="file"
                        accept="file/*"
                        //   value={ field?.value?.name ?? ""}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            useWalletState.setState({
                              verificationData: {
                                ...verificationData,
                                imageFile: file,
                              },
                            })
                            field.onChange({
                              name: file.name,
                              type: file.type,
                              size: file.size,
                            });
                            //   form.setValue("image", file);
                          }
                        }}
                        ref={field.ref}
                        className=" hidden focus-visible:ring-transparent outline-none"
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <div className="flex w-full justify-between gap-[100px] items-center">
          {/* <Button
            type="reset"
            onClick={handlePrev}
            className="w-[160px] font-Jakarta font-medium text-base bg-transparent hover:bg-transparent border border-dark_green/70 rounded-md text-dark_green/70"
          >
            Cancel
          </Button> */}
          <Button
            type="submit"
            className="w-[160px] font-Jakarta font-medium text-base bg-primary_blue hover:bg-primary_blue border-none rounded-md text-white"
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Step1;
