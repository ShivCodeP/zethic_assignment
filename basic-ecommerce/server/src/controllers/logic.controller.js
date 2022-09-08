const logic = (req, res) => {
    let input = req.body.value;
    // console.log(input)
    input = input.trim().split("\n");
    let test = (input.length - 1) / 2;
    let [X, Y] = input[0].trim().split(" ").map(Number);
    let line = 1;
    // console.log(test)
    let ans = [];

    for (var s = 0; s < test; s++) {
      let p = input[line++].trim().split(" ");
      let follow = input[line++].trim().split("");

      ans.push(direction(X, Y, p, follow).join(" "));
    }

    return res.send({ans})
};

export default logic;

function direction(X, Y, p, follow) {
  let i = +p[0]; //x-axis
  let j = +p[1]; //y-axis
  let d = p[2];
  let refD = ["N", "E", "S", "W"];

  let index = refD.indexOf(d);
  // console.log(i,j,d,refD[index],follow)

  for (var k = 0; k < follow.length; k++) {
    if (follow[k] == "F" && refD[index] == "N") {
      j++;
    } else if (follow[k] == "F" && refD[index] == "S") {
      j--;
    } else if (follow[k] == "F" && refD[index] == "E") {
      i++;
    } else if (follow[k] == "F" && refD[index] == "W") {
      i--;
    } else if (follow[k] == "L") {
      if (index == 0) {
        index = 3;
      } else {
        index--;
      }
    } else if (follow[k] == "R") {
      if (index == 3) {
        index = 0;
      } else {
        index++;
      }
    }
  }

  return [i, j, refD[index]];
}
