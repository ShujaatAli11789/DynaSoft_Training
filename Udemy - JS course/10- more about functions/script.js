// default arguements

// in js functions, we can set default arguments of a function
// the following function returns a object that has parameters passed as the keypairs

function bookTicket(plane, passengers, price = passengers + 200) {
  return {
    plane,
    passengers,
    price,
  };
}
console.log(bookTicket("LHR104", 2))
// even if a ardument is skipped while function invocation, the missging argument would fall back to the default function parameter
