import React, { useState, useEffect } from "react";
import { Message } from "semantic-ui-react";
import styled from "styled-components/macro";

/**
 * Notify when app is working offline/online
 */
const SWNotification = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      window.addEventListener("online", notifyOffOnLine);
      window.addEventListener("offline", notifyOffOnLine);
    });
  }, []);

  async function notifyOffOnLine() {
    if (navigator.onLine) {
      //Check internet connection when is onLine.
      //(onLine return true if is connected to net)
      const online = await fetch("/");
      if (online.status >= 200 && online.status < 300) {
        setIsOffline(false);
      } else {
        setIsOffline(true);
      }
    } else {
      setIsOffline(true);
    }
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  }

  return (
    visible && (
      <Toast>
        <Message
          size="large"
          compact
          positive={!isOffline}
          negative={isOffline}
        >
          {isOffline ? (
            <>El sitio está funcionando offline</>
          ) : (
            <>El sitio está funcionando online</>
          )}
        </Message>
      </Toast>
    )
  );
};

const Toast = styled.div`
  position: fixed;
  top: 60px;
  z-index: 101;
  left: 50%;
  transform: translate(-50%, 0%);
  box-shadow: 0 0 10px;
`;

export default SWNotification;
