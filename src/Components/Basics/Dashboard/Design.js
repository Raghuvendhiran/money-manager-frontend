import History from "../History/Main";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <>
            <div className=" mt-3 container design">
                <div className="row">

                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-green order-card">
                            <div className="card-block">
                                <h4 className="m-b-20">Month</h4>
                                <h4 className="text-right mb-1"><img src={require("../Img/salary.png")} alt="Logo" width="28" height="25" /><span> Income & Expense</span></h4>
                                <p className="m-b-0 mt-2">Completed Orders<span className="f-right"></span></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-yellow order-card">
                            <div className="card-block">
                                <h4 className="m-b-20">Weekly</h4>
                                <h4 className="text-right mb-1"><img src={require("../Img/salary.png")} alt="Logo" width="28" height="25" /><span> Income & Expense</span></h4>
                                <p className="m-b-0 mt-2">Completed Orders<span className="f-right"></span></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-blue order-card">
                            <div className="card-block">
                                <h4 className="m-b-20">Year</h4>
                                <h4 className="text-right mb-1"><img src={require("../Img/salary.png")} alt="Logo" width="28" height="25" /><span> Income & Expense</span></h4>
                                <p className="m-b-0 mt-2">Completed Orders<span className="f-right"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <History />
        </>

    )
};

export default Dashboard;