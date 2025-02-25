import { FaBorderAll } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
const allSub = [
  "Business",
  "Humanities",
  "Mathematics",
  "Programming",
  "Science",
  "Writing",
  "Health & Medical",
  "Economics",
  "Engineering",
  "Computer Science",
  "Law",
  "Foreign Languages",
];
const HoveredSubjects = () => {
  return (
    <div>
      <ul>
        <li>Science</li>
      </ul>
    </div>
  );
};
export const Navigation = () => {
  return (
    <section className=" border-[1px] border-x-0 border-b-0">
      <div>
        <ul className="flex items-center justify-between py-3 bg-orange-400 mx-auto w-[1280px]">
          <li className="flex group items-center cursor-pointer gap-2">
            <FaBorderAll />
            <span className="text-[18px] cursor-pointer group-hover:text-[#69D4F3]">
              All Subjects
            </span>
            <FaChevronDown />
          </li>
          <li className="flex items-center cursor-pointer group gap-2">
            <SiBmcsoftware />
            <span className="text-[18px] cursor-pointer group-hover:text-[#69D4F3]">
              Software Engineering
            </span>
            <FaChevronDown />
          </li>
          <li className="flex group items-center gap-2">
            <FaNetworkWired />
            <span className="text-[18px] group-hover:text-[#69D4F3]">
              Network Engineering
            </span>
            <FaChevronDown />
          </li>
        </ul>
      </div>
    </section>
  );
};
