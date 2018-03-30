import {
	START_SEARCHING, SUBJECTS_FETCH, TEACHERS_FETCH, GRADES_FETCH, CHANGE_TAB, START_SEARCHING_TEACHERS, START_SEARCHING_GRADES, START_SEARCHING_SUBJECTS
} from './search.types';

import { searchByName } from '../lib';

export const search = (text) => (dispatch, getState) => {
	const { selectedIndex } = getState().search;

	switch (selectedIndex) {
		case 0:
			changeToGrades(text, selectedIndex, dispatch, getState);
			break;
		case 1:
			changeToSubjects(text, selectedIndex, dispatch, getState);
			break;
		case 2:
			changeToTeachers(text, selectedIndex, dispatch, getState);
			break;
	}
};

export const changeTab = (text, newTab) => (dispatch, getState) => {
	if (newTab !== 1 && newTab !== 2) {
		newTab = 0;
	}

	switch (newTab) {
		case 0:
			changeToGrades(text, newTab, dispatch, getState);
			break;
		case 1:
			changeToSubjects(text, newTab, dispatch, getState);
			break;
		case 2:
			changeToTeachers(text, newTab, dispatch, getState);
			break;
	}

};

const changeToSubjects = async (text, newTab, dispatch, getState) => {
	const { searchSubjectText, selectedIndex } = getState().search;
	
	if(selectedIndex !== newTab) dispatch({ type: CHANGE_TAB, payload: newTab });
	if (searchSubjectText === text) return;

	dispatch({
		type: START_SEARCHING
	});
	dispatch({
		type: START_SEARCHING_SUBJECTS,
		payload: text
	});

	const results = await searchByName(text, newTab);
	dispatch({
		type: SUBJECTS_FETCH,
		payload: results
	});
};

const changeToTeachers = async (text, newTab, dispatch, getState) => {
	const { searchTeacherText, selectedIndex } = getState().search;

	if(selectedIndex !== newTab) dispatch({ type: CHANGE_TAB, payload: newTab });
	if (searchTeacherText === text) return;
	dispatch({
		type: START_SEARCHING
	});
	dispatch({
		type: START_SEARCHING_TEACHERS,
		payload: text
	});

	const results = await searchByName(text, newTab);
	dispatch({
		type: TEACHERS_FETCH,
		payload: results
	});
};

const changeToGrades = async (text, newTab, dispatch, getState) => {
	const { searchGradeText, selectedIndex } = getState().search;
	
	if(selectedIndex !== newTab) dispatch({ type: CHANGE_TAB, payload: newTab });
	if (searchGradeText === text) return;
	dispatch({
		type: START_SEARCHING
	});
	dispatch({
		type: START_SEARCHING_GRADES,
		payload: text
	});

	const results = await searchByName(text, newTab);

	dispatch({
		type: GRADES_FETCH,
		payload: results
	});
};

