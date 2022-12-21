import React from "react";
import "./Topbar.css"
import PersonIcon from '@mui/icons-material/Person';

function Topbar()
{
    return(
        <div className="topbar">
            <PersonIcon className="personIcon"/>
        </div>
    )
}

export default Topbar;