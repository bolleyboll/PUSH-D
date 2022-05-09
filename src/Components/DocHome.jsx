// import React, { Component } from "react";
// import { render } from "react-dom";

// import { Table, Icon, Segment, Grid } from "semantic-ui-react";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       data: [
//         {
//           date: "2014-04-18",
//           total: 121.0,
//           status: "Shipped",
//           name: "A",
//           points: 5,
//           percent: 50
//         },
//         {
//           date: "2014-04-21",
//           total: 121.0,
//           status: "Not Shipped",
//           name: "B",
//           points: 10,
//           percent: 60
//         },
//         {
//           date: "2014-08-09",
//           total: 121.0,
//           status: "Not Shipped",
//           name: "C",
//           points: 15,
//           percent: 70
//         },
//         {
//           date: "2014-04-24",
//           total: 121.0,
//           status: "Shipped",
//           name: "D",
//           points: 20,
//           percent: 80
//         },
//         {
//           date: "2014-04-26",
//           total: 121.0,
//           status: "Shipped",
//           name: "E",
//           points: 25,
//           percent: 90
//         }
//       ],
//       expandedRows: []
//     };
//   }

//   handleRowClick(rowId) {
//     const currentExpandedRows = this.state.expandedRows;
//     const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

//     const newExpandedRows = isRowCurrentlyExpanded
//       ? currentExpandedRows.filter(id => id !== rowId)
//       : currentExpandedRows.concat(rowId);

//     this.setState({ expandedRows: newExpandedRows });
//   }

//   renderItemCaret(rowId) {
//     const currentExpandedRows = this.state.expandedRows;
//     const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

//     if (isRowCurrentlyExpanded) {
//       return <Icon name="caret down" />;
//     } else {
//       return <Icon name="caret right" />;
//     }
//   }

//   renderItemDetails(item) {
//     return (
//       <Segment basic>
//         <Grid columns={3}>
//           <Grid.Column>
//             <span>Name: {item.name}</span>
//           </Grid.Column>

//           <Grid.Column>
//             <span>Point: {item.points}</span>
//           </Grid.Column>

//           <Grid.Column>
//             <span>Percent: {item.percent}</span>
//           </Grid.Column>
//         </Grid>
//       </Segment>
//     );
//   }

//   renderItem(item, index) {
//     const clickCallback = () => this.handleRowClick(index);
//     const itemRows = [
//       <Table.Row onClick={clickCallback} key={"row-data-" + index}>
//         <Table.Cell>{this.renderItemCaret(index)}</Table.Cell>
//         <Table.Cell>{item.date}</Table.Cell>
//         <Table.Cell>{item.total}</Table.Cell>
//         <Table.Cell>{item.status}</Table.Cell>
//       </Table.Row>
//     ];

//     if (this.state.expandedRows.includes(index)) {
//       itemRows.push(
//         <Table.Row key={"row-expanded-" + index}>
//           <Table.Cell colSpan="4">{this.renderItemDetails(item)}</Table.Cell>
//         </Table.Row>
//       );
//     }

//     return itemRows;
//   }

//   render() {
//     let allItemRows = [];

//     this.state.data.forEach((item, index) => {
//       const perItemRows = this.renderItem(item, index);
//       allItemRows = allItemRows.concat(perItemRows);
//     });

//     return (
//       <Table selectable>
//         <Table.Header>
//           <Table.Row>
//             <Table.HeaderCell />
//             <Table.HeaderCell>Date</Table.HeaderCell>
//             <Table.HeaderCell>Total</Table.HeaderCell>
//             <Table.HeaderCell>Status</Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>

//         <Table.Body>{allItemRows}</Table.Body>
//       </Table>
//     );
//   }
// }

// render(<App />, document.getElementById("root"));
// export default App

// import React from "react";
// import base_url from "../api/bootapi";
// import axios from "axios-observable";

// export default function DocHome() {
//   // let list_pat, log_user;

