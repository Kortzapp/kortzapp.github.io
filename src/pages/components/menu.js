import Dialog from "./dialog";
import React, {useState} from "react";
import {Link} from "gatsby";
import './header.css';


const Menu = ({title}) => {

    const [dialogOpen, setDialogOpen] = useState(false);

    return <div>
        <div className="header">
            <header>
                <h2>{title}</h2>
            </header>
            <button className="menu-button" onClick={() => setDialogOpen(true)}>&#9776;</button>
        </div>
        {dialogOpen && (
            <Dialog onClose={() => setDialogOpen(false)}>
                <div className="dialog-body">
                    <Link to="/" onClick={() => setDialogOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setDialogOpen(false)}>About</Link>
                </div>
            </Dialog>
        )}
        <hr/>
    </div>
}

export default Menu
