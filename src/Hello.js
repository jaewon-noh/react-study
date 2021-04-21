function Hello(props) {
  console.info(props);
  return (
    <div style={{ color: props.color }}>
      {props.isSpecial && <strong>응</strong>}
      안녕하세요 { props.name }
    </div>
  );
}

Hello.defaultProps = {
  name: '노재원',
  isSpecial: true,
};

export default Hello;