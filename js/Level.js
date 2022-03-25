var currentLevel = 0;
// const WORLD_COLS = 100;
// const WORLD_ROWS = 100;


const WORLD_ROAD = 0;
const WORLD_WALL = 1;
const WORLD_FILL = 3;
const WORLD_TREE = 4;
const WORLD_CRACK = 5;
const WORLD_KEY = 6;
const WORLD_DOOR = 7;
const WORLD_GOAL = 8;
const WORLD_WATER = 9;
const WORLD_ORB = 10;

var baseLevel = [
  [4,4,4,4,4,4,4,4,4,4,4,4],
  [4,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,4],
  [4,4,4,4,4,4,4,4,4,4,4,4]
];
var level1 = [[4,4,4,4,4,4,4,4,4,4,4,4],[4,0,0,0,0,0,9,9,9,9,9,4],[4,0,0,0,0,0,0,0,9,9,9,4],[4,0,0,3,3,3,3,1,0,9,9,4],[4,0,0,3,3,3,5,5,1,0,9,4],[4,0,3,3,1,1,5,1,1,0,0,4],[4,0,3,1,1,3,1,3,3,3,0,4],[4,0,3,1,3,5,3,3,8,3,3,4],[4,9,3,3,3,3,3,3,3,3,0,4],[4,9,9,9,3,3,3,3,3,0,0,4],[4,9,9,9,9,0,0,0,0,0,0,4],[4,4,4,4,4,4,4,4,4,4,4,4]];

var level2 = [[4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,0,0,4,4,4,4,4,4,4,4],
[4,0,3,1,3,4,4,4,0,5,0,4],
[4,0,1,1,3,0,4,0,1,1,5,4],
[4,3,1,1,5,3,4,3,5,1,3,4],
[4,0,0,5,3,3,7,3,1,8,0,4],
[4,0,6,3,3,3,4,3,1,3,0,4],
[4,0,0,3,3,0,4,3,3,0,4,4],
[4,4,4,0,0,4,4,0,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4]];

var level3 = [
  [4,4,4,4,4,4,4,4,4,4,4,4],
  [4,0,0,0,9,9,9,3,3,1,1,4],
  [4,3,3,3,9,9,9,5,1,8,3,4],
  [4,3,3,3,5,9,9,9,3,5,3,4],
  [4,3,3,3,1,9,9,9,9,3,5,4],
  [4,3,1,1,1,3,9,9,9,9,3,4],
  [4,0,3,1,1,5,9,9,9,9,9,4],
  [4,3,0,3,3,1,5,9,9,9,9,4],
  [4,3,0,3,3,1,5,1,3,9,9,4],
  [4,0,0,0,0,3,3,3,3,0,0,4],
  [4,0,0,0,0,0,3,3,5,3,0,4],
  [4,4,3,10,3,3,3,1,3,4,3,4],
  [4,4,0,0,0,4,4,3,3,3,3,4],
  [4,4,4,4,4,4,4,4,4,4,4,4],
  [4,4,4,4,4,4,4,4,4,4,4,4],
  [4,4,4,4,4,4,4,4,4,4,4,4]];

// var Level4 = [[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,4,4,4,4,4,4,4,9,9,9,4,4,4,4,1,5,0,0,4],[4,4,4,4,4,3,3,3,3,9,9,9,4,4,4,5,3,0,0,4],[4,4,4,4,3,3,3,1,3,3,9,9,9,4,4,8,3,3,0,4],[4,4,4,3,3,3,1,1,1,3,3,3,9,4,4,3,3,0,0,4],[4,3,3,3,5,1,1,5,5,3,3,3,3,4,4,9,9,9,9,4],[4,3,3,1,1,1,1,3,1,5,3,3,3,4,4,9,9,9,9,4],[4,3,3,5,3,3,3,3,3,3,5,3,3,4,4,9,9,9,9,4],[4,3,1,1,4,4,7,4,3,3,3,3,3,4,4,0,0,0,0,4],[4,3,1,3,4,3,3,4,4,9,9,9,9,4,4,0,3,0,0,4],[4,3,6,0,4,10,0,4,9,9,9,9,4,4,4,0,3,0,0,4],[4,0,0,0,4,4,4,4,9,9,9,9,4,4,0,0,3,0,0,4],[4,0,0,0,0,4,0,0,0,9,9,4,4,0,0,0,3,3,0,4],[4,0,0,0,0,0,0,0,0,3,3,4,0,0,0,3,3,5,0,4],[4,4,0,0,0,3,5,1,0,0,0,0,0,0,3,1,1,0,0,4],[4,4,0,0,0,3,1,5,0,0,0,0,0,0,5,5,1,0,4,4],[4,4,0,0,0,0,3,5,1,5,0,0,0,0,5,0,0,0,4,4],[4,4,4,0,0,0,0,3,0,3,3,3,0,0,0,0,0,4,4,4],[4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,4,4,4,4,4],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];

