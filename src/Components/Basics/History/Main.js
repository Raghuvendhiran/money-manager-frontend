import React from "react";
import { useState } from "react";
import Income from './IncomeData';
import Expense from './Expense Data';
import Model from "../Model/Model";


function History() {

    const [toggleState, settoggleState] = useState(2);

    const [openModal, setopenModal] = useState(false);

    const toggleTab = (i) => {
        settoggleState(i)
    }


    return (

        <div className="container">

            <div style={{ backgroundColor: "#FF7F50" }}>
                <h5 className="text-white modal-title p-2 ps-3 mb-2 mt-2" id="exampleModalLabel">History</h5>
            </div>

            <div >
                <ul className="nav nav-tabs mb-3" id="myTab0" role="tablist">
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

                    <li className="nav-item" role="presentation">
                        <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => setopenModal(true)}>
                            <button className="btn btn-warning" role="tab" type="button" >Add Transaction </button>
                        </div>
                    </li>
                </ul>

            </div>

            <div>
                <div className={toggleState === 1 ? "content active-content tab-content" : "content"}>
                    <div className="tab-pane" id="home0" role="tabpanel" aria-labelledby="home-tab0">
                        <Income />
                    </div>
                </div>

                <div className={toggleState === 2 ? "content active-content tab-content" : "content"}>
                    <div className="tab-pane" id="home0" role="tabpanel" aria-labelledby="home-tab0">
                        <Expense />
                    </div>
                </div>

                <div className={toggleState === 3 ? "content active-content tab-content" : "content"}>
                    <div className="tab-pane d-grid gap-2 col-12 mx-auto" id="home0" role="tabpanel" aria-labelledby="home-tab0">
                        {openModal && (<Model closeModel={setopenModal} />)}
                    </div>
                </div>
            </div>


        </div >
    )
}

export default History;