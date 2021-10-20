import React, { useState, useEffect } from "react";
import Fetcher from "./Fetcher";
import AxiosCancel from "./AxiosCancel";

function App() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMounted(false);
    }, 500);
  }, []);

  return (
    <div>
      <Fetcher url="https://reqres.in/api/users/1?delay=2" />
      <hr />

      {mounted && (
        <>
          {console.log("Token")}
          <AxiosCancel url="https://reqres.in/api/users/2?delay=2" />
          <hr />
          {/* <FetchCancel url="https://reqres.in/api/users/3?delay=2" /> */}
          <hr />
        </>
      )}
    </div>
  );
}

export default App;
