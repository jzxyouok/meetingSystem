import {connect} from 'react-redux';
import fetch from 'isomorphic-fetch';
import ApplicationForm from './AddNew';
import * as apiUrl from '../../Config/apiUrl';
import {changeNe, addFormOpt, moveUp, moveDown, delFormItem, delOption, addOption, changeTitle, changeOption, submitForm} from '../../Redux/Action/AddNew/addNew';

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
	changeOption: (inputIndex, optIndex, value) => dispatch(changeOption(inputIndex, optIndex, value)),
	submitForm: (value) => dispatch(() => {
			console.log(value);
			fetch(apiUrl.submitFormUrl, {
					method: 'POST',
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: `formData=${value}`
				})
				.then(res => res.json())
				.then(res => console.log(res))
				.catch(err => {
					throw new Error(err);
				})
		}
	)

})

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(ApplicationForm);

export default Container;