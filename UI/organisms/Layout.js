import { getBrowserCookie } from "../../utils/auth";

const withLayout = ({ children, size }) => {
  const userAuthenticated = getBrowserCookie();

  if (!userAuthenticated) {
    return <div>{children}</div>;
  }
  return (
    <div size={size}>
      <div>lay out con algo</div>
      {children}
    </div>
  );
};

export default withLayout;
