import {connect} from 'react-redux';
import ApplicationForm from './AddNew';
import {changeNe} from '../../Redux/Action/AddNew/addNew';

const mapStateToProps = (state) => ({
	formData: state.get('formData')
});

const mapDispatchToProps = (dispatch) => ({
	changeNe: (index) => dispatch(changeNe(index))
})

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(ApplicationForm);

export default Container;