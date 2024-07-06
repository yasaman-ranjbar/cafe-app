import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import { getMe } from "@/services/requests/auth";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

// export async function getServerSideProps(context: { req: Record<string, any> }) {

//   const token = context.req.cookies.token;

//   const res = await getMe();
//   return {
//     props: {},
//   };
// }

export default PageLayout