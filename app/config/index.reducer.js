import { combineReducers } from 'redux';
import { authReducer } from '../auth/auth.reducer';
import { searchReducer } from '../search/index';
import { teacherReducer } from '../teacher/teacher.reducer';
import { subjectReducer } from '../subject/subject.reducer';
import { degreeReducer } from '../degree/degree.reducer';

export default combineReducers({
	auth: authReducer,
	search: searchReducer,
	teacher: teacherReducer,
	subject: subjectReducer,
	degree: degreeReducer
});
