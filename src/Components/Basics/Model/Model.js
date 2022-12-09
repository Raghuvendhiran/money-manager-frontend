import React from "react";
import { useState } from "react";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";


const Popup = ({ closeModel }) => {

    const [toggleState, settoggleState] = useState(2);

    const toggleTab = (i) => {
        settoggleState(i)
    }

    return (
        <>
            <div className="modal-header" style={{ backgroundColor: "#FF7F50" }}>
                <h5 className="text-white modal-title p-2 ps-3 mb-1 mt-1" id="exampleModalLabel">Add Transaction</h5>
                <button type="button" className="btn-close ps-4" data-bs-dismiss="modal" onClick={() => closeModel(false)} aria-label="Close"></button>
            </div>

            <div >
                <ul className="nav nav-tabs mb-1" id="myTab0" role="tablist">
                    <li className="nav-item" role="presentation">
                        <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}>
                            <button
                                className="nav-link "
                                id="home-tab0"
                                data-mdb-toggle="tab"
                                data-mdb-target="#home0"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                            >
                                Income
                            </button>
                        </div>

                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}>
                            <button
                                className="nav-link"
                                id="profile-tab0"
                                data-mdb-toggle="tab"
                                data-mdb-target="#profile0"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                Expense
                            </button>
                        </div>

                    </li>
                </ul>
            </div>

            <div>
                <div className={toggleState === 1 ? "content active-content tab-content" : "content"}>
                    <div className="tab-pane" id="home0" role="tabpanel" aria-labelledby="home-tab0">
                        <legend className="mb-3"> Income Transaction</legend>
                        <IncomeForm closeModel={closeModel} />
                    </div>
                </div>

                <div className={toggleState === 2 ? "content active-content tab-content" : "content"}>
                    <div className="tab-pane" id="home0" role="tabpanel" aria-labelledby="home-tab0">
                        <legend className="mb-3">Expense Transaction</legend>
                        <ExpenseForm closeModel={closeModel} />

                    </div>
                </div>
            </div>
        </>
    )
};

export default Popup;

