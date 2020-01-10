import React, { useState, useEffect } from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    setIsOnline(true);

    return function cleanup() {
      setIsOnline(false);
    };
  }, [isOnline]);

  if (isOnline == null) {
    return <>Loading.....</>;
  }
  return isOnline ? <>Online</> : <>OffLine</>;
};

export default OnlineStatus;
