import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
      <div className="app">
          <Navbar />
          <main>
              <h1 className="text-center my-3">Todo List Graphql</h1>
              <br />
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-4 mb-4">
                          <form action="">
                              <div className="mb-3">
                                  <label htmlFor="title" className="form-label">
                                      Title
                                  </label>
                                  <input
                                      type="email"
                                      className="form-control"
                                      id="title"
                                      placeholder=""
                                  />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="description" className="form-label">
                                      Description
                                  </label>
                                  <input
                                      type="email"
                                      className="form-control"
                                      id="description"
                                      placeholder=""
                                  />
                              </div>
                              <div>
                                  <button type="button" className="btn btn-success">
                                      ADD
                                  </button>
                                  <button type="button" className="btn btn-primary mx-3">
                                      UPDATE
                                  </button>
                              </div>
                          </form>
                      </div>
                      <div className="col-md-8">
                          <br />
                          <TodoList/>
                      </div>
                  </div>
              </div>
          </main>
      </div>
  );
}

export default App;
