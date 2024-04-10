const persistMiddleware = (whitelist) => (store) => (next) => (action) => {
    next(action);
    const stateToPersist = {};
    Object.keys(store.getState()).forEach((key) => {
        if (whitelist.includes(key)) {
            stateToPersist[key] = store.getState()[key];
        }
    });

    localStorage.setItem('appState', JSON.stringify(stateToPersist));

};
export default persistMiddleware;