const Input = ({ labelName, id, value, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
