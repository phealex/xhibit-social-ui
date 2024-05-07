import { FC } from "react";

const JobDescription: FC = () => {
  return (
    <div className=" w-full flex gap-5 flex-col">
      <section className="flex gap-3 flex-col">
        <p className=" font-Jakarta font-semibold text-[13px] leading-6">
          Experience & Skills
        </p>
        <ul className=" list-disc pl-5 flex flex-col gap-2">
          <li className=" font-normal list-item font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
            5+ years of software development experience
          </li>
          <li className=" font-normal list-item font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
            Can hold his/her ground in technically complex discussions
          </li>{" "}
          <li className=" font-normal list-item font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
            Robust background working with HTML, CSS/Sass & Javascript
          </li>{" "}
          <li className=" font-normal list-item font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
            Must have solid computer science background such as (B.S in computer
            science)
          </li>{" "}
          <li className=" font-normal list-item font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
            3+ years of experience in ReactJS and functional components/React
            Hooks
          </li>{" "}
        </ul>
      </section>
      <section className="flex gap-3 flex-col">
        <p className=" font-Jakarta font-semibold text-[13px] leading-6">
          Why Will You Love Coinbase?
        </p>
        <ul className=" list-disc pl-5 flex flex-col gap-2">
          <li className=" font-normal list-item font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
            Benefits include health insurance, paid holidays, a MacBook Pro
            laptop is provided, and a monthly stipend (depending on location)
          </li>
          <li className=" font-normal list-item font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
            A collaborative work environment
          </li>{" "}
          <li className=" font-normal list-item font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
            Contract type: freelance
          </li>{" "}
        </ul>
      </section>
      <section className="flex gap-3 flex-col">
        <p className=" font-Jakarta font-semibold text-[13px] leading-6">
          Salary range
        </p>
        <p className=" font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
          Benefits include health insurance, paid holidays, a MacBook Pro laptop
          is provided, and a monthly stipend (depending on location)
        </p>
      </section>{" "}
      <section className="flex gap-3 flex-col">
        <p className=" font-Jakarta font-semibold text-[13px] leading-6">
          Who we are?
        </p>
        <p className=" font-Jakarta text-[13px] leading-5 text-dark_green/70 ">
          Coinbase is a prominent cryptocurrency exchange platform that
          facilitates the buying, selling, and storing of various
          cryptocurrencies, including Bitcoin, Ethereum, and others. Founded in
          2012, Coinbase has emerged as a popular and user-friendly platform for
          individuals and businesses to trade digital currencies.
        </p>
      </section>{" "}
      <section className="flex gap-3 flex-col">
        <p className=" font-Jakarta font-semibold text-[13px] leading-6">
          Who we you?
        </p>
        <p className=" font-Jakarta text-[13px] leading-5 text-dark_green/70 ">
          Are you passionate about building great products that
          impact lives? Are you passionate about helping people continue to
          learn and grow in their careers? Are you interested in working with a
          talented mission-driven team? Are you inspired by building products
          that delight users and solve hard problems? If so, a Sr. Engineer role
          in our front end engineering team may be your dream job. We are
          looking for 2 senior engineers to join our growing front-end
          engineering team. You will be working with our front-end team,
          back-end engineers, designers, product team, and quality assurance
          teams to collaborate and ship the next generation of online learning
          experiences. You will be playing a role in setting the technical
          direction, and solving front end problems. You will work with back-end
          teams and other internal stakeholders closely to build great products
          that empower our customers to effectively offer delightful learning
          experiences on the platform.
        </p>
      </section>{" "}
    </div>
  );
};

export default JobDescription;
