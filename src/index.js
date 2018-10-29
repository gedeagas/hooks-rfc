import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import StatePage from './view/State';
/* import ContextPage from "./view/Context";*/
import EffectPage from './view/Effect';

export const ThemeContext = React.createContext();
const Wrapper = styled.div`
  max-width: 768px;
`;

const AppRouter = () => {
  const [theme, setTheme] = useState('blue');

  return (
    <ThemeContext.Provider
      value={{
        value: theme,
        setValue: value => setTheme(value),
      }}>
      <Router>
        <Wrapper>
          <Route path="/" exact component={StatePage} />
        </Wrapper>
      </Router>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));
