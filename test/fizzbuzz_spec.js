var should = chai.should()
describe('Test fizzBuzz function', function () {
  it('input is 9, and it should return Fizz when divided by 3', function () {
    let result = fizzBuzz(9)
    result.should.be.equal('Fizz')
  })
  it('input is 20, and it should return Buzz when divided by 5', function () {
    let result = fizzBuzz(20)
    result.should.be.equal('Buzz')
  })
  it('input is 15, and it should return FizzBuzz when divided by 3 and 5', function () {
    let result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('input is 7, and it should return 7 when can not be divided by 3 or 5', function () {
    let result = fizzBuzz(7)
    result.should.be.equal(7)
  })
})
