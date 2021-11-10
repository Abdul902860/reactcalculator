import React from "react";

export const Menu = ({ onClick }) => {
    return (
        <>
            <div className="menuCategory">
                <button className="menubtn" name="standard" onClick={onClick}>Standard</button>
                <button className="menubtn" name="weight" onClick={onClick}>Weigth</button>
                <button className="menubtn" name="currency" onClick={onClick}>Currency</button>
                <button className="menubtn" name="scientific" onClick={onClick}>Scientific</button>

            </div>
        </>
    );
}