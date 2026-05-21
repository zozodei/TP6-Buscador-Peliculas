import './ErrorMessage.css'

const ErrorMessage = ({mensaje}) => 
{

return (

<div className="MensajeDeError">
    <p>{mensaje}</p>
</div>
);

}

export default ErrorMessage;