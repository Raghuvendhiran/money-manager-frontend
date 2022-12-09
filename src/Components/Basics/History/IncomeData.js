import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




const IncomeList = () => {

    const [IncList, setIncList] = useState({});


    useEffect(() => {
        getEmp();
    }, [])

    const getEmp = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BaseURl}/get-income`);
            if (res) {
                setIncList(res.data)
            }
        } catch (err) {
            console.log("Data Getting Error", err);
        }
    };

    return (
        <div >
            <table className="mt-3 table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Data & Time</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Categories</th>
                        <th scope="col">Summary</th>
                        <th scope="col">Divisons</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {IncList.length && IncList.map((Income, index) => (
                        <tr key={index}>
                            <td>{Income.dateTime}</td>
                            <td>{Income.description}</td>
                            <td>{Income.amount}</td>
                            <td>{Income.categories}</td>
                            <td>{Income.summary}</td>
                            <td>{Income.divisons}</td>
                            <td><Link className="btn btn-link" role="tab" type="button" to={`/get-income/${Income._id}`}>Edit</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default IncomeList;