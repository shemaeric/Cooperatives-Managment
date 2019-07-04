import React from "react";

const Cards = ({ img, title, subTitle, username, email, bio }) => {
  return (
    <div className="card shadow p-3 mb-5 bg-white rounded">
      <div className="btn btn-outline-light shadow-sm rounded">
        <img src={img} className="card-img-top p-3" alt="..." />
        <div className='btn btn-outline-success float-right mb-2 mr-2'>
        <i class="zmdi zmdi-edit  zmdi-hc-1x" /></div>
      </div>
      <div className="card-body ">
        <div className="list-group list-group-flush">
          <label className="label text-info text-sm-left border-bottom">
            Names
          </label>
          <button type="edit" className="btn btn-outline-secondary reverse">
            {title}
          </button>
        </div>
        <div className="list-group list-group-flush">
          <label className="label text-info text-sm-left border-bottom">
            Title
          </label>
          <button type="edit" className="btn btn-outline-secondary">
            {subTitle}
          </button>
        </div>

        <div className="list-group list-group-flush">
          <label className="label text-info text-sm-left border-bottom">
            username
          </label>
          <button type="edit" className="btn btn-outline-secondary">
            {username}
          </button>
        </div>

        <div className="list-group list-group-flush">
          <label className="label text-info text-sm-left border-bottom">
            email
          </label>
          <button type="edit" className="btn btn-outline-secondary">
            {email}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
