import {connect} from 'react-redux';
import ApplicationForm from './AddNew';
import {changeNe, addFormOpt} from '../../Redux/Action/AddNew/addNew';

const mapStateToProps = (state) => ({
	formData: state.get('formData')
});

const mapDispatchToProps = (dispatch) => ({
	changeNe: (index) => dispatch(changeNe(index)),
	addItem: (name, defaultTitle, optType, defaultOptions) => dispatch(addFormOpt(name, defaultTitle, optType, defaultOptions))
})

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(ApplicationForm);

export default Container;