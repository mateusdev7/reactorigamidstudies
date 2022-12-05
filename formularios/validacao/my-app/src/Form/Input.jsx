const Input = ({ labelName, id, value, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <input name={id} id={id} value={value} onChange={onChange} {...props} />
    </>
  );
};

export default Input;
