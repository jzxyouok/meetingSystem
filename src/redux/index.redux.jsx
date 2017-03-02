import {connect, Provider} from 'react-redux';
import React from 'react';

import Index from '../router/router';
import store from '../store/index.store';

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

const IndexContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Index);

const IndexContainerProvider = () => <Provider store={store}><IndexContainer /></Provider>;
export default IndexContainerProvider;