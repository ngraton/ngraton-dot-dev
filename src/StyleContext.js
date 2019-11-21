import React from 'react';

const StyleContext = React.createContext({
  style: null,
  changeStyle: () => {}
});

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;
export default StyleContext;