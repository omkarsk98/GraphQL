import React from "react";
import "./App.css";
import axiosGraphQLAPI from "./constants/graphqlapi";
const TITLE = "React GraphQL GitHub Client";

const GET_DISHES = `
  {
    dishes{
      name,
      price,
      comments{
        comment,
        author
      }
    }
  }
`;

const ADD_DISH = `
  mutation{
    addComment(dishId:2,rating:5,comment:"This is amazing!!",author:"Omkar")
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  componentDidMount() {
    axiosGraphQLAPI
      .post("", { query: GET_DISHES })
      .then(result => {
        return result.data.data;
      })
      .then(res => {
        console.log(res.dishes);
        this.setState({ data: res.dishes });
      });
    // axiosGraphQLAPI
    //   .post("", { query: ADD_DISH})
    //   .then(result => console.log(result));
  }
  mapDishes = () => {
    return this.state.data.map((data, index) => {
      return (
        <div key={index}>
          <p>{data.name}</p>
          <p>{data.price}</p>
          {data.comments.map((item, index) => {
            return (
              <div style={{backgroundColor:"grey"}}>
                <p>{item.comment}</p>
                <p>{"\t-"+item.author}</p>
              </div>
            );
          })}
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <p>{TITLE}</p>
        {/* <p>{this.state.data ? this.mapDishes() : null}</p> */}
      </div>
    );
  }
}

export default App;
