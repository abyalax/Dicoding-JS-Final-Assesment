function fibonacci(n) {
  const sequence = [];

  if (n === 0) {
    sequence.push(0);
  } else if (n === 1) {
    sequence.push(0, 1);
  } else {
    sequence.push(0, 1);
    for (let i = 2; i <= n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence
}

// Jangan hapus kode di bawah ini!
export default fibonacci;



