const Company = () => {
  return (
    <div className="py-[21px] bg-[#c5c7c9] w-full">
      <div className="  mx-auto  w-[1200px] ">
        <ul className="flex items-center justify-center flex-shrink max-md:gap-[18px] gap-[64px]">
          <li>
            <img
              className="w-[126px]"
              src="https://www.studypool.com/img/mediaLogos/yahoo-min.png"
            />
          </li>{" "}
          <li>
            <img
              className="w-[126px]"
              src="https://www.studypool.com/img/mediaLogos/nas-min.png"
            />
          </li>{" "}
          <li>
            <img
              className="w-[126px]"
              src="https://www.studypool.com/img/mediaLogos/inc-min.png"
            />
          </li>{" "}
          <li>
            <img
              className="w-[126px]"
              src="https://www.studypool.com/img/mediaLogos/ent-min.png"
            />
          </li>{" "}
          <li>
            <img
              className="w-[126px]"
              src="https://www.studypool.com/img/mediaLogos/huff-min.png"
            />
          </li>{" "}
        </ul>
      </div>
    </div>
  );
};

const tutoringSteps = [
  {
    imgSrc: "https://www.studypool.com/img/howItWorks/question.png",
    title: "Find Past Year Papers",
    description:
      "Search and access previous year question papers in PDF format for various subjects.",
  },
  {
    imgSrc: "https://www.studypool.com/img/howItWorks/explain.png",
    title: "Ask AI for Answers",
    description:
      "Get instant AI-generated answers and explanations for any question from the PYQs.",
  },
  {
    imgSrc: "https://www.studypool.com/img/howItWorks/connect.png",
    title: "Discuss with Peers & Experts",
    description:
      "Engage in discussions with other students and tutors to understand concepts better.",
  },
];

const FeatureCard = ({
  feature,
}: {
  feature: {
    imgSrc: string;
    title: string;
    description: string;
  };
}) => {
  return (
    <div>
      <div className="flex flex-col items-center text-center gap-4">
        {" "}
        <img className="w-[48px] h-[48px]" src={feature.imgSrc} />{" "}
        <h2 className="text-[#000080c6]">{feature.title}</h2>
        <p className="text-[18px] text-gray-500 ">{feature.description}</p>
      </div>{" "}
    </div>
  );
};
const subjects = [
  {
    name: "Javascript",
    imgSrc: "/img/splashPage/subjects/javascript-new-v2.jpg",
  },
  {
    name: "Music Theory",
    imgSrc: "/img/splashPage/subjects/music-theory-new.jpg",
  },
  { name: "Spanish", imgSrc: "/img/splashPage/subjects/spanish-new.jpg" },
  {
    name: "Communications",
    imgSrc: "/img/splashPage/subjects/communications-new.jpg",
  },
  { name: "Programming", imgSrc: "/img/splashPage/subjects/programming.png" },
  {
    name: "Rocket Science",
    imgSrc: "/img/splashPage/subjects/rocket-science-new.jpg",
  },
  {
    name: "Linear Algebra",
    imgSrc: "/img/splashPage/subjects/linear-algebra-new.jpg",
  },
  {
    name: "Chemical Engineering",
    imgSrc: "/img/splashPage/subjects/chemical-engineering-new-v2.jpg",
  },
  {
    name: "Macro Economics",
    imgSrc: "/img/splashPage/subjects/macro-economics-new-v2.jpg",
  },
  {
    name: "International Law",
    imgSrc: "/img/splashPage/subjects/international-law-new-v2.jpg",
  },
  {
    name: "Immunology",
    imgSrc: "/img/splashPage/subjects/immunology-new-v1.jpg",
  },
  { name: "Literature", imgSrc: "/img/splashPage/subjects/literature-new.jpg" },
];
const subjectSection = () => {
  return <div></div>;
};
export const OfferSection = () => {
  return (
    <section>
      <div className=" z-30">
        <Company />
        <div className="w-[1200px] mx-auto mt-[28px]">
          {" "}
          <h2 className="text-[24px]  text-[#000080] text-center my-[64px]">
            How Q&A Tutoring Works
          </h2>
          <div className="flex gap-5">
            {tutoringSteps.map((value, index) => {
              return <FeatureCard key={index} feature={value} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
