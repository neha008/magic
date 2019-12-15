import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
  } from 'react-router-dom';
export class  Navbarr extends React.Component {
 
    render() {
        return (
          <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
<div className="container-fluid">
<div className="navbar-header">
  <a className="navbar-brand" data-toggle="tooltip" title="Hooray!" href="#">Magic Kingdom</a>
</div>
<ul className="nav navbar-nav">
  <li	><Link to ="/">Signup</Link></li>									
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/info">Rules</Link></li>
  <li  className="dropdown"><a className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"  href="#">Things to Do<span className="caret"></span></a>
    <ul className="dropdown-menu">
      <li><a href="#">Epcot</a></li>
      <li><a href="#">Disney's Hollywood Studios</a></li>
      <li><a href="#">Disney's Animal Kingdom Park</a></li>
      <li className="divider"></li>
      <li><a href="#">Water Parks</a></li>
      <li className="divider"></li>
      <li><a href="#">Resort Hotels</a></li>
      <li><a href="#">Holiday Packages</a></li>
      <li><a href="#">Disney Springs Resort Area Hotels</a></li>
      <li className="divider"></li>
      <li><a href="#">Park Tickets</a></li>
      <li><a href="#">Special Offers</a></li>
    </ul>
  </li>
</ul>
<form className="navbar-form pull-left">
    <input type="text" className="form-control" placeholder="Search this site..." id="searchInput"></input>
    <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
  </form>
<ul className="nav navbar-nav pull-right">
  <li className="dropdown">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user"></span> My Account <strong className="caret"></strong></a>

    <ul className="dropdown-menu">
      <li>
        <a href="#"><span className="glyphicon glyphicon-wrench"></span> Settings</a>
      </li>

      <li>
        <a href="#"><span className="glyphicon glyphicon-refresh"></span> Update Profile</a>
      </li>

      <li>
        <a href="#"><span className="glyphicon glyphicon-briefcase"></span> Billing</a>
      </li>

      <li className="divider"></li>

      <li>
        <a href="#"><span className="glyphicon glyphicon-off"></span> Sign out</a>
      </li>
    </ul>
  </li>
</ul>
</div>
</nav>
        
      </div>
    )
        
    }
}