import { coinbaseProject, instagram, linkedin } from "@/assets";
import { whosHiring } from "@/constants";
import { FC } from "react";
import { Link, MapPin } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useJobsDisplay } from "@/store";
import { VscOrganization } from "react-icons/vsc";
import { RiHomeOfficeFill } from "react-icons/ri";

const HiringCompanyModal: FC = () => {
    const showStartupProfile = useJobsDisplay(
        (state) => state.showStartupProfile
      );
  return (
    <div>
          {showStartupProfile &&
        whosHiring
          .filter(
            (company) =>
              company.id === useJobsDisplay.getState().startupProfileId
          )
          .map((company) => (
            <Dialog
              open={showStartupProfile}
              key={company.id}
              onOpenChange={() => {
                useJobsDisplay.setState({ showStartupProfile: false });
              }}
            >
              <DialogContent className="flex flex-col gap-5 p-6 rounded-lg bg-accent_blue min-w-[768px]">
                <section className="flex flex-col gap-5 p-4 bg-white rounded-md">
                  <div className="flex gap-3 items-center">
                    <img
                      src={company.img}
                      alt=""
                      className=" h-[50px] w-[50px]"
                    />
                    <div className="flex flex-col gap-[5px]">
                      <p className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
                        {company.companyName}
                      </p>
                      <span className=" font-Jakarta font-normal text-[13px] leading-4 text-dark_green">
                        We're building an open financial system for the world.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-5">
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-1 items-center">
                        <RiHomeOfficeFill className=" h-4 w-4 text-dark_green/70" />
                        <p className=" font-Jakarta text-[13px] font-normal leading-4 text-dark_green/70 ">
                          Industry:
                        </p>
                      </div>
                      <p className=" font-Jakarta text-[13px] leading-4 font-medium text-dark_green/70 ">
                        Cryptocurrency
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-1 items-center">
                        <VscOrganization className=" h-4 w-4 text-dark_green/70" />
                        <p className=" font-Jakarta text-[13px] font-normal leading-4 text-dark_green/70 ">
                          Company size:
                        </p>
                      </div>
                      <p className=" font-Jakarta text-[13px] leading-4 font-medium text-dark_green/70 ">
                        200 - 800
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-1 items-center">
                        <MapPin className=" h-4 w-4 text-dark_green/70" />
                        <p className=" font-Jakarta text-[13px] font-normal leading-4 text-dark_green/70 ">
                          San Francisco, CA, USA
                        </p>
                      </div>
                      {/* <p className=" font-Jakarta text-[13px] leading-4 font-medium text-dark_green/70 ">
                    Cryptocurrency
                </p> */}
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-1 items-center">
                        <Link className=" h-4 w-4 text-dark_green/70" />
                        <a
                          href="https://www.coinbase.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-Jakarta text-[13px] font-normal leading-4 text-primary_blue underline-offset-2 cursor-pointer"
                        >
                          Coinbase.com
                        </a>
                      </div>
                      {/* <p className=" font-Jakarta text-[13px] leading-4 font-medium text-dark_green/70 ">
                    Cryptocurrency
                </p> */}
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1 items-center">
                      <p className=" font-Jakarta text-[13px] font-normal leading-4 text-dark_green/70 ">
                        Market:
                      </p>
                    </div>
                    <p className=" font-Jakarta text-[13px] leading-4 font-medium text-dark_green/70 ">
                      Cryptocurrency
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={linkedin}
                      alt=""
                      className=" h-6 w-6 object-cover"
                    />
                    <img
                      src={instagram}
                      alt=""
                      className=" h-6 w-6 object-cover"
                    />
                  </div>
                </section>
                <section className="flex flex-col gap-5 p-4 bg-white rounded-md">
                  <h1 className=" font-Jakarta font-medium text-base text-dark_green">
                    About {company.companyName}
                  </h1>
                  <p className=" font-Jakarta font-normal text-[13px]  leading-4 text-dark_green/70">
                    Founded in June of 2012, Coinbase is a digital currency
                    wallet and platform where merchants and consumers can
                    transact with new digital currencies like bitcoin, Ethereum,
                    and Litecoin. Our vision is to bring more innovation,
                    efficiency, and equality of opportunity to the world by
                    building an open financial system. Our first step on that
                    journey is making digital currency accessible and
                    approachable for everyone. Two principles guide our efforts.
                    First, be the most trusted company in our domain. Second,
                    create user-focused products that are easier and more
                    intuitive to use.
                  </p>
                </section>
                <section className="flex flex-col gap-5 p-4 bg-white rounded-md">
                  <h1 className=" font-Jakarta font-medium text-base text-dark_green">
                    What is Coinbase building?
                  </h1>
                  <div className="flex gap-3 items-center">
                    <img src={coinbaseProject} alt="" className=" h-[80px] w-[100px]  object-cover" />
                    <img src={coinbaseProject} alt="" className=" h-[80px] w-[100px]  object-cover" />
                    <img src={coinbaseProject} alt="" className=" h-[80px] w-[100px]  object-cover" />
                  </div>
                  <p className=" font-Jakarta font-normal text-[13px]  leading-4 text-dark_green/70">
                    Digital Currency, Software, Payment Processing, Bitcoin,
                    Technology, API, Cryptography, Bitcoin Exchange, Digital
                    Currency Exchange, Virtual Currency, FinTech, Ethereum,
                    Ether, and Blockchain
                  </p>
                </section>
              </DialogContent>
            </Dialog>
          ))}
    </div>
  )
}

export default HiringCompanyModal