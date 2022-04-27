import React from "react";
import base_url from "../api/bootapi";
import axios from "axios-observable";

export default function DocHome() {
  let list_pat, log_user;

  const getPat = () => {
    console.log("Doc");
    log_user = sessionStorage.getItem("userName");
    console.log(log_user);
    axios
      .get(`${base_url}/doctor/${log_user}/patients`)
      .subscribe(function (response) {
        list_pat = response.data;
        console.log(list_pat);

        let table = document.getElementById("pat_list_table");
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.textContent = "Patient Name";
        tr.appendChild(th);
        let th1 = document.createElement("th");
        th1.textContent = "Email ID";
        tr.appendChild(th1);
        thead.appendChild(tr);
        table.appendChild(thead);

        let tbody = document.createElement("tbody");
        for (let i = 0; i < list_pat.length; i++) {
          let tr = document.createElement("tr");
          let td = document.createElement("td");
          let td1 = document.createElement("td");

          td.textContent = list_pat[i].name;
          td1.textContent = list_pat[i].email;

          tr.appendChild(td);
          tr.appendChild(td1);

          tbody.appendChild(tr);
        }

        table.appendChild(tbody);
        console.log(table);
      });
  };

  return (
    <>
      {getPat()}
      <br></br>
      <div className="container">
        <div className="notification is-primary">
          <strong>List of Patients</strong>
          <br></br>
        </div>
        <table className="table" id="pat_list_table">
          {/* <thead>
						<tr>
							<th><abbr title="Position">Pos</abbr></th>
							<th>Team</th>
							<th><abbr title="Played">Pld</abbr></th>
							<th><abbr title="Won">W</abbr></th>
							<th><abbr title="Drawn">D</abbr></th>
							<th><abbr title="Lost">L</abbr></th>
							<th><abbr title="Goals for">GF</abbr></th>
							<th><abbr title="Goals against">GA</abbr></th>
							<th><abbr title="Goal difference">GD</abbr></th>
							<th><abbr title="Points">Pts</abbr></th>
							<th>Qualification or relegation</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
							</td>
							<td>38</td>
							<td>23</td>
							<td>12</td>
							<td>3</td>
							<td>68</td>
							<td>36</td>
							<td>+32</td>
							<td>81</td>
							<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
						</tr>
						<tr>
							<th>2</th>
							<td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
							<td>38</td>
							<td>20</td>
							<td>11</td>
							<td>7</td>
							<td>65</td>
							<td>36</td>
							<td>+29</td>
							<td>71</td>
							<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
						</tr>
						<tr>
							<th>3</th>
							<td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
							<td>38</td>
							<td>19</td>
							<td>13</td>
							<td>6</td>
							<td>69</td>
							<td>35</td>
							<td>+34</td>
							<td>70</td>
							<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
						</tr>
						<tr class="is-selected">
							<th>4</th>
							<td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>
							<td>38</td>
							<td>19</td>
							<td>9</td>
							<td>10</td>
							<td>71</td>
							<td>41</td>
							<td>+30</td>
							<td>66</td>
							<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></td>
						</tr>
						<tr>
							<th>5</th>
							<td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></td>
							<td>38</td>
							<td>19</td>
							<td>9</td>
							<td>10</td>
							<td>49</td>
							<td>35</td>
							<td>+14</td>
							<td>66</td>
							<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></td>
						</tr>
					</tbody> */}
        </table>
      </div>
      <br></br>
    </>
  );
}
