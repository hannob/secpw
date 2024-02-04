/* (c) Hanno Boeck, 0BSD license, https://password.hboeck.de/ */
function secpw(pwlen, pwchars) {
  if (pwlen === undefined) {
    pwlen = 15;
  } else if (!Number.isInteger(pwlen) || pwlen <= 0) {
    throw new Error("pwlen must be a positive integer");
  }

  if (pwchars === undefined) {
    const pwchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (typeof pwchars !== 'string') {
    throw new Error("pwchars must be a string");
  } else if (pwchars.length > 256) {
    throw new Error("pwchars must be <= 256");
  }

  const limit = 256 - (256 % pwchars.length);

  let passwd = "";
  let randval;
  for (let i = 0; i < pwlen; i++) {
    do {
      randval = window.crypto.getRandomValues(new Uint8Array(1))[0];
    } while (randval >= limit);
    passwd += pwchars[randval % pwchars.length];
  }
  return passwd;
}
