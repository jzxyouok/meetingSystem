import {connect, Provider} from 'react-redux';
import React from 'react';

import Index from '../router/router';
import store from '../store/index.store';

const IndexProvider = () => <Provider store={store}><Index /></Provider>;
export default IndexProvider;