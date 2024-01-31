# secpw
Secure random passwords in Javascript

# what

Code to generate a secure, random password in JavaScript, based on a secure random
number generator, with a uniform distribution and no modulo bias.

The file [simplesecpw.js](simplesecpw.js) contains a password generation function with
no parameters, a hardcoded length of 15 characters, using only ASCII letters (a-z, A-Z)
and numbers (0-9). The file [secpw.js](secpw.js) contains a slightly more configurable
variant with a parameter for the password length.

The code can easily be adapted for other character classes or password length
requirements.

# demo

A live web page using the simplesecpw function can be found here:

https://password.hboeck.de/

# who

Written by [Hanno Böck](https://hboeck.de/).

License: 0BSD
