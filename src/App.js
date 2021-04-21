import { useRef, useState } from 'react';

import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import List from './List';
import CreateUser from './CreateUser';

function App() {
  const [list, setUsers] = useState([
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const nextId = useRef(6); // useRef는 re rendering을 유발하지 않는다.
  const onCreate = () => {
    const user = {id: nextId.current};
    setUsers([...list, user]);
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };


  return (
    <Wrapper>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <Hello name="react" color="red" isSpecial={false}/>
      <Hello color="blue"/>
      <Counter />
      <InputSample />
      <List list={list} />
    </Wrapper>
  );
}

export default App;
