import style from './Button.module.css'
interface ButtonProps {
    name:string;
    onClick: () => void;
}
 
const Button = ({name, onClick}: ButtonProps) => {
    return ( <button onClick={onClick} className={style.button}>{name}</button> );
}
 
export default Button;