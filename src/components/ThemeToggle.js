import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/action';

const ThemeToggle = () => {
  const darkTheme = useSelector((state) => state.darkTheme);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={toggleThemeHandler}>
      Toggle {darkTheme ? 'Light' : 'Dark'} Theme
    </button>
  );
};

export default ThemeToggle;
