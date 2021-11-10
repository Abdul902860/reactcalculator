import React from "react"

export const CurrencyCalc = () => {
    return (
        <>
            <h1>CurrencyCalc</h1>
            <div className="currency">
                <label>
                    INR

                    <input></input>
                </label>
                <div>
                    <label>Convert</label>
                    <input></input>
                </div>
                <div>
                    <button>
                        Clear
                    </button>
                </div>

            </div>
        </>
    )
}