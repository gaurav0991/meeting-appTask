import React from "react";
import axios from "axios";
import Table from "../Components/Home/Table";
import TableFilter from "../Components/Home/TableFilter";
import "./Home.css";
function Home() {
  const [data, setData] = React.useState([]);
  const [search, setsearch] = React.useState("");
  const searchData = async () => {
    const datas = await axios.post(
      "https://meetingapptask.herokuapp.com/api/v1/search",
      {
        meetingName: search,
      }
    );
    setData(datas.data);
  };
  const getFunc = (e) => {
    console.log("Searching");
    searchData();
  };
  React.useEffect(() => {
    changeSearch();
  }, [search]);
  const debounce = (f, d) => {
    let inD;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inD);
      inD = setTimeout(() => f.apply(context, args), d);
    };
  };
  const changeSearch = debounce(getFunc, 1200);
  React.useEffect(() => {
    console.log("here");
    getData();
  }, []);
  const getData = async () => {
    const datas = await axios.get(
      "https://meetingapptask.herokuapp.com/api/v1/meetings"
    );
    console.log(datas.data);
    setData(datas.data["data"]);
  };

  const deleteData = async (id) => {
    try {
      console.log(id);
      const datas = await axios.post(
        "https://meetingapptask.herokuapp.com/api/v1/delete",
        {
          id,
        }
      );
      console.log(datas);
    } catch (e) {}
  };

  const addData = async (postData) => {
    try {
      const datas = await axios.post(
        "https://meetingapptask.herokuapp.com/api/v1/create",
        postData
      );
      setData([...data, datas.data]);
    } catch (e) {}
  };
  return (
    <div className="Home">
      <h1 className="Home-Title">My Meetings</h1>
      <TableFilter
        search={search}
        changeSearch={(e) => {
          setsearch(e.target.value);
        }}
      />
      <Table
        data={data}
        getData={getData}
        addData={addData}
        deleteData={deleteData}
      />
    </div>
  );
}

export default Home;
