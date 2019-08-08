import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Survey from '../survey/Survey';
import submitSurvey from '../../actions';

const mapStateToProps = (state, props) => ({
  surveysList: state.surveys.surveysList,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (formData) => {
    dispatch(submitSurvey(formData));
  },
});

const List = connect(mapStateToProps, mapDispatchToProps)(Survey);
export default withRouter(List);
