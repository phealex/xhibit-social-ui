import { Sparkle, facebook, instagram, linkedin, twitter } from "@/assets";
import { Copy, Share2 } from "lucide-react";
import { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { cn } from "@/lib/utils";
import CopyToClipboard from "react-copy-to-clipboard";
import { useToast } from "../ui/use-toast";

interface Props {
  className: string;
}
const Share: FC<Props> = ({ className }) => {

    const {toast} = useToast()
  return (
    <div className={cn(" flex ml-auto gap-5 items-center", className)}>
      <div className="flex gap-[10px] items-center w-fit">
        <img src={Sparkle} alt="" className=" h-3 " />
        <p className=" font-Jakarta font-medium text-[13px] leading-4 text-primary_blue">
          Actively hiring
        </p>
      </div>
      <Dialog>
        <DialogTrigger className="flex gap-[10px] items-center w-fit">
          <Share2 className="h-3 w-3 text-dark_green/70" />
          <p className=" font-Jakarta font-medium text-[13px] leading-4 text-dark_green/70">
            Share
          </p>
        </DialogTrigger>
        <DialogContent className=" max-h-[400px] max-w-[500px] flex justify-center gap-10 p-6 flex-col">
          <h1 className=" font-Jakarta font-medium text-[25px] leading-9">
            Share this job
          </h1>
          <div className="h-[54px] p-3 flex items-center border border-[#8e9faa] ">
            <p className=" font-Jakarta font-normal text-base text-dark_green flex-1 w-full">
              {window.location.href}
            </p>
            <CopyToClipboard text={window.location.href} onCopy={() => {
                toast({
                    title: "    Link copied",
                    description: "The link has been copied to your clipboard",
                    
                })

            }}>
              <div className="flex gap-2 w-fit cursor-pointer group">
                <Copy className=" h-5 w-5 text-dark_green/70 group-hover:text-primary_blue" />
                <p className=" hidden md:flex font-Jakarta font-medium text-base text-dark_green group-hover:text-primary_blue">
                  Copy link
                </p>
              </div>
            </CopyToClipboard>
          </div>
          <div className="flex gap-[25px] flex-wrap">
            <img src={facebook} alt="" className=" h-10 w-10 cursor-pointer" />
            <img src={instagram} alt="" className=" h-10 w-10 cursor-pointer" />
            <img src={twitter} alt="" className=" h-10 w-10 cursor-pointer" />
            <img src={linkedin} alt="" className=" h-10 w-10 cursor-pointer" />

          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Share;
