"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import { Providers } from "./components/Providers";

export default function ClientLayout({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // loader time

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showLoader ? <Loading /> : <Providers>{children}</Providers>}
    </>
  );
}
