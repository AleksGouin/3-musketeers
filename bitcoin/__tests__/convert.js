'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning a Number', () => {
  expect(convert(2, 'BTC', 'BTC')).toBe(2);
});

test('should return a Number', () => {
  expect(convert(2, 'BTC', 'BTC', 'Number')).toBe(2);
});

test('should return a Big number', () => {
  expect(convert(2, 'BTC', 'BTC', 'Big')).toBe(2);
});

test('should return a String', () => {
  expect(convert(2100, 'BTC', 'BTC', 'String')).toBe('2100');
});

test('should convert an integer', () => {
  expect(convert(10, 'BTC', 'BTC', 'Number')).toBe(10);
});

test('should convert a number', () => {
  //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
});

test('should convert a string', () => {
  expect(convert('2', 'BTC', 'BTC', 'Number')).toBe(2);
});

test('should convert a Big number', () => {
  //convert(new Big(2), 'BTC', 'BTC', 'Number');
});

test('should convert a NaN to a Number', () => {
  //convert(NaN, 'BTC', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'mBTC', 'Number');
});

test('should convert a NaN to a String', () => {
  //convert(NaN, 'BTC', 'BTC', 'String');
  //convert(NaN, 'BTC', 'mBTC', 'String');
});

test('should not convert a NaN to a Big', () => {
  //convert(NaN, 'BTC', 'BTC', 'Big');
});

test('should handle rounding errors', () => {
  //convert(4.6, 'Satoshi', 'BTC', 'Number');
  //convert(0.000000046, 'BTC', 'Satoshi', 'Number');
});

test('should throw when untest is undefined', () => {
  //convert(new Big(2), 'x', 'BTC', 'Number');
  //convert(new Big(2), 'BTC', 'x', 'Number');
  //convert(NaN, 'x', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'x', 'Number');
});

test('should throw when representaion is undefined', () => {
  //convert(2, 'BTC', 'mBTC', 'x');
  //convert(NaN, 'BTC', 'mBTC', 'x');
});

test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'btest');
});
