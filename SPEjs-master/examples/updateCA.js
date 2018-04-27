var GRID_SIZE = 64 * 1024
var ITERS     = 45000

//A generic 1D cellular automata implementation
function updateCA(rule, state, next_state) {
  var n = state.length, i
  next_state[0] = rule(state[n-1], state[0], state[1])
  for(i=1; i<n-1; ++i) {
    next_state[i] = rule(state[i-1], state[i], state[i+1])
  }
  next_state[n-1] = rule(state[n-2], state[n-1], state[0])
}

//Update rule for Wolfram 30 type CA:  http://mathworld.wolfram.com/Rule30.html
function wolfram30(a, b, c) {
  return (30 & (1<<(4*a + 2*b + c))) ? 1 : 0;
}

var s0 = new Uint8Array(GRID_SIZE);
var s1 = new Uint8Array(GRID_SIZE);