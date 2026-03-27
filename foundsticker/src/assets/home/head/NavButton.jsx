import "../../../../public/css/components_main.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function NavButton({name,goto}){

    const navigate = useNavigate(); // 1. 初始化跳转钩子
    const handleClick = () => {
        navigate(`/${goto}`); // 2. 执行跳转逻辑，To 是你传入的路径（如 "/trending"）
    }
    return(
        <>
            <div >
                <Button variant="text" className={"navMenu"} onClick={handleClick}>{name}</Button>
            </div>
        </>
    )
}

export default NavButton;