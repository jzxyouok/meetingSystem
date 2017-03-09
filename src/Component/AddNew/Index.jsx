import {connect} from 'react-redux';
import ApplicationForm from './AddNew';
import {changeNe, addFormOpt, moveUp, moveDown, delFormItem, delOption, addOption, changeTitle, changeOption} from '../../Redux/Action/AddNew/addNew';

const mapStateToProps = (state) => ({
	formData: state.get('formData')
});

const mapDispatchToProps = (dispatch) => ({
	changeNe: (index) => dispatch(changeNe(index)),
	addItem: (name, defaultTitle, optType, defaultOptions) => dispatch(addFormOpt(name, defaultTitle, optType, defaultOptions)),
	moveUp: (index) => dispatch(moveUp(index)),
	moveDown: (index) => dispatch(moveDown(index)),
	delFormItem: (index) => dispatch(delFormItem(index)),
	delOption: (inputIndex, optIndex) => dispatch(delOption(inputIndex, optIndex)),
	addOption: (inputIndex, optIndex, value) => dispatch(addOption(inputIndex, optIndex, value)),
	changeTitle: (inputIndex, value) => dispatch(changeTitle(inputIndex, value)),
	changeOption: (inputIndex, optIndex, value) => dispatch(changeOption(inputIndex, optIndex, value))
})

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(ApplicationForm);

export default Container;