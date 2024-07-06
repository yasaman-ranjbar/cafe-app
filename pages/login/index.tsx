import Login from "@/components/templates/Auth/Login";
import LoginLayout from "@/layout/loginLayout";

const index = () => {
  return (
    <LoginLayout>
      <Login />
    </LoginLayout>
  );
};

export const getServerSideProps = async(context: { req: Record<string, any> }) => {

  const token = context.req.cookies.token;
  if (token) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
};

export default index;
