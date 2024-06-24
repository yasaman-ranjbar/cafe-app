import Register from "@/components/templates/Auth/Register";
import LoginLayout from "@/layout/loginLayout";

const index = () => {
  return (
    <LoginLayout>
      <Register />
    </LoginLayout>
  );
}

export default index