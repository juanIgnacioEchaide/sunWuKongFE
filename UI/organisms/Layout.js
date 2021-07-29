import { getBrowserCookie } from "../../utils/auth";

const Nav = ({ routes, index }) => {
  return <div>soy el</div>;
};

const withLayout = ({ children, size }) => {
  const userAuthenticated = getBrowserCookie();

  if (!userAuthenticated) {
    return <div>{children}</div>;
  }
  return (
    <div size={size}>
      <Nav />
      {children}
    </div>
  );
};

export async function getServerSideProps({ size }) {
  return {
    props: {
      size: size,
    },
  };
}
export default withLayout;
