const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let inputCount = -1;

let startVertex = 1;
let numberOfEdge = 0;
let numberOfVertex;

let graph = [];
let visited = [];
let count = 0;

rl.on('line', a => {
  inputCount++;

  if (inputCount === 1) {
    numberOfEdge = +a;
  } else {
    const [x, y] = a.split(' ').map(Number);

    if (inputCount === 0) {
      const newArr = Array.from(Array(+a + 1), () => Array(+a + 1).fill(false));
      graph = [...newArr];
      visited = Array(+a + 1).fill(false);
    } else {
      graph[x][y] = true;
      graph[y][x] = true;
    }
  }

  if (inputCount > numberOfEdge) {
    rl.close();
  }
});

rl.on('close', () => {
  dfs(1);

  console.log(count - 1);
  process.exit();
});

const dfs = vertex => {
  visited[vertex] = true;
  count++;

  for (let i = 1; i <= visited.length; i++) {
    if (!visited[i] && graph[vertex][i]) {
      dfs(i);
    }
  }
};
