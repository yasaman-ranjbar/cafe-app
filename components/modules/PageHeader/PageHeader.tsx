import About from "@/components/templates/Home/About";
import { PageHeaderProps } from "./pageHeader.types";

const PageHeader: React.FC<PageHeaderProps> = ({ title, route }) => {
  return (
    <div className="relative ">
      <div className="bg-background-bg bg-cover relative h-[400px] flex flex-col items-center justify-center text-center">
        <div className="absolute left-0 top-0 size-full bg-brown/90" />
        <div className="z-10">
          <h1 className="text-white text-6xl font-bold pt-24 mb-4 uppercase">
            {title}
          </h1>
          <h2 className=" text-white text-lg font-normal">Home / {route}</h2>
        </div>
      </div>

      <div className="absolute -bottom-7 right-0 w-full h-10 bg-background-bottom-paper bg-repeat-x z-50" />
    </div>
  );
};

export default PageHeader;
