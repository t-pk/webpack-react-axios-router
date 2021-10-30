const combineReducers = (config) => {
  return (state, action) => {
    return Object.keys(config).reduce((stat, key) => {
      const reducer = config[key];
      const previousState = stat.get(key);
      const newValue = reducer(previousState, action);

      if (!newValue)
        throw new Error(
          `A reducer returned undefined when reducing key::"${key}"`,
        );

      return stat.set(key, newValue);
    }, state);
  };
};

export default combineReducers;
