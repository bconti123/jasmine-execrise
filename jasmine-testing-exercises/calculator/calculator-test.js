
it('should calculate the monthly rate correctly', function () {
  
  const values = {
    amount: 10000,
    years: 10,
    rate: 6
  };
  expect(
    calculateMonthlyPayment(values)
    ).toEqual('111.02')
});


it("should return a result with 2 decimal places", function() {
  
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(
    calculateMonthlyPayment(values)
    ).toEqual('131.00');
});

/// etc
// it("should return a result with $", function() {
//   const values = {
//     amount: 23153,
//     years: 5,
//     rate: 6
//   };
//   const result = calculateMonthlyPayment(values);
//   const str = updateMonthly(result)
//   expect(  
//     result
//     ).toEqual('447.61');
//   expect(
//     str.innerText
//     .indexOf("$") !== -1)
//     .beTo(true);
  
// });