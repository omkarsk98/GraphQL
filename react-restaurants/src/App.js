import React from "react";
import "./App.css";
import axiosGraphQLAPI from "./constants/graphqlapi";
const TITLE = "React GraphQL GitHub Client";

const GET_DISHES = `
  {
    dishes{
      name,
      price
    }
  }
`;

const ADD_DISH = `
  mutation{
    addComment(dishId:2,rating:5,comment:"This is amazing!!",author:"Omkar")
  }
`;

class App extends React.Component {
  componentDidMount() {
    axiosGraphQLAPI
      .post("", { query: GET_DISHES })
      .then(result => console.log(result));
    axiosGraphQLAPI
      .post("", { query: ADD_DISH})
      .then(result => console.log(result));
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>{TITLE}</p>
      </div>
    );
  }
}

export default App;