//   // const getPat = () => {
//   //   console.log("Doc");
//   //   log_user = sessionStorage.getItem("userName");
//   //   console.log(log_user);
//   //   axios
//   //     .get(`${base_url}/doctor/${log_user}/patients`)
//   //     .subscribe(function(response) {
//   //       list_pat = response.data;
//   //       console.log(list_pat);

//   //       let table = document.getElementById("pat_list_table");
//   //       let thead = document.createElement("thead");
//   //       let tr = document.createElement("tr");
//   //       let th = document.createElement("th");
//   //       th.textContent = "Patient Name";
//   //       tr.appendChild(th);
//   //       let th1 = document.createElement("th");
//   //       th1.textContent = "Email ID";
//   //       tr.appendChild(th1);
//   //       thead.appendChild(tr);
//   //       table.appendChild(thead);

//   //       let tbody = document.createElement("tbody");
//   //       for (let i = 0; i < list_pat.length; i++) {
//   //         let tr = document.createElement("tr");
//   //         let td = document.createElement("td");
//   //         let td1 = document.createElement("td");

//   //         td.textContent = list_pat[i].name;
//   //         td1.textContent = list_pat[i].email;

//   //         tr.appendChild(td);
//   //         tr.appendChild(td1);

//   //         tbody.appendChild(tr);
//   //       }

//   //       table.appendChild(tbody);
//   //       console.log(table);
//   //     });
//   // };

//   return (
//     <>
//     </>
//     // <>
//     //   {getPat()}
//     //   <br></br>
//     //   <div className="container">
//     //     <div className="notification is-primary">
//     //       <strong>List of Patients</strong>
//     //       <br></br>
//     //     </div>
//     //     <table className="table" id="pat_list_table">
//     //       {/* <thead>
// 		// 				<tr>
// 		// 					<th><abbr title="Position">Pos</abbr></th>
// 		// 					<th>Team</th>
// 		// 					<th><abbr title="Played">Pld</abbr></th>
// 		// 					<th><abbr title="Won">W</abbr></th>
// 		// 					<th><abbr title="Drawn">D</abbr></th>
// 		// 					<th><abbr title="Lost">L</abbr></th>
// 		// 					<th><abbr title="Goals for">GF</abbr></th>
// 		// 					<th><abbr title="Goals against">GA</abbr></th>
// 		// 					<th><abbr title="Goal difference">GD</abbr></th>
// 		// 					<th><abbr title="Points">Pts</abbr></th>
// 		// 					<th>Qualification or relegation</th>
// 		// 				</tr>
// 		// 			</thead>
// 		// 			<tbody>
// 		// 				<tr>
// 		// 					<th>1</th>
// 		// 					<td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
// 		// 					</td>
// 		// 					<td>38</td>
// 		// 					<td>23</td>
// 		// 					<td>12</td>
// 		// 					<td>3</td>
// 		// 					<td>68</td>
// 		// 					<td>36</td>
// 		// 					<td>+32</td>
// 		// 					<td>81</td>
// 		// 					<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
// 		// 				</tr>
// 		// 				<tr>
// 		// 					<th>2</th>
// 		// 					<td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
// 		// 					<td>38</td>
// 		// 					<td>20</td>
// 		// 					<td>11</td>
// 		// 					<td>7</td>
// 		// 					<td>65</td>
// 		// 					<td>36</td>
// 		// 					<td>+29</td>
// 		// 					<td>71</td>
// 		// 					<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
// 		// 				</tr>
// 		// 				<tr>
// 		// 					<th>3</th>
// 		// 					<td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
// 		// 					<td>38</td>
// 		// 					<td>19</td>
// 		// 					<td>13</td>
// 		// 					<td>6</td>
// 		// 					<td>69</td>
// 		// 					<td>35</td>
// 		// 					<td>+34</td>
// 		// 					<td>70</td>
// 		// 					<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
// 		// 				</tr>
// 		// 				<tr className="is-selected">
// 		// 					<th>4</th>
// 		// 					<td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>
// 		// 					<td>38</td>
// 		// 					<td>19</td>
// 		// 					<td>9</td>
// 		// 					<td>10</td>
// 		// 					<td>71</td>
// 		// 					<td>41</td>
// 		// 					<td>+30</td>
// 		// 					<td>66</td>
// 		// 					<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></td>
// 		// 				</tr>
// 		// 				<tr>
// 		// 					<th>5</th>
// 		// 					<td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></td>
// 		// 					<td>38</td>
// 		// 					<td>19</td>
// 		// 					<td>9</td>
// 		// 					<td>10</td>
// 		// 					<td>49</td>
// 		// 					<td>35</td>
// 		// 					<td>+14</td>
// 		// 					<td>66</td>
// 		// 					<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></td>
// 		// 				</tr>
// 		// 			</tbody> */}
//     //     </table>
//     //   </div>
//     //   <br></br>
//     // </>
//   );
// }

