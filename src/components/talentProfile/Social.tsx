import { FC, useState } from "react";
import { Separator } from "../ui/separator";
import { Plus, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";
import { Switch } from "../ui/switch";
import { FaXTwitter } from "react-icons/fa6";
import { Label } from "../ui/label";

const Social: FC = () => {
  const [addedSocials, setAddedSocials] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  return (
    <div className=" bg-white h-[300px] p-5 flex flex-col gap-3">
      <h1 className=" font-Jakarta font-normal text-[20px] leading-7 text-dark_green">
        Social presence
      </h1>
      <Separator />
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        <div className=" flex flex-col gap-10 w-full">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-1 items-center">
              <FaLinkedinIn className="h4 w-4" />
              <p className=" font-Jakarta font-medium text-[16px] leading-5 text-dark_green">
                LinkedIn
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Trash2 className="h4 w-4 cursor-pointer" />
              <Switch className="data-[state=checked]:bg-primary_blue data-[state=unchecked]:bg-input" />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-1 items-center">
              <FaXTwitter className="h4 w-4" />
              <p className=" font-Jakarta font-medium text-[16px] leading-5 text-dark_green">
                Twitter
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Trash2 className="h4 w-4 cursor-pointer" />
              <Switch className="data-[state=checked]:bg-primary_blue data-[state=unchecked]:bg-input" />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-1 items-center">
              <FaBehance className="h4 w-4" />
              <p className=" font-Jakarta font-medium text-[16px] leading-5 text-dark_green">
                Behance
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Trash2 className="h4 w-4 cursor-pointer" />
              <Switch className="data-[state=checked]:bg-primary_blue data-[state=unchecked]:bg-input" />
            </div>
          </div>
        </div>

        <Dialog>
          <DialogTrigger className="flex gap-2 items-center ">
            <Plus className=" text-[24px] text-primary_blue" />
            <p className=" font-Jakarta font-semibold text-primary_blue text-[20px] leading-7">
              Add socials
            </p>
          </DialogTrigger>
          <DialogContent className="flex flex-col gap-10 w-full">
            <DialogHeader>
              <DialogTitle className=" text-left font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                Social presence 💭
              </DialogTitle>
            </DialogHeader>
            <div className=" flex flex-col gap-3 w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-1 items-center">
                  <FaLinkedinIn className="h4 w-4" />
                  <p className=" font-Jakarta font-medium text-[16px] leading-5 text-dark_green">
                    LinkedIn
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Trash2 className="h4 w-4 cursor-pointer" />
                  <p className=" font-Jakarta font-medium text-[16px] leading-5 text-dark_green">
                  @Dreal_Sabali
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-1 items-center">
                  <FaXTwitter className="h4 w-4" />
                  <p className=" font-Jakarta font-medium text-[16px] leading-5 text-dark_green">
                    Twitter
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Trash2 className="h4 w-4 cursor-pointer" />
                  <p className=" font-Jakarta font-medium text-[16px] leading-5 text-dark_green">
                  @Dreal_Sabali
                  </p>
                </div>
              </div>
              <Separator />

              <div className="flex justify-between items-center w-full">
                <div className="flex gap-1 items-center">
                  <FaBehance className="h4 w-4" />
                  <p className=" font-Jakarta font-medium text-[16px] leading-5 text-dark_green">
                    Behance
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Trash2 className="h4 w-4 cursor-pointer" />
                  <p className=" font-Jakarta font-medium text-[16px] leading-5 text-dark_green">
                  @Dreal_Sabali
                  </p>
                </div>
              </div>
              <Separator />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Label className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                Add preferred socials
              </Label>
              <div className="flex justify-between border rounded-md">
                <Input
                  type="text"
                  placeholder="Link or username here"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full border-none outline-none focus-visible:ring-transparent"
                />
                <Button
                  className="bg-primary_blue text-white rounded-r-md hover:bg-primary_blue"
                  onClick={() => {
                    setAddedSocials([...addedSocials, input]);
                    setInput("");
                  }}
                >
                  Add
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className=" font-Jakarta text-[16px] ml-auto font-medium text-white bg-primary_blue hover:bg-primary_blue p-3 w-fit"
            >
              Save
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Social;
