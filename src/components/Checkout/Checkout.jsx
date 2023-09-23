import propTypes from 'prop-types';

const Checkout = ({formState, onSubmit, onChange, valid}) => {

    const objectKeys = Object.keys(formState);
    
    return (    
        <div>
            <h1>Ingresa tus datos para completar la compra </h1>
            <div className="card w-50 ms-3 my-3">
                {objectKeys.map((key) => (
                    <div className="form-group card-body" key={key}>
                        <label htmlFor={key} className="card-text">{key}</label>
                        <input 
                            name={key} 
                            id={key} 
                            type="text" 
                            className="form-control card-text" 
                            onChange={(evt) => onChange(evt)} 
                            autoComplete="on"
                        /> 
                    </div>
                ))}
                {
                    <button
                    disabled={!valid}
                    onClick={(evt) => onSubmit(evt)}
                    className="btn btn-outline-secondary"
                    >
                        Crear orden
                    </button>
                }
            </div>
        </div >
    );

};

Checkout.propTypes = {
    formState: propTypes.object,
    onSubmit: propTypes.func,
    onChange: propTypes.func,
    valid: propTypes.bool
}

export default Checkout;
