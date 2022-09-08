import React from "react";
import "./App.css";

function App() {
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    fetch("https://mysterious-thicket-62434.herokuapp.com/logic", {
      method: "POST",
      body: JSON.stringify({ value }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setResult(res.ans))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Some Logical Stuff</h1>
      <h3>Problem Statement</h3>
      <details>
        <summary><strong>Read the Question here</strong></summary>
        <p>
          A spy agency has built a squad of robotic insects that are small
          enough to infiltrate enemy buildings. The enemy headquarters has
          several rectangular rooms which must be navigated by the insects in
          order to reach and photograph secret documents.
          <br />
          An insect's location is represented by x and y coordinates. It's
          heading is represented by one of four cardinal compass points. The
          room is divided into a grid to simplify navigation. An example
          position could be (0, 0, N), which means that the insect is at the
          bottom-left corner and facing north.
          <br />
          Being a robot with limited computing capacity, the insect is only
          capable of understanding very simple commands: L -- makes the insect
          turn left 90 degrees R -- makes the insect turn right 90 degrees F --
          make the insect move forward 1 square Assume the square directly north
          of (x, y) is (x, y+1).
        </p>
      </details>
        <p>
          <strong>--== INPUT ==--</strong>
          <br />
          The first line of input represents the size of the room with the base
          index being (0, 0). The rest of the input is data pertaining to the
          insects that have been deployed. Each insect has two lines of input.
          The first line gives the insect's position, and the second line is the
          sequence of commands that tell the insect where to navigate. Each
          insect will finish it's navigation sequentially, which means that the
          second insect wont start moving until the first one has finished
          moving.
        </p>
        <p>
          <strong>--== OUTPUT ==--</strong>
          <br />
          The output for each insect should be its final coordinates and
          heading.
        </p>
        <p style={{ textAlign: "start" }}>
          --== SAMPLE INPUT AND OUTPUT ==--
          <br />
          <strong>Input:</strong>
          <br /> 5 5 <br />1 2 N<br /> LFLFLFLFF <br />3 3 E <br />
          FFRFFRFRRF <br />
          <strong>Expected output:</strong> <br />1 3 N<br /> 5 1 E
        </p>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSumbit}
      >
        <textarea
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Input"
        ></textarea>
        <input type="submit" value="Get Position" />
      </form>
      <div className="Result">
        {" "}
        <strong>--== OUTPUT ==--</strong> <br />
        {result
          ? result.map((e) => {
              return (
                <>
                  <br />
                  {e}
                </>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;
