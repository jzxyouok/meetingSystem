import * as AC from '../../Redux/Action/register-form.action';
export const mapStateToProps = (state) => ({
    rules: state.getIn(['register_form', 'rules']).toJS(),
    editIdx: state.getIn(['register_form', 'edit_index']),
});

export const mapDispatchToProps = (dispatch) => ({
    addRule: 			(title, condition_title, condition_value, constraint, behaviour) => dispatch( AC.add_rule(title, condition_title, condition_value, constraint, behaviour)),
    delRule: 			(index) => dispatch( AC.delete_rule(index) ),
    cEditIndex: 		(index) => dispatch( AC.edit_index(index) ),
    cTitle: 			(index, title) => dispatch( AC.change_rule_title(index, title) ),
    cConditionTitle: 	(index, condition_title) => dispatch( AC.change_condition_title(index, condition_title) ),
    cConditionValue: 	(index, condition_value) => dispatch( AC.change_condition_value(index, condition_value) ),
    cConstraint: 		(index, constraint) => dispatch( AC.change_constraint(index, constraint) ),
    cBehaviour: 		(index, behaviour) => dispatch( AC.change_constraint_behaviour(index, behaviour) ),
});