import React from "react";

export const WeigthCalc = () => {
    return (
        <>

            <h1>WeigthCalc</h1>
            <div className="weigth">

                <div className="lbl">
                    <label>
                        Enter in Kilogram
                        <div>
                            <input number ></input>
                        </div>
                    </label>
                </div>
                <div>
                    <label>Conversion in Liter</label>
                    <div>
                        <input number></input>
                    </div>

                    <div>
                        <button>Exit</button>


                        <button>clear</button>
                    </div>


                </div>

            </div>
        </>
    )

}