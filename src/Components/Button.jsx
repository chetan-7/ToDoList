import PropTypes from 'prop-types';
/*const onclick=() =>{
    console.log("hello")}*/
const Button =({onClick,color,text}) =>{
    return (
        <button 
        onClick= {onClick}
        style={{backgroundColor:color}}
        className='btn'>
        {text}
        </button>
    )
}

Button.defaultProps = {
    color:'red'
}
Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}
export default Button
