import '/public/css/components_main.css';
import IconButton from '@mui/material/IconButton';

function  NavFunctionButton({iconPath,iconAlt,HandleFunction}) {

    return (
        <>
            <IconButton aria-label="delete"  onClick={HandleFunction}>
                <img src={iconPath} alt={iconAlt}/>
            </IconButton>
        </>
    )
}

export default NavFunctionButton;