import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar  navbar-expand-lg navbar-${props.Darkmod} bg-${props.Darkmod}`}>
  <div className="container-fluid">
  <span className="navbar-brand mb-0 h1 ">{props.Title}</span>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 nav nav-fill mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.about}</a>
        </li>
      */}
      </ul>
   


      <div className="form-check form-switch mx-4 ">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.Toogle}/>
  <label className={`form-check-label text-${props.Darkmod==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Darkmode</label>
</div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.prototype={
  Title: "string"
};

Navbar.defaultProps = {
  Title: 'set the title',
  about:"about us"
  };
