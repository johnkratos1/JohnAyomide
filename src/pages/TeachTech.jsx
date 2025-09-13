import React from "react";
import K1 from "./../assets/kid1.jpg";
import K2 from "./../assets/young.png";
import KBg from "./../assets/teen.png";
import { ContactSection } from "../components/ContactSection";

const TeachTech = () => {
  const dataList = [
    {
      id: 1,
      type: "kid",
      title: "Primary Level (Kids)",
      notes:
        "This is for kids in primary sections, between Basic 3 - 6. Introduction to basic and fundamental programming and coding skills through simple graphival design, storytelling, animation and much more ...",
      programs: [
        "Scratch Desktop",
        "App Inventor",
        "2D Graphical packages(eg. Paint)",
      ],
      image: K1,
    },
    {
      id: 2,
      type: "Youngstar",
      title: "Junior Level (JSS Class)",
      notes:
        "This is for Students in Junior Sections. Introduction to basic and fundamentals of web development, Styling and responsiveness by building real-life applications such as Calculator, Small Website, Animations and Lots more ...",
      programs: ["HTML", "CSS", "Bootstrap", "TailwindCss"],
      image: K2,
    },
    {
      id: 3,
      type: "Teens",
      title: "Senior Level (SSS Class)",
      notes:
        "This is for Students in Senior sections. Introduction to basic and fundamental programming languages for building Web and Mobile apps. This level includes mostly 90% hands-on practicals for proper development of languages fundamentals and confidence in the coding skills and comprehension. ",
      programs: [
        "Javascript",
        "Python",
        "React (Web App)",
        "React Native (Mobile App)",
      ],
      image: KBg,
    },
  ];

  const Cards = ({ item }) => {
    return (
      <div className="flex flex-col lg:flex-row border border-orange-300 rounded-xl p-3 w-full gap-5">
        <div className="w-full lg:w-1/2">
          <img src={item.image} alt="images" className="w-full rounded-xl" />
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <p className="text-orange-400 text-xl font-bold text-center">
            {item?.title}
          </p>

          <p className="mt-2 font-medium text-neutral-700 text-base text-center">
            {item?.notes}
          </p>

          <p className="mt-5 font-bold text-base lg:text-[17px] bg-amber-400/50 w-fit px-2.5 py-1.5 rounded-[6px] self-center">
            Programming Laguages / Packages
          </p>

          <div className="mt-2">
            {item.programs.map((items, index) => (
              <p className="text-[18px] text-orange-500 font-medium">{items}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-background py-3 flex flex-col items-center">
      <p className="text-primary text-3xl font-black ">Teach Tech</p>

      <div className="mt-6 flex px-3 lg:p-5 lg:w-2/3 border border-purple-300/20 rounded-3xl p-2 bg-amber-200/40">
        <p className="text-[18px] font-normal ">
          <span className="text-primary text-2xl font-bold">Welecome,</span>{" "}
          Teach-Tech is a Teaching Service that introduces you to the life of{" "}
          <span className="text-primary text-xl font-bold">
            Coding, Programming and SoftWare Development,
          </span>{" "}
          in a much more
          <span className="text-blue-500 text-xl font-bold">
            {" "}
            Fun, Easy and Efiecient
          </span>{" "}
          way of learning that allows not only{" "}
          <span className="text-cyan-400 text-xl font-bold">
            Quick Growth and Development
          </span>{" "}
          but{" "}
          <span className="text-red-300 text-xl font-bold">
            Quality Understanding
          </span>{" "}
          of{" "}
          <span className="text-green-700/80 text-2xl font-bold">
            Computer Programing
          </span>
        </p>
      </div>

      <div className="mt-4 w-full px-2 flex flex-col justify-center items-center">
        <p className="text-primary/95 text-xl font-bold underline underline-offset-3">
          What We Offer
        </p>

        <div className="mt-3 w-full lg:w-4/5 flex flex-col gap-5">
          {dataList.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>

      {/* Contact Us */}
      <ContactSection />
    </div>
  );
};

export default TeachTech;
