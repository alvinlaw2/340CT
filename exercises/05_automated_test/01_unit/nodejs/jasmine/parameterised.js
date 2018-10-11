
describe('check Username', () => {
  const runs = [
    { desc: 'too short',  param: 'rj',      result: false },
    { desc: 'too long',   param: 'rj12345', result: false },
    { desc: 'just right', param: 'rj123',   result: true }
  ]
  runs.forEach( run => {
    const verb = run.result ? 'passes' : 'fails'

    it(`${verb} when ${run.desc}`, function () {
      var result = user.checkUsername(this, run.args)
      expect(result).toEqual(run.result)
    })

  })
})
