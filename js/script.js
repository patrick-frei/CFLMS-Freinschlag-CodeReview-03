function calculateInsurance(country, horsePower, age) {
  switch (country) {
    case "Austria":
      return horsePower * 100 / age + 50
      break
    case "Hungary":
      return horsePower * 120 / age + 100
      break
    case "Greece":
      return horsePower * 150 / (age + 3) + 50
  }
}
