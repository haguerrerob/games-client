import React from "react";
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import Routes from './Routes'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faUndoAlt)



function App() {
  const store = generateStore();

  return (
    <React.Fragment>
      <Provider store={store} >
        <Routes />
      </Provider>
    </React.Fragment>
  );
}

export default App;
