import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Test case: Penjumlahan angka positif
test('should add two positive numbers correctly', () => {
  // Arrange
  const operandA = 3;
  const operandB = 7;

  // Act
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 10;
  assert.strictEqual(
    actualValue,
    expectedValue,
    `sum(${operandA}, ${operandB}) should return ${expectedValue}`
  );
});

// Test case: Penjumlahan angka negatif
test('should add two negative numbers correctly', () => {
  // Arrange
  const operandA = -4;
  const operandB = -6;

  // Act
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.strictEqual(
    actualValue,
    expectedValue,
    `sum(${operandA}, ${operandB}) should return ${expectedValue}`
  );
});

// Test case: Penjumlahan angka positif dan negatif
test('should add a positive and a negative number correctly', () => {
  // Arrange
  const operandA = 10;
  const operandB = -5;

  // Act
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.strictEqual(
    actualValue,
    expectedValue,
    `sum(${operandA}, ${operandB}) should return ${expectedValue}`
  );
});

// Test case: Penjumlahan string dengan number
test('should add a string and a number correctly', () => {
  // Arrange
  const operandA = '10';
  const operandB = 5 ;

  // Act
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.strictEqual(
    actualValue,
    expectedValue,
    `sum(${operandA}, ${operandB}) should return ${expectedValue}`
  );
});

// Test case: Penjumlahan string dengan string
test('should add a string and a string correctly', () => {
  // Arrange
  const operandA = '10';
  const operandB = '5' ;

  // Act
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.strictEqual(
    actualValue,
    expectedValue,
    `sum(${operandA}, ${operandB}) should return ${expectedValue}`
  );
});

// Test case: Penjumlahan angka nol
test('should return the same number if one operand is zero', () => {
  // Arrange
  const operandA = 0;
  const operandB = 9;

  // Act
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 9;
  assert.strictEqual(actualValue, expectedValue, `sum(${operandA}, ${operandB}) should return ${expectedValue}`);
});