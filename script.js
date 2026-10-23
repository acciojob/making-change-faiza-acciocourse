const makeChange = (c) => {
  let change = {
    q:0,
    d:0,
    n:0,
    p:0
  };
  let num = c;
  let quater = 25, dime = 10, nickel = 5, penny = 1;
  while(num>0) {
    if(num>=quater) {
      change.q = change.q + 1;
      num-=quater;
    }
    else if(num>=dime && num<quater) {
      change.d = change.d + 1;
      num-=dime;
    }
    else if(num>=nickel && num<dime) {
      change.n = change.n + 1;
      num-=nickel;
    }
    else if(num>=penny && num<nickel) {
      change.p = change.p + 1;
      num-=penny;
    }
  }
  console.log(change);
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
