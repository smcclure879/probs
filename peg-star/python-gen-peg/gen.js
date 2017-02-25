//stackexchange ...
function* permute(permutation) {
  var length = permutation.length,
      c = Array(length).fill(0),
      i = 1;

  yield permutation;
  while (i < length) {
    if (c[i] < i) {
      var k = (i % 2) ? c[i] : 0,
          p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      yield permutation;
    } else {
      c[i] = 0;
      ++i;
    }
  }
}

// Memory efficient iteration through permutations:
for (var permutation of permute([1, 2, 3])) console.log(permutation);

// Simple array conversion:
//var permutations = [...permute([1, 2, 3])];
