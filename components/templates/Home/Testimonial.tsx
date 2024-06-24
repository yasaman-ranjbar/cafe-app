import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import TestimonialCard from "@/components/modules/Testimonial/TestimonialCard";
import { TestimonialProps } from "@/components/modules/Testimonial/testimonial.types";

const Testimonial = ({ comment }: { comment: TestimonialProps[] }) => {
  return (
    <div>
      <div className="container flex flex-col gap-6 py-12 ">
        <SectionHeader header="Our Clients Say" title="TESTIMONIAL" />
        <div className="grid grid-cols-3 gap-y-8 gap-x-8">
          {comment.slice(0,6).map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
