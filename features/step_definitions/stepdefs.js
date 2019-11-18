const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const userModel = require("../../models/user");
const articleModel = require("../../models/article");
userModel.createUser(
  "jarno.bogaert99@gmail.com",
  "Jarno123"
);
//*******************<First scenario>***********************
Given('User with email {string} and password {string} wants to create an account', function (string, string2) {           // Write code here that turns the phrase above into concrete actions
  this.email = string;
  this.password = string2;
});

When('User creates account', function () {
  // Write code here that turns the phrase above into concrete actions
  this.userId = userModel.createUser(this.email,this.password);
});

Then('User should be successfully created', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(userModel.userExists(this.userId), true)
});

//*******************<Second scenario>***********************
Given('User with email {string} and password {string} is logged in', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  this.user2 = userModel.login(string,string2);
  assert.equal(this.user2.loggedIn, true);
});

When('User wants to create an article with title {string} and text {string}', function (string, string2) {     
  // Write code here that turns the phrase above into concrete actions
  this.articleId = articleModel.createArticle(this.user2.id, string, string2);
});

Then('article should be created successfully', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(articleModel.articleExists(this.articleId),true)
});