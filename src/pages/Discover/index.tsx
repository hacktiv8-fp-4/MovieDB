import { Outlet } from "react-router-dom";

const Discover = () => {
  return (
    <>
      <h1>Discover</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Discover;
