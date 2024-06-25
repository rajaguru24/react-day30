import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [inputData, setInputData] = useState({
    name: "",
    username: "",
    email: "",
    address: {No:"", street: "", city: "", zipcode: "" },
    phone: "",
    website: "",
    company: { companyName: "", role: "", details: "" },
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://65f1213ada8c6584131cea32.mockapi.io/users", inputData)
      .then(() => {
        alert("Data Added successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        
          <div className="w-350 p-5 border bg-light">
            <form className="form-group" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">NAME:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({ ...inputData, name: e.target.value })
                  }
                ></input>
              </div>
              <br></br>

              <div>
                <label htmlFor="name">USERNAME:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({ ...inputData, username: e.target.value })
                  }
                ></input>
              </div>
              <br></br>

              <div>
                <label htmlFor="name">EMAIL:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({ ...inputData, email: e.target.value })
                  }
                ></input>
              </div>
              <br></br>
              <br></br>

              <div>
                <div>
                  <p>ADDRESS</p>
                  <label htmlFor="no">No:</label>
                  <input
                  name="number"
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      address:{
                        ...inputData.address,
                        No: e.target.value,
                      }
                    })
                  }
                ></input>
                </div>
                
                <div>
                <label htmlFor="name">STREET:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        address: {
                          ...inputData.address,
                          street: e.target.value,
                        },
                      })
                    }
                  ></input>
                </div>
                <br></br>

                <div>
                  <label htmlFor="name">CITY:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        address: { ...inputData.address, city: e.target.value },
                      })
                    }
                  ></input>
                </div>
                <br></br>

                <div>
                  <label htmlFor="name">ZIPCODE:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        address: {
                          ...inputData.address,
                          zipcode: e.target.value,
                        },
                      })
                    }
                  ></input>
                </div>
              </div>
              <br></br>
              <br></br>

              <div>
                <label htmlFor="phone">PHONE:</label>
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({ ...inputData, phone: e.target.value })
                  }
                ></input>
              </div>
              <br></br>

              <div>
                <label htmlFor="website">WEBSITE:</label>
                <input
                  name="website"
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({ ...inputData, website: e.target.value })
                  }
                ></input>
              </div>
              <br></br>
              <br></br>

              <div>
                <div>
                  <p>COMPANY DETAILS</p>
                  <label htmlFor="name">COMPANY NAME:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        company: { ...inputData.company, name: e.target.value },
                      })
                    }
                  ></input>
                </div>
                <br></br>

                <div>
                  <label htmlFor="name">ROLE:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        company: {
                          ...inputData.company,
                          catchPhrase: e.target.value,
                        },
                      })
                    }
                  ></input>
                </div>
                <br></br>

                <div>
                  <label htmlFor="name">DETAILS:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        company: { ...inputData.company, bs: e.target.value },
                      })
                    }
                  ></input>
                </div>
              </div>
              <br></br>
              <br></br>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
  
  );
}

export default Create;