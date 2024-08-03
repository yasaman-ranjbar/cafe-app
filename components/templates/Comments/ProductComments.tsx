import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TestimonialProps } from "@/components/modules/Testimonial/testimonial.types";
import TestimonialCard from "@/components/modules/Testimonial/TestimonialCard";
import { AddCommentProps } from "@/services/requests/comment";

const ProductComments = ({ comment }: { comment: AddCommentProps[] }) => {
  return (
    <div className="container py-20">
      <SectionHeader header="Product Comments" title="TESTIMONIAL" />

      <Swiper
        loop
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {comment?.map((item) => (
          <SwiperSlide key={item._id}>
            <TestimonialCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductComments;
