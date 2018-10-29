import React, {useState, useContext, useEffect} from 'react';
import {ThemeContext} from '../../index';
import {Button, Text} from '../../uikit';

export default function Effect() {
  const theme = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `${loading ? 'True' : 'False'} - HHH`;
  });

  return (
    <div>
      {theme.value}
      <h1>{loading ? 'True' : 'False'}</h1>
      <Button color="gray" onClick={() => theme.setValue('asu')}>
        <Text>Record</Text>
      </Button>
    </div>
  );
}