var level4 = [[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,4,4,4,4,4,4,4,9,3,3,4,4,4,4,4,4,4,4,4],[4,4,4,3,3,3,3,9,9,3,3,8,4,4,4,4,4,4,4,4],[4,4,3,3,3,3,3,9,9,9,3,3,3,4,4,4,4,4,4,4],[4,3,3,3,3,3,1,1,9,9,9,9,3,4,4,4,4,4,4,4],[4,3,3,3,5,1,1,5,9,9,9,9,9,4,4,4,4,4,4,4],[4,3,3,1,1,1,1,3,1,5,9,9,9,4,4,4,4,4,4,4],[4,3,3,5,3,3,3,3,3,3,5,3,3,4,4,4,4,4,4,4],[4,4,1,1,3,3,3,3,3,3,3,3,3,4,4,4,0,0,4,4],[4,4,4,3,3,3,3,3,3,3,3,3,3,4,4,0,3,0,0,4],[4,4,4,4,3,3,3,3,3,3,3,3,4,4,4,0,6,0,0,4],[4,4,4,4,4,4,4,3,3,3,3,3,4,4,0,0,3,0,0,4],[4,0,10,0,4,4,4,0,0,3,3,4,4,0,0,0,3,3,0,4],[4,0,0,0,4,0,0,0,0,3,3,4,4,0,0,3,3,5,0,4],[4,4,4,7,4,3,5,1,0,0,0,4,4,0,3,1,1,0,0,4],[4,4,0,0,0,3,1,5,0,4,4,4,0,0,5,5,1,0,4,4],[4,4,0,0,0,0,3,5,3,3,3,0,0,0,5,0,0,0,4,4],[4,4,4,0,0,0,0,3,0,3,3,3,0,0,0,0,0,4,4,4],[4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,4,4,4,4,4],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];

var level5 = [[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,4,4,4,4,4,4,4,9,9,9,4,4,4,4,1,5,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,4,4,3,3,3,3,3,3,9,9,9,4,4,4,5,3,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,4,3,3,3,3,3,1,3,3,9,9,9,4,4,8,3,3,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,4,3,3,3,3,1,1,1,3,3,3,9,4,4,3,3,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,3,3,5,1,1,5,5,3,3,3,3,3,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,3,1,1,1,1,3,1,5,3,3,3,3,4,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,3,5,3,3,3,3,3,3,5,3,3,3,4,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,1,1,4,4,7,4,3,3,3,3,3,3,4,4,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,1,3,4,3,3,4,4,9,9,9,9,4,4,0,3,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,3,0,4,10,0,4,9,9,9,9,4,4,4,0,3,0,0,9,9,4,4,4,3,3,3,4,4,4,4,4,4,4],[4,0,0,0,4,4,4,4,9,9,9,9,4,4,9,9,3,0,9,9,9,4,3,3,0,0,3,3,3,3,3,3,4,4],[4,0,0,0,0,4,0,0,0,9,9,4,4,0,9,9,9,9,9,9,9,0,0,0,0,3,0,0,3,3,3,3,4,4],[4,0,0,0,0,0,0,0,0,3,3,3,0,0,0,9,9,9,9,3,3,0,0,3,3,4,4,3,0,0,3,3,4,4],[4,4,0,0,0,3,5,1,0,0,0,0,0,0,3,1,1,0,3,3,0,0,3,3,4,4,4,4,3,3,1,3,4,4],[4,4,0,0,0,3,1,5,0,3,3,4,4,0,5,5,1,3,0,0,0,3,3,4,4,4,4,4,4,3,3,1,5,4],[4,4,0,0,0,0,3,5,3,4,4,4,4,4,4,0,0,0,0,3,3,4,4,4,4,4,4,4,4,4,3,1,3,4],[4,4,4,0,0,0,0,3,4,4,4,4,4,4,0,3,0,3,3,3,4,4,4,4,4,4,4,4,4,3,5,1,3,4],[4,4,4,3,3,0,0,0,0,0,4,4,0,0,0,3,3,3,3,3,4,4,4,4,4,4,4,4,3,1,1,1,3,4],[4,4,4,3,3,3,0,0,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,3,1,6,1,3,4],[4,4,4,3,3,3,3,0,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,1,1,1,4,4],[4,4,4,4,4,3,3,0,3,3,1,3,3,3,3,9,9,4,4,4,4,4,4,4,4,4,4,4,3,3,3,3,4,4],[4,4,4,4,4,4,4,0,0,0,1,5,3,3,9,9,9,4,4,4,4,4,4,4,3,3,3,4,4,4,4,4,4,4],[4,4,4,4,4,4,4,4,4,0,0,1,4,4,9,9,9,4,4,4,4,3,3,3,3,3,3,4,4,4,4,4,4,4],[4,4,4,4,4,4,4,4,4,0,0,3,4,4,9,9,3,4,4,4,3,3,3,5,1,1,1,1,5,1,1,4,4,4],[4,4,4,4,4,4,4,4,4,0,3,1,4,4,9,3,0,4,4,3,0,3,1,1,1,3,5,1,1,6,1,4,4,4],[4,4,4,4,4,4,4,4,4,0,1,5,4,4,4,3,0,3,0,0,3,3,1,3,3,3,3,3,1,1,1,4,4,4],[4,4,4,4,4,4,4,4,3,3,3,5,4,4,4,3,3,0,0,3,3,3,3,4,4,4,3,3,5,1,3,4,4,4],[4,4,4,4,4,4,3,0,0,3,5,4,4,4,4,3,3,3,3,3,3,4,4,4,4,4,4,3,3,3,3,4,4,4],[4,4,3,3,3,5,3,3,3,3,4,4,4,4,4,4,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,1,1,5,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,5,1,6,1,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,5,1,1,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,1,5,3,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];

// var level1 = [
//   4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
//   4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,
//   4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,
//   4,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,
//   4,0,0,0,0,0,0,0,0,0,4,4,0,0,0,4,
//   4,0,0,0,0,0,0,2,0,0,0,4,0,0,0,0,
//   4,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,
//   4,0,0,0,0,0,0,0,0,0,4,4,4,0,0,4,
//   4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,
//   4,0,0,0,0,0,0,0,9,0,0,0,0,0,0,4,
//   4,0,0,0,0,0,0,9,9,0,0,0,0,0,0,4,
//   4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
//   var levels = [
//     4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
//     4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,
//     4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,
//     4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,
//     4,0,0,0,0,0,2,0,0,0,4,4,0,0,0,4,
//     0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,
//     4,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,
//     4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,4,
//     4,0,0,0,0,0,0,0,0,0,4,4,4,0,0,4,
//     4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,
//     4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,
//     4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
// //     var level3 = [
//       1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
//       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//       1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var block1 = [
  4,4,4,4,4,4,4,4,4,4,
  4,4,4,4,1,1,3,3,3,1,
  4,4,4,1,0,0,0,2,0,0,
  4,4,1,0,0,0,0,0,0,0,
  4,1,0,0,0,0,0,10,0,0,
  4,1,0,0,0,0,1,1,1,1,
  4,1,0,0,0,0,1,4,4,4,
  5,0,0,0,0,5,4,4,0,6,
  1,0,0,0,0,1,4,4,4,0,
  1,0,0,0,0,1,1,1,5,1];
