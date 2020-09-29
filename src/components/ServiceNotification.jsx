import React, { useState, useEffect } from "react";
import { Message } from "semantic-ui-react";
import styled from "styled-components/macro";

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
      const online = await fetch("/");
      if (online.status >= 200 && online.status < 300) {
        setIsOffline(false);
      } else {
        setIsOffline(true);
      }
    } else {
      const online = await fetch("/");
      if (online.status >= 200 && online.status < 300) {
        setIsOffline(true);
      }
    }
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  }

  return (
    visible && (
      <Toast>
        <Message size="tiny" compact positive={!isOffline} negative={isOffline}>
          {isOffline && <>El sitio esta funcionando offline</>}
          {!isOffline && <>El sitio esta funcionando online</>}
        </Message>
      </Toast>
    )
  );
};

const Toast = styled.div`
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export default SWNotification;
