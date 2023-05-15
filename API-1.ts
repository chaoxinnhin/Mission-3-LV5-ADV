// INPUT
// { model: "Civic"; year: 2014 }

// OUTPUT
// { car_value: 6614 }

// ERROR OUTPUT
// { error: "there is an error"}

// BUSINESS RULES

// Car_value is calculated by adding up the positions of alphabets of the
// letters in the name, times a hundred, and add the year value.
// Position of alphabet means the letter in the order of alphabets
// (e.g. A is the first letter, so it is 1.  Z is the last letter, so it is 26).
// Space and any other signs are ignored.
// For example, a "Civic" in year 2014 will be worth
// (3 + 9 + 22 + 9 + 3) * 100 + 2014 = $6,614.
// If input values are not valid, return an error.
interface CarData {
  model: string;
  year: number;
}

function calculateCarValue(data: CarData): {carValue: number; error: string}{
  const carName: string = data.model || '';
}