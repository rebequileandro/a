const persistMiddleware = (whitelist) => (store) => (next) => (action) => {

    // Filtra el estado según la lista blanca
    const stateToPersist = {};
    Object.keys(store.getState()).forEach((key) => {
        if (whitelist.includes(key)) {
            stateToPersist[key] = store.getState()[key];
        }
    });

    // Guarda solo las partes del estado presentes en la lista blanca en localStorage
    localStorage.setItem('reduxState', JSON.stringify(stateToPersist));

    return next(action);
};
export default persistMiddleware;