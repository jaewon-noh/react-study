import { useState, useRef } from 'react';

function InputSample() {
  const nameInput = useRef();
  const [inputs, setInputs] = useState({
    name: '',
    nick: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nick: '',
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={inputs.name} ref={nameInput} />
      <input name="nick" placeholder="닉넴" onChange={onChange} value={inputs.nick} />
      <button onClick={onReset}>초기화</button>
      <div>
        <strong>값: </strong>
        {inputs.name} ({inputs.nick})
      </div>
    </div>
  );
}

export default InputSample;