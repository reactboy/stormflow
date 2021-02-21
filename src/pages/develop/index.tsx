import { useState } from 'react';
import { useColorMode, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, setUser } from '@redux/features';

const Develop = () => {
  const state = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const [name, setName] = useState<string>('');

  const onClickDispatch = () => {
    console.log('button clicked');
    dispatch(setUser({ data: { name: name } }));
  };

  console.log(state);
  if (process.env.NODE_ENV !== 'development') return <>not available</>;
  return (
    <header>
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
      <Button onClick={onClickDispatch}>dispatch</Button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </header>
  );
};

export default Develop;
