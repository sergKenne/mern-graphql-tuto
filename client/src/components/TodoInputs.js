import { useMutation } from '@apollo/client'
import React, {useState} from 'react'
import { CREATE_TODO } from '../graphql/mutation'

const TodoInputs = () => {
    const [inputs, setInputs] = useState({ title: "", description: "" })
    const [info, setInfo] = useState("")
    const [newTodo] = useMutation(CREATE_TODO)
    
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const addTodo = (e) => {
        e.preventDefault();
        if (!inputs.title || !inputs.description) {
            setInfo('Please all field are require');
        } else {
            newTodo({
                variables: {
                    input: inputs
                }
            }).then((data) => {
                console.log(data);
                setInputs({ title: "", description: "" });
                setInfo("")
                window.location.reload()
            })
        }
    }
  return (
      <form onSubmit={addTodo}>
          <div className="mb-3">
              <label htmlFor="title" className="form-label">
                  Title
              </label>
              <input
                  value={inputs.title}
                  name="title"
                  onChange={handleChange}
                  type="text"
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
                  value={inputs.description}
                  name="description"
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder=""
              />
          </div>
          <div>
              <button type="submit" className="btn btn-success">
                  ADD
              </button>
              <button type="button" className="btn btn-primary mx-3">
                  UPDATE
              </button>
          </div>
          <br />
          {info && (
              <div className="alert alert-warning" role="alert">
                  {info}
                  <span
                      aria-hidden="true"
                      style={{
                          float: 'right',
                          fontSize: '1.6rem',
                          position: 'relative',
                          bottom: '1.1rem',
                          left: '.5rem',
                          cursor: 'pointer'
                          
                      }}
                      onClick={() => setInfo("")}
                  >&times;</span>
              </div>
          )}
      </form>
  );
}

export default TodoInputs