import "animate.css";

import React from "react";
import { Link } from "react-router-dom";
import UserService from "../Service/UserService";
import "./DocHome.css";
import TryCode from "./TryCode";

class DocHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
    };
  }

  componentDidMount() {
    UserService.getPatients().then((response) => {
      this.setState({ patients: response.data });
    });
  }

  render() {
    return (
      <>
        <div className="container my-5 text-center">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">Patient Details</div>
              <div className="panel-body">
                <table className="table table-condensed table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Occupation</th>
                      <th>Age</th>
                      <th>Email</th>
                      <th>Section Order</th>
                      <th>Total Sections</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.patients.map((patient) => (
                      <>
                        <tr
                          data-bs-toggle="collapse"
                          data-bs-target={"#" + patient.username}
                          className="accordion-toggle"
                        >
                          <td>{patient.name}</td>
                          <td>{patient.occupation}</td>
                          <td>{patient.age}</td>
                          <td>{patient.email}</td>
                          <td>{patient.sectionOrder}</td>
                          <td>{patient.totalSections}</td>
                        </tr>

                        <tr>
                          <td colspan="12" className="hiddenRow">
                            <div
                              className="accordian-body collapse"
                              id={patient.username}
                            >
                              <table className="table table-warning">
                                <thead>
                                  <tr className="info">
                                    <th></th>
                                    <th></th>
                                    <th>Patient Id</th>
                                    <th>City</th>
                                    <th>DOB</th>
                                    <th>Education</th>
                                    <th>Marital Status</th>
                                    <th>LastLogin</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr
                                    data-bs-toggle="collapse"
                                    className="accordion-toggle"
                                    data-bs-target="#demo10"
                                  >
                                    <td></td>
                                    <td></td>
                                    <td>{patient.patientID}</td>
                                    <td>{patient.city}</td>
                                    <td>{patient.dob}</td>
                                    <td>{patient.education}</td>
                                    <td>{patient.maritalStatus}</td>
                                    <td>{patient.lastLogin}</td>
                                    <td>
                                      <div
                                        className="accordion"
                                        id="accordionExample"
                                      >
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="headingOne"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target={
                                                "#collapseOne" +
                                                patient.username
                                              }
                                              aria-expanded="false"
                                              aria-controls="collapseOne"
                                            >
                                              Change Section Order
                                            </button>
                                          </h2>
                                          <div
                                            id={
                                              "collapseOne" + patient.username
                                            }
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                          >
                                            Hello
                                            <form>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter Section Order</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="headingTwo"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target={
                                                "#collapseTwo" +
                                                patient.username
                                              }
                                              aria-expanded="false"
                                              aria-controls="collapseTwo"
                                            >
                                              Restrict Section
                                            </button>
                                          </h2>
                                          <div
                                            id={
                                              "collapseTwo" + patient.username
                                            }
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample"
                                          >
                                            hello section
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DocHome;
