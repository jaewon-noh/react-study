function List({ list }) {
  

  return (
    <div>
      <ul>
        {list.map((item => <li key={item.id}>{item.id}</li>))}
      </ul>
    </div>
  );
}

export default List;