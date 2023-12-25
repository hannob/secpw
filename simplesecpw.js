function simplesecpw() {
  const pwlen = 15;
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