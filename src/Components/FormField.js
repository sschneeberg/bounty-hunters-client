function FormField(props) {
    return (
        <div className="form-field">
            <label htmlFor={props.label}>{props.display}</label>
            <input
                value={props.value}
                name={props.label}
                onChange={props.onChange}
            />
        </div>
    );
}

export default FormField;
