import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function Form() {

    const params = useParams();

    const navigate = useNavigate();

    const [Income, setIncome] = useState({
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

    useEffect(() => {
        const id = params.id.toString();
        axios.get(`${process.env.REACT_APP_BaseURl}/get-income/${id}`)
            .then((res) => {
                setIncome(res.data);
            }).catch(err => {
                console.log("Error:", err);
            })
    }, [params.id])


    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const id = params.id.toString();
            const res = await axios.put(`${process.env.REACT_APP_BaseURl}/get-income/${id}`, Income);
            if (res) {
                setIncome({
                    dateTime: "",
                    description: "",
                    amount: "",
                    categories: "",
                    summary: "",
                    divisons: ""
                });
                navigate("/")
            }
        } catch (err) {
            console.log("Register failed", err)
        }
    };


    return (

        <div className="container d-grid gap-2 col-6">
            <h3 className="mb-3 mt-3">Income Edit</h3>

            <form onSubmit={handleSumbit}>
                <div className="mb-3">
                    <label className="form-label">Date & Time</label>                  
                    <input type="datetime-local" id="disabledTextInput" className="form-control" value={Income.dateTime} onChange={e => handleChange({ dateTime: e.target.value })} placeholder="Disabled input" />
                </div>
                <div className="mb-3">
                    <div>
                        <label className="form-label " >Description</label>
                        <textarea className="form-control" placeholder="Type a descriptione" id="floatingTextarea" value={Income.description} onChange={e => handleChange({ description: e.target.value })}></textarea>
                    </div>
                </div>
                <div className="mb-3">
                    <div >
                        <label className="form-label " >Amount</label>
                        <input className="form-control" type="number" placeholder="Type a Amount" id="floatingTextarea" value={Income.amount} onChange={e => handleChange({ amount: e.target.value })}></input>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label >Categories</label>
                    <select className="form-control mt-2" id="exampleFormControlSelect1" value={Income.categories} onChange={e => handleChange({ categories: e.target.value })}>
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
                        <input className="form-control" type="text" placeholder="Summary about Categories"  value={Income.summary} onChange={e => handleChange({ summary: e.target.value })}></input>
                    </div>
                </div>


                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label " >Office</label>
                        <input className="form-check-input " type="checkbox" value="Office" onChange={e => handleChange({ divisons: e.target.value })}
                            id="flexCheckDefault" />
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label  " >Personal</label>
                        <input className="form-check-input " id="flexCheckDefault" type="checkbox" value="Personal" onChange={e => handleChange({ divisons: e.target.value })} />
                    </div>
                </div>

                <div>
                    <button type="submit" className="btn btn-primary mt-3 mb-3">Submit</button>
                </div>
            </form>
        </div>

    );
}

export default Form;

// onChange={e => handleChange({ divisons: e.target.value })}