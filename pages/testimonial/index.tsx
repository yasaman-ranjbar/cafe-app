import PageHeader from "@/components/modules/PageHeader/PageHeader";
import { TestimonialProps } from "@/components/modules/Testimonial/testimonial.types";
import Testimonial from "@/components/templates/Home/Testimonial";
import PageLayout from "@/layout/PageLayout";

interface CommentDataProps {
  comment: TestimonialProps[];
}

function Index({ comment }: CommentDataProps) {
  return (
    <PageLayout>
      <PageHeader title="testimonial" route="Testimonial" />
      <Testimonial comment={comment} />
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const CommentRes = await fetch("http://localhost:4000/comment");
  const commentData = await CommentRes.json();

  return {
    props: {
      comment: commentData,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Index;
