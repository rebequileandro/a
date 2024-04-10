import React from "react";
import { createRoot } from "react-dom/client";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";
import { io } from "socket.io-client";
const socket = io(process.env.REACT_APP_SOCKET);
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App socket={socket} />
    </PersistGate>
  </Provider>
);

reportWebVitals();
serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
    const waitingServiceWorker = await registration.waiting

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener("statechange", event => {
        if (event.target.state === "activated") {
          window.location.reload()
        }
      });
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
    }
  }
});