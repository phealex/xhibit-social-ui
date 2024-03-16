import { Coinbase } from "@/assets";
import { Link, MapPin } from "lucide-react";
import { FC } from "react";
import { RiHomeOfficeFill } from "react-icons/ri";
import { VscOrganization } from "react-icons/vsc";

const CompanyInfo: FC = () => {
  return (
    <div className="flex gap-5 flex-col">
      <section className="flex gap-3 flex-col">
        <p className=" font-Jakarta font-semibold text-[13px] leading-6">
          About Coinbase
        </p>
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
      </section>
      <section className="flex gap-3 flex-col">
        <p className=" font-Jakarta flex items-center gap-2 font-semibold text-[13px] leading-6">
          <img src={Coinbase} alt="" className=" h-4 w-4" />
          Coinbase
        </p>
        <p className=" font-normal  font-Jakarta text-[13px] leading-5 text-dark_green/70 ">
          Coinbase is a prominent cryptocurrency exchange platform that
          facilitates the buying, selling, and storing of various
          cryptocurrencies, including Bitcoin, Ethereum, and others. Founded in
          2012, Coinbase has emerged as a popular and user-friendly platform for
          individuals and businesses to trade digital currencies.
        </p>
        <p className=" font-normal  font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
          Candidate hired: <span className=" text-dark_green/50">20</span>
        </p>
      </section>
    </div>
  );
};

export default CompanyInfo;
