// eslint-disable-next-line react/prop-types
const Input = ({ handleChange, hint, className, style }) => {
  return (
    <div className="input">
      <label htmlFor="input">
        {hint}
      </label>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        className={className}
        style={style} 
      />
    </div>
  );
};

export default Input;
