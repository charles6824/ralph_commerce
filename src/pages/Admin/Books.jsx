import React from 'react'
import "../../styles/blog.css";

const Books = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="container">
    <span className="breadcrumb pt-3 pb-2 text-uppercase">
      Admin{currentPath}
    </span>
    <div className="row">
      <div className="col-md-12">
        <div className="search">
          <input type="search" className="" />
          <table className="table-responsive my-4">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Rich Dad Poor Dad</td>
                <td>Charles Charles</td>
                <td>Finance</td>
                <td>59.99</td>
                <td>
                  <span id="pending">Edit</span> <span id="reject">Delete</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Books
