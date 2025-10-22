const Input = ({ type, id, name, label, value, onChange, step }) => {
    return (
        <label htmlFor={id}>
            <span>{label}</span>
            <input type={type} id={id} name={name} value={value} onChange={onChange} min={0} step={step} required />
        </label>
    );
};

export default Input;
