import { CommentFormSchema, TalentFeedPost } from "@/types";
import { FC, useState } from "react";
import { Separator } from "../ui/separator";
import { DownloadCloud, FileText, MoreHorizontal } from "lucide-react";
import { Comment, Like, Share } from "@/assets";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { MdOutlinePermMedia } from "react-icons/md";

interface FeedProps {
  feed: TalentFeedPost;
}

const Feed: FC<FeedProps> = ({ feed }) => {
  const [showFullContent, setShowFullContent] = useState<boolean>(false);

  const commentForm = useForm<z.infer<typeof CommentFormSchema>>({
    resolver: zodResolver(CommentFormSchema),
  });

  function onSubmitComment(data: z.infer<typeof CommentFormSchema>) {
    console.log(data);
  }
  return (
    <div className="w-full bg-white flex flex-col gap-4 px-6 py-4">
      <div className=" flex items-center justify-between">
        {(feed.headline || feed.likedBy?.length) && (
          <p className="flex w-full font-Jakarta text-[13px] font-light text-dark_green ">
            {feed.headline ? (
              feed.headline
            ) : feed.likedBy?.length ? (
              feed.likedBy.length < 4 ? (
                <span className="">
                  {feed.likedBy?.map((like, index) => (
                    <span key={index} className="text-primary_blue font-medium">
                      {feed.likedBy?.length && index < feed?.likedBy.length - 1
                        ? ` ${like}, `
                        : `and ${like}`}
                    </span>
                  ))}
                  {""} liked this
                </span>
              ) : (
                `${feed.likedBy[0]} and ${
                  feed.likedBy?.length - 1
                } people liked this`
              )
            ) : null}
          </p>
        )}

        <MoreHorizontal size={20} className=" text-dark_green" />
      </div>

      <Separator className="flex w-full bg-dark_green/10" />
      <main className="flex flex-col gap-5">
        <section className="flex gap-2 items-center">
          <img src={feed.userImage} alt="" />
          <div className="flex gap-1 flex-col">
            <h1 className="text-[16px] flex items-center gap-2 font-medium font-Jakarta text-dark_green ">
              {feed.user}
              <span className="text-[13px] font-normal text-dark_green/70">
                {feed.time && feed.time}
              </span>
            </h1>
            <span className=" text-dark_green/70 font-Jakarta text-[13px]  font-light">
              {feed.userRole}
            </span>
          </div>
        </section>
        <section className="">
          <p className="text-dark_green cursor-pointer flex gap-1 flex-col font-Jakarta text-[13px] leading-6 text-justify font-normal">
            {feed.content.length > 200 && !showFullContent
              ? feed.content.slice(0, 200) + "..."
              : feed.content}
            <span
              className=" text-primary_blue underline"
              onClick={() => setShowFullContent(!showFullContent)}
            >
              {feed.content.length > 200 && !showFullContent
                ? "Read more"
                : "Read less"}
            </span>
          </p>
          {feed?.img && (
            <div className="">
              <div className=" h-[330px] w-full relative ">
                <img
                  src={feed.img}
                  alt=""
                  className=" object-cover h-full w-full"
                />
                {(feed.imgTitle || feed.imgDesc) && (
                  <div className="absolute top-0 left-0 p-5">
                    <h1 className="text-white font-Jakarta text-[25Px] leading-9 font-medium">
                      {feed.imgTitle && feed.imgTitle}
                    </h1>
                    <p className="text-white font-Jakarta text-[20px] leading-7 cursor-pointer font-light">
                      {feed.imgDesc && feed.imgDesc}
                    </p>
                  </div>
                )}
              </div>
              {(feed.imgAlt || feed.imgTitle) && (
                <div className=" bg-primary_blue/10 p-5 flex flex-col gap-[10px]">
                  <p className="text-dark_green font-Jakarta text-[13px] font-semibold">
                    {feed.imgAlt && feed.imgAlt}
                  </p>
                  <a
                    href=""
                    className=" font-Jakarta text-primary_blue underline text-[13px] font-normal"
                  >
                    {feed.imgLink && feed.imgLink}
                  </a>
                </div>
              )}
            </div>
          )}
          {feed?.files?.length && (
            <div className=" flex flex-col gap-[10px] w-full">
              {feed.files.map((file, index) => (
                <div
                  key={index}
                  className="w-full flex justify-between items-center p-2 bg-primary_blue/10"
                >
                  <div className="flex gap-3 items-center">
                    <FileText
                      size={20}
                      className="text-white bg-primary_blue p-2 h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-dark_green font-Jakarta text-[13px] md:text-[16px] font-medium">
                        {file.title}
                      </p>
                      <p className="text-dark_green/70 font-Jakarta text-[13px] font-normal">
                        {file.type} file, {file.size} kb
                      </p>
                    </div>
                  </div>

                  <DownloadCloud className="text-[24px] text-primary_blue cursor-pointer" />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Separator className="flex w-full bg-dark_green/10" />
      <div className=" bg-white flex justify-between">
        <div className="flex gap-10 items-center pr-2 border-r border-r-dark_green/10">
          <div className="flex gap-[6px] items-center cursor-pointer">
            <img src={Like} alt="" className=" h-4 w-4" />
            <p className="text-dark_green font-Jakarta text-[13px] font-medium">
              {feed.likes}
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex gap-[6px] items-center cursor-pointer">
                <img src={Comment} alt="" className=" h-4 w-4" />
                <p className="text-dark_green font-Jakarta text-[13px] font-medium">
                  {feed.comments}
                </p>
              </div>
            </DialogTrigger>
            <DialogContent className="flex flex-col gap-10 max-h-[100%] lg:max-h-[80%] max-w-full lg:max-w-[690px] w-full overflow-y-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar">
              <div className="flex flex-col gap-4">
                <main className="flex flex-col gap-5">
                  <section className="flex gap-2 items-center">
                    <img src={feed.userImage} alt="" />
                    <div className="flex gap-1 flex-col">
                      <h1 className="text-[16px] flex items-center gap-2 font-medium font-Jakarta text-dark_green ">
                        {feed.user}
                        <span className="text-[13px] font-normal text-dark_green/70">
                          {feed.time && feed.time}
                        </span>
                      </h1>
                      <span className=" text-dark_green/70 font-Jakarta text-[13px]  font-light">
                        {feed.userRole}
                      </span>
                    </div>
                  </section>
                  <section className="">
                    <p className="text-dark_green cursor-pointer flex gap-1 flex-col font-Jakarta text-[13px] leading-6 text-justify font-normal">
                      {feed.content.length > 200 && !showFullContent
                        ? feed.content.slice(0, 200) + "..."
                        : feed.content}
                      <span
                        className=" text-primary_blue underline"
                        onClick={() => setShowFullContent(!showFullContent)}
                      >
                        {feed.content.length > 200 && !showFullContent
                          ? "Read more"
                          : "Read less"}
                      </span>
                    </p>
                    {feed?.img && (
                      <div className="">
                        <div className=" h-[330px] w-full relative ">
                          <img
                            src={feed.img}
                            alt=""
                            className=" object-cover h-full w-full"
                          />
                          {(feed.imgTitle || feed.imgDesc) && (
                            <div className="absolute top-0 left-0 p-5">
                              <h1 className="text-white font-Jakarta text-[25Px] leading-9 font-medium">
                                {feed.imgTitle && feed.imgTitle}
                              </h1>
                              <p className="text-white font-Jakarta text-[20px] leading-7 cursor-pointer font-light">
                                {feed.imgDesc && feed.imgDesc}
                              </p>
                            </div>
                          )}
                        </div>
                        {(feed.imgAlt || feed.imgTitle) && (
                          <div className=" bg-primary_blue/10 p-5 flex flex-col gap-[10px]">
                            <p className="text-dark_green font-Jakarta text-[13px] font-semibold">
                              {feed.imgAlt && feed.imgAlt}
                            </p>
                            <a
                              href=""
                              className=" font-Jakarta text-primary_blue underline text-[13px] font-normal"
                            >
                              {feed.imgLink && feed.imgLink}
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                    {feed?.files?.length && (
                      <div className=" flex flex-col gap-[10px] w-full">
                        {feed.files.map((file, index) => (
                          <div
                            key={index}
                            className="w-full flex justify-between items-center p-2 bg-primary_blue/10"
                          >
                            <div className="flex gap-3 items-center">
                              <FileText
                                size={20}
                                className="text-white bg-primary_blue p-2 h-10 w-10 rounded-full"
                              />
                              <div className="flex flex-col gap-1">
                                <p className="text-dark_green font-Jakarta text-[13px] md:text-[16px] font-medium">
                                  {file.title}
                                </p>
                                <p className="text-dark_green/70 font-Jakarta text-[13px] font-normal">
                                  {file.type} file, {file.size} kb
                                </p>
                              </div>
                            </div>

                            <DownloadCloud className="text-[24px] text-primary_blue cursor-pointer" />
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                </main>
                <Separator className="flex w-full bg-dark_green/10" />
                <div className=" bg-white flex justify-between">
                  <div className="flex gap-10 items-center pr-2 border-r border-r-dark_green/10">
                    <div className="flex gap-[6px] items-center cursor-pointer">
                      <img src={Like} alt="" className=" h-4 w-4" />
                      <p className="text-dark_green font-Jakarta text-[13px] font-medium">
                        {feed.likes}
                      </p>
                    </div>

                    <div className="flex gap-[6px] items-center cursor-pointer">
                      <img src={Comment} alt="" className=" h-4 w-4" />
                      <p className="text-dark_green font-Jakarta text-[13px] font-medium">
                        {feed.comments}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-10 items-center pl-2 border-l border-l-dark_green/10">
                    <div className="flex gap-[6px] items-center cursor-pointer">
                      <img src={Share} alt="" className=" h-4 w-4" />
                      <p className="text-dark_green font-Jakarta text-[13px] font-medium">
                        share
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex gap-1">
                  <img src={feed.userImage} alt="" className="h-6 w-6" />
                  <Form {...commentForm}>
                    <form
                      onSubmit={commentForm.handleSubmit(onSubmitComment)}
                      className="w-full space-y-3"
                    >
                      <FormField
                        control={commentForm.control}
                        name="comment"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                placeholder={`Comment as ${feed.user}'`}
                                className="resize-none space-y-0 active:outline-none active:ring-transparent focus-visible:ring-transparent "
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <label
                            htmlFor="imageInput"
                            className="flex gap-2 items-center text-[16px] text-dark_green/50 cursor-pointer"
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
                        </div>
                        <div className="flex gap-5 md:gap-10 items-center">
                          <DialogClose className=" font-Jakarta font-medium text-[16px] text-dark_green/70 ">
                            Cancel
                          </DialogClose>

                          <Button
                            type="submit"
                            className=" bg-primary_blue/70 hover:bg-primary_blue text-white text-[16px] text-center border-none outline-none"
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    </form>
                  </Form>
                </div>
                <div className="flex flex-col gap-8 w-full bg-primary_blue/5 rounded-sm p-3 ">
                  {feed.commentsList.length &&
                    feed.commentsList?.map((comment, index) => (
                      <div className="flex flex-col gap-5" key={index}>
                        <main className="flex flex-col gap-5">
                          <section className="flex gap-2 items-center">
                            <img src={comment.userImage} alt="" />
                            <div className="flex gap-1 flex-col">
                              <h1 className="text-[16px] flex items-center gap-2 font-medium font-Jakarta text-dark_green ">
                                {comment.user}
                                <span className="text-[13px] font-normal text-dark_green/70">
                                  {comment.time && comment.time}
                                </span>
                              </h1>
                              <span className=" text-dark_green/70 font-Jakarta text-[13px]  font-light">
                                {comment.userRole}
                              </span>
                            </div>
                          </section>
                          <section className="">
                            <p className="text-dark_green flex gap-1 flex-col font-Jakarta text-[13px] leading-6 text-justify font-normal">
                              {comment.comment}
                            </p>
                            {comment?.img && (
                              <div className="">
                                <div className=" h-[330px] w-full relative ">
                                  <img
                                    src={comment.img}
                                    alt=""
                                    className=" object-cover h-full w-full"
                                  />
                                </div>
                              </div>
                            )}
                          </section>
                        </main>
                        <Separator className="flex w-full bg-dark_green/10" />
                        <div className=" flex justify-between">
                          <div className="flex gap-10 items-center pr-2 border-r border-r-dark_green/10">
                            <div className="flex gap-[6px] items-center cursor-pointer">
                              <img src={Like} alt="" className=" h-4 w-4" />
                              <p className="text-dark_green font-Jakarta text-[13px] font-medium">
                                {feed.likes}
                              </p>
                            </div>

                            <div className="flex gap-[6px] items-center cursor-pointer">
                              <img src={Comment} alt="" className=" h-4 w-4" />
                              <p className="text-dark_green font-Jakarta text-[13px] font-medium">
                                {feed.comments}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-10 items-center pl-2 border-l border-l-dark_green/10">
                            <div className="flex gap-[6px] items-center cursor-pointer">
                              <img src={Share} alt="" className=" h-4 w-4" />
                              <p className="text-dark_green font-Jakarta text-[13px] font-medium">
                                share
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex gap-10 items-center pl-2 border-l border-l-dark_green/10">
          <div className="flex gap-[6px] items-center cursor-pointer">
            <img src={Share} alt="" className=" h-4 w-4" />
            <p className="text-dark_green font-Jakarta text-[13px] font-medium">
              share
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
