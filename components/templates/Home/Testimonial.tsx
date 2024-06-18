import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import TestimonialCard from "@/components/modules/Testimonial/TestimonialCard";
import { TestimonialProps } from "@/components/modules/Testimonial/testimonial.types";

const Testimonial = ({ comment }: { comment: TestimonialProps[] }) => {
  return (
    <div className="flex flex-col gap-6 py-12">
      <SectionHeader header="Our Clients Say" title="TESTIMONIAL" />
      {comment.map((item) => (
        <TestimonialCard
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default Testimonial;
