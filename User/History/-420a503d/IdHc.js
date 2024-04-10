import { persistor, store } from "./redux/store";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { io } from "socket.io-client";
const socket = io(process.env.REACT_APP_SOCKET);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App socket={socket} />
    </PersistGate>
  </Provider>
);

reportWebVitals();
// serviceWorkerRegistration.register({
//   onUpdate: async (registration) => {
//     const waitingServiceWorker = await registration.waiting

//     if (waitingServiceWorker) {
//       waitingServiceWorker.addEventListener("statechange", event => {
//         if (event.target.state === "activated") {
//           window.location.reload()
//         }
//       });
//       waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
//     }
//   }
// });