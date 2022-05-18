import Navbar from "./components/Navbar";
import TodoInputs from "./components/TodoInputs";
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
                         <TodoInputs/> 
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
