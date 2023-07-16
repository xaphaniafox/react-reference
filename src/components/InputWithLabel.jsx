const InputWithLabel = ({ id, label, value, onInputChange, type = "text" }) => {
  const handleChange = (event) => {
    onInputChange(event);
  };
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={handleChange} />
    </>
  );
};

export default InputWithLabel;
