import React from "react";

export function Home() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <button onClick={refreshPage}>Refresh Page</button>
    </>
  );
}
export default Home;
