/* (c) Hanno Boeck, 0BSD license, https://password.hboeck.de/ */
function secpw(pwlen) {
  if (pwlen === undefined) {
    pwlen = 15;
  } else if (!Number.isInteger(pwlen) || pwlen <= 0) {
    throw new Error("pwlen must be a positive integer");
  }

  const pwchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
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
