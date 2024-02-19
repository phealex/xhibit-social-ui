import { ChangeEvent, FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Dmitry, uploadMedia } from "@/assets";
import { LucideFiles } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { MdOutlinePermMedia } from "react-icons/md";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { RiDeleteBin5Line } from "react-icons/ri";

const NewPost: FC = () => {
  const [image, setImage] = useState<File>();

  const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setImage(event.target.files[0]);
    }
  };
  return (
    <div className="bg-white px-[30px] py-[20px] flex flex-col gap-3 w-full">
      <p className=" font-Jakarta uppercase font-medium text-[13px] text-dark_green">
        New post
      </p>
      <Dialog>
        <DialogTrigger className=" border p-3 border-dark_green/50 rounded-[5px] w-full font-Jakarta text-base text-left text-dark_green/50 cursor-pointer">
          Whats on your mind?
        </DialogTrigger>
        <DialogContent className="bg-white rounded-[5px] p-5  flex flex-col gap-[50px]">
          <DialogHeader className="flex gap-2 flex-row">
            <img src={Dmitry} alt="" className="h-[40px] w-[40px]" />
            <p className=" font-Jakarta text-[20px] font-semibold leading-7 text-dark_green">
              Dmitry Kargaev
            </p>
          </DialogHeader>

          <div className="flex flex-col gap-5">
            <Textarea
              placeholder="Share whats on your mind"
              className=" min-h-72 outline-none ring-transparent"
            />
            <div className="flex justify-between">
              <div className="flex gap-[30px] items-center">
                <label
                  htmlFor="imageInput"
                  className="flex gap-2 items-center text-[20px] text-dark_green/50 cursor-pointer"
                >
                  <MdOutlinePermMedia />
                  Add media
                </label>
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  className=" hidden"
                />

                <label
                  htmlFor="fileInput"
                  className="flex gap-2 items-center text-[20px] text-dark_green/50 cursor-pointer"
                >
                  <LucideFiles />
                  Add file
                </label>
                <input id="fileInput" type="file" className=" hidden" />
              </div>
              <Button className=" bg-primary_blue/70 hover:bg-primary_blue border-none outline-none rounded-md font-Jakarta text-base px-3 py-2  ">
                Post
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger className=" ml-auto flex items-center gap-2 font-Jakarta text-base text-dark_green/50 cursor-pointer">
          <MdOutlinePermMedia className=" text-[20px] text-dark_green/50 cursor-pointer" />
          Media
        </DialogTrigger>
        <DialogContent className="bg-white rounded-[5px] p-5  flex flex-col gap-[50px]">
          <div className="flex flex-col gap-5 pt-7">
            {image ? (
              <div className="flex flex-col gap-3 relative">
                <RiDeleteBin5Line
                  className=" text-[20px] text-white absolute cursor-pointer right-0 m-2"
                  onClick={() => setImage(undefined)}
                />
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="h-[300px] object-cover w-full"
                />

                <Input
                  placeholder="Add a comment..."
                  className="w-full outline-none border-none font-Jakarta text-base text-dark_green/50 "
                />
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-7">
                  <img
                    src={uploadMedia}
                    alt=""
                    className="h-[100px] w-[100px] mx-auto"
                  />
                  <div className="flex flex-col gap-3">
                    <h1 className=" font-Jakarta text-[20px] leading-7 text-dark_green text-center">
                      Select the file you want to upload
                    </h1>
                    <p className=" font-Jakarta text-[13px] leading-6 text-center text-dark_green/70 ">
                      Share images, files or a single video in your post.
                    </p>
                  </div>
                </div>

                <label
                  htmlFor="upload"
                  className=" bg-primary_blue rounded-md max-w-fit mx-auto hover:bg-primary_blue border-none outline-none p-2 font-medium text-base text-white cursor-pointer"
                >
                  Upload from computer
                </label>
                <input
                  id="upload"
                  type="file"
                  accept="image/*"
                  className=" hidden"
                  onChange={handleImageSelect}
                />
              </div>
            )}
            <div className="flex justify-end">
              <Button className=" bg-primary_blue/70 hover:bg-primary_blue  border-none outline-none rounded-md font-Jakarta text-base px-3 py-2  ">
                Post
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewPost;
