// istanbul ignore file
class DBError extends Error {
  constructor (action, e) {
    super(`Failed to ${action} with error ${e}`)
    this.code = e.code
    this.message = e.message
    this.retryable = e.retryable
    this.allErrors = e.allErrors
  }
}

module.exports = DBError