var block2 = [
  4,4,4,4,4,4,4,4,4,4,
  1,5,1,0,0,1,1,1,4,4,
  0,0,0,0,0,4,1,1,0,4,
  0,0,0,0,0,0,4,4,6,4,
  0,0,0,0,0,0,1,4,4,4,
  5,1,1,1,0,0,1,1,1,1,
  4,4,4,1,0,0,0,0,0,0,
  0,4,4,4,5,0,0,0,0,0,
  4,4,4,4,1,0,0,1,1,1,
  1,1,1,1,0,0,0,5,4,1];
var block3 = [
  4,4,4,4,4,4,4,4,4,4,
  4,4,4,4,9,9,9,9,9,9,
  4,4,9,9,9,9,9,9,9,9,
  4,9,9,9,9,9,9,9,9,9,
  4,9,9,9,9,9,9,9,9,9,
  3,3,9,9,9,9,9,9,9,9,
  3,3,9,9,9,9,9,9,9,9,
  3,3,9,9,9,9,9,9,0,3,
  3,9,9,9,9,9,9,0,3,3,
  3,3,3,9,9,9,9,3,3,4];
var block4 = [
  4,4,4,4,4,4,4,4,4,4,
  9,9,9,9,9,3,3,0,1,1,
  9,9,9,9,9,3,3,6,0,1,
  9,9,9,9,9,9,3,3,0,3,
  9,9,9,9,9,9,3,3,3,3,
  9,9,9,9,9,9,9,9,3,3,
  0,0,0,0,0,9,9,9,9,9,
  3,1,5,1,3,9,9,9,9,9,
  3,1,5,1,3,9,9,9,9,9,
  4,4,4,4,4,3,9,9,9,9,
  4,3,3,3,4,3,9,9,9,9];
  // var level2 = [
  //   1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  //   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,1,0,3,0,4,0,5,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  //   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  //   1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  //var levels = [level1,level2];
  var winnerCircle = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,5,0,0,0,0,5,0,0,0,0,0,0,1,
    1,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,2,5,5,2,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,1,
    1,0,0,0,0,0,0,5,0,0,0,0,5,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  var blankLevel = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

    var levelTEST = [[4,4,4,4,4,4,4,4,4,4,4,4],[4,0,0,0,0,0,0,0,0,0,0,4],[4,0,0,0,0,0,6,6,6,0,7,4],[4,0,0,0,0,0,6,6,6,0,7,4],[4,0,0,0,0,0,0,0,0,0,7,4],[4,0,0,0,0,0,0,0,0,0,7,4],[4,0,0,0,0,0,0,0,0,0,7,4],[4,0,0,0,0,0,0,0,0,0,7,4],[4,0,0,8,0,0,0,0,0,0,0,4],[4,0,0,0,0,0,10,0,9,9,9,4],[4,0,0,0,0,0,0,0,9,9,9,4],[4,4,4,4,4,4,4,4,4,4,4,4]];

    // var TESTlevels = [levelTEST,level5, level2, baseLevel]; // TEST LEVELS
    // var TESTlevels = [levelTEST]; // TEST LEVELS
    var levels = [level1, level2, level3, level4, level5];
