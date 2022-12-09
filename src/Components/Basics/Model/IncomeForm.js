import React from "react";
import { useState } from "react";
import axios from "axios";




function Form({ closeModel }) {

    function refreshPage() {
        window.location.reload(false);
    }

    const [income, setIncome] = useState({
        dateTime: "",
        description: "",
        amount: "",
        categories: "",
        summary: "",
        divisons: ""
    });

    const handleChange = (val) => {
        return setIncome(e => {
            return { ...e, ...val }
        })
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_BaseURl}/get-income`, income);
            if (res) {
                setIncome({
                    dateTime: "",
                    description: "",
                    amount: "",
                    categories: "",
                    summary: "",
                    divisons: ""
                })
            }
        } catch (err) {
            console.log("Register failed", err)
        }
    };


    return (

        <div className="d-grid gap-2 col-4">

            <form onSubmit={handleSumbit}>

                <div className="mb-3">
                    <label className="form-label">Date & Time</label>
                    <input type="datetime-local" id="disabledTextInput" className="form-control" value={income.dateTime} onChange={e => handleChange({ dateTime: e.target.value })} placeholder="Disabled input" />
                </div>

                <div className="mb-3">
                    <div>
                        <label className="form-label " >Description</label>
                        <textarea className="form-control" placeholder="Type a descriptione" id="floatingTextarea" value={income.description} onChange={e => handleChange({ description: e.target.value })}></textarea>
                    </div>
                </div>

                <div className="mb-3">
                    <div >
                        <label className="form-label " >Amount</label>
                        <input className="form-control" type="number" placeholder="Type a Amount" id="floatingTextarea" value={income.amount} onChange={e => handleChange({ amount: e.target.value })}></input>
                    </div>
                </div>

                <div className="form-group mb-3">
                    <label >Categories</label>
                    <select className="form-control mt-2" id="exampleFormControlSelect1" value={income.categories} onChange={e => handleChange({ categories: e.target.value })}>
                        <option>Fule</option>
                        <option>Movie</option>
                        <option>Food</option>
                        <option>Loan</option>
                        <option>Medical</option>
                    </select>
                </div>

                <div className="mb-3">
                    <div >
                        <label className="form-label " >Summary</label>
                        <input className="form-control" type="text" placeholder="Summary about Categories" value={income.summary} onChange={e => handleChange({ summary: e.target.value })}></input>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label " >Office</label>
                        <input className="form-check-input " type="checkbox" value="Office" onChange={e => handleChange({ divisons: e.target.value })} id="flexCheckDefault" />

                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label  " >Personal</label>
                        <input className="form-check-input " type="checkbox" value="Personal" onChange={e => handleChange({ divisons: e.target.value })} id="flexCheckDefault" />
                    </div>
                </div>

                <div>
                    <button type="submit" className="btn btn-primary mt-1 mb-3" onClick={refreshPage} >Submit</button>
                    <button type="button" className="btn btn-danger mt-1 ms-5 mb-3 " onClick={() => closeModel(false)} >Close</button>
                </div>
            </form>
        </div>

    );
}

export default Form;
