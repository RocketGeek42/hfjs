/* You've been given a super secret file and two functions that allow access to get and set the contents of the file,
but only if you have the right password. The first function, getSecret, returns the contents of the file if the password is correct,
and logs each attempt to access the file.  The second function, setSecret, updates the content of the file,
and resets the access tracking to 0.  It's your job to fill in the blanks below to complete the JS file and test your functions */
function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;
  if (secretPassword == file.password) {
    return file.contents;
  }
  else {
    return "Invalid password: No secret for you.";
  }
}
function setSecret(file, secretPassword, secret) {
  if (secretPassword == file.password) {
    file.opened = 0;
    file.contents = secret;
  }
}
var superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detriot."
};
var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia");
secret = getSecret(superSecretFile, 2);
console.log(secret);
