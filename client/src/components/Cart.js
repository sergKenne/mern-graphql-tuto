import React from 'react'

const Cart = ({ todo }) => {
    const { title, description, id } = todo
    const deleteTodo = (id) => {
        console.log("id:", id)
    }
  return (
      <div className="card">
          <div className="card-body">
              <div>
                  <h5 className="card-title">
                      Title: <span className="card-text text-span">{title}</span>
                  </h5>
              </div>
              <div>
                  <h5 className="card-title">
                      Description:{' '}
                      <span className="card-text text-span">{description}</span>
                  </h5>
              </div>
              <div className="mt-3">
                  <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteTodo(id) }
                  >
                      DELETE
                  </button>
                  <button type="button" className="btn btn-warning mx-3">
                      EDIT
                  </button>
              </div>
          </div>
      </div>
  );
}

export default Cart