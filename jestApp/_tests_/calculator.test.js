const mathOperations = require('../index')

// Δομή jest για να κάνεις ελέγχους

// Χρησιμοποιεί την describe
describe("Calculator Test Sum", () => {

  // Βάζουμε κανόνες για την function πχ sum που θα κάνουμε τεστ
  // Για αυτό χρησιμοποιούμε την test()

  test("Addition of 2 numbers", () => {
    // Στην callback βάζω τί θέλω να τρέξω, και τί περιμένω να πάρω σαν αποτέλεσμα

    // Τι περιμένω να πάρω σαν αποτέλεσμα
    let result = mathOperations.sum(2, 3)
    expect(result).toBe(5)

  })

  test("Addition of 2 numbers with error", () => {
    // Στην callback βάζω τί θέλω να τρέξω, και τί περιμένω να πάρω σαν αποτέλεσμα

    // Τι περιμένω να πάρω σαν αποτέλεσμα
    let result = mathOperations.sum(2, 3)
    expect(result).toBe(8)

  })

})

// describe("Calculator Test Diff", () => {

//   // Βάζουμε κανόνες για την function πχ Diff που θα κάνουμε τεστ

// })