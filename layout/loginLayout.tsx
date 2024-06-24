
interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <div className="flex justify-center items-center container min-h-screen">{children}</div>
  );
};

export default LoginLayout;
