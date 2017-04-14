import * as AC from '../../Redux/Action/register-form.action';
export const mapStateToProps = (state) => ({
    rules: state.getIn(['register_form', 'rules']).toJS(),
});

export const mapDispatchToProps = (dispatch) => ({
    addRule: (title, condition_title, condition_value, constraint, behaviour) => dispatch( AC.add_rule(title, condition_title, condition_value, constraint, behaviour)),
    delRule: (index) => dispatch( AC.delete_rule(index) ),
});