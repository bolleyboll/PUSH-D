import React from 'react'

export default function Join() {
  return (
    <>
    <img className='rounded float-start' src="home_active_minds.png" style={{width:'60%',height:'500px'}}/>
        <forms className="rounded float-end my-4 mx-5 animate__animated animate__fadeInUp shadow p-3 mb-5 rounded" style={{backgroundColor:'#89C7E7'}}>
      <div className="mx-5">
        <label for="exampleInputEmail1" className="form-label"></label>
        <input type="email" className="form-control shadow rounded" placeholder='Enter Name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div className="mx-5">
        <label for="exampleInputPassword1" className="form-label"></label>
        <input type="password" className="form-control shadow rounded" placeholder='Enter Password' id="exampleInputPassword1"/>
      </div>
      <div className="mx-5">
        <label for="exampleInputPassword1" className="form-label"></label>
        <input type="password" className="form-control shadow rounded" placeholder='Re-enter Password' id="exampleInputPassword1"/>
      </div>
      <div className="mx-5">
        <label for="exampleInputEmail1" className="form-label"></label>
        <input type="email" className="form-control shadow rounded" placeholder='Enter Email ID' id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mx-5">
        <label for="exampleInputEmail1" className="form-label"></label>
        <input type="email" className="form-control shadow rounded" placeholder='Enter Gender' id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div className="mx-5">
      <label for="exampleInputPassword1" className="form-label"></label>
        <select class="form-control shadow rounded" aria-label="Default select example">
  <option selected>Select role</option>
  <option value="1">Patient</option>
  <option value="2">Doctor</option>
  <option value="3">Specialist</option>
  </select>
  </div>
  <button type="submit" className="btn btn-primary mx-5 my-3 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}} >Submit</button>
      
    </forms>
      </>
  )
}
