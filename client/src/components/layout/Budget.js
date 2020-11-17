import React, { Component } from "react";
import { Link } from "react-router-dom";
import Piechart from "../layout/Piechart";
import Table from "../layout/Table"

class Budget extends Component {
    state = {
        savingsGoal: "",
        savingsLength: "",
        savingsPerWeek: "",
        style: "none"
    };

    handleSearchEvent = (e) => {
        if (e.target.name === "savingsGoal") {
            this.setState({ savingsGoal: e.target.value });
        };
        if (e.target.name === "savingsLength") {
            this.setState({ savingsLength: e.target.value });
        };
    };

    handleSubmit = () => {
        console.log(this.state.savingsPerWeek);
        const savings = parseFloat(this.state.savingsGoal) / parseFloat(this.state.savingsLength);
        this.setState({ savingsPerWeek: savings });
        this.setState({ style: "" });
    };

    render() {
        return (
            <div className="row">
                <div className="col s12 m12 l3 center-align">
                    <div style={{ width: "100%" }} className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <Link
                                    to="/budget"
                                    className="btn btn-large hoverable purple accent-3"
                                    style={{
                                        marginBottom: 10,
                                        width: "100%"
                                    }}
                                >BUDGET</Link><br />
                                <Link
                                    to="/hotel"
                                    className="btn btn-large hoverable yellow accent-3"
                                    style={{
                                        marginBottom: 10,
                                        width: "100%"
                                    }}
                                >HOTELS</Link><br />
                                <Link to="/flights"
                                    className="btn btn-large hoverable red accent-3"
                                    style={{
                                        marginBottom: 10,
                                        width: "100%"
                                    }}
                                >FLIGHTS</Link><br />
                                <Link to="/rental"
                                    className="btn btn-large hoverable green accent-3"
                                    style={{
                                        marginBottom: 10,
                                        width: "100%"
                                    }}
                                >RENTAL CARS</Link><br />
                                <Link to="/activity"
                                    className="btn btn-large hoverable blue accent-3"
                                    style={{
                                        marginBottom: 10,
                                        width: "100%"
                                    }}
                                >ACTIVITIES</Link><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l9 center-align">
                    <div style={{ width: "100%" }} className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <div className="col s4 center-align">
                                    <h6>Your goal: </h6>
                                    <form onSubmit={(res) => {
                                        res.preventDefault();
                                    }}>
                                        <input onChange={this.handleSearchEvent} name="savingsGoal" className="savingsGoal" placeholder="What is your savings goal?" style={{ textAlign: "center" }}></input>
                                        <input onChange={this.handleSearchEvent} name="savingsLength" className="savingsLength" placeholder="How many weeks to save?" style={{ textAlign: "center" }}></input>
                                        <button onClick={this.handleSubmit} type="submit" className="btn btn-large waves-effect hoverable">Submit</button>
                                    </form>
                                    <h4 className="totalSavings"></h4>
                                    < br />
                                    <h6>Your estimates: </h6>
                                    <h4 className="totalSpend"></h4>
                                </div>
                                <div className="col s8 center-align">
                                    <Piechart />
                                </div>
                            </div>
                            <h5 className="savingsPerWeek" style={{ display: this.state.style }}>You need to save {this.state.savingsPerWeek} each week to save {this.state.savingsGoal}! Get Saving!</h5>
                        </div>
                    </div>
                    <div style={{ width: "100%" }} className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <div className="col s12 center-align">
                                    <Table />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    };
};

export default Budget;