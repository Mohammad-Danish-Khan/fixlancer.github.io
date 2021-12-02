import React, { useState } from "react";
import Rate from "../Rate";

const FiveStarAlert = () => {
    return (
        <>
            <div className="row">
                <div className="markAsComplete" style={{ display: this.state.markAsComplete }}>
                    <button className="whiteBtn">Request Modification</button>
                    <button className="OrangeBtn" onClick={markComplete}>Mark As Complete</button>
                </div>
            </div>
        </>
    );
};
//color={{filled: "rgb(136 87 25)", unfilled: "rgb(214 184 147)"}}
//count={10}
export default FiveStarAlert;