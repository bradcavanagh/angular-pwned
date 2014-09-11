angular-pwned
=============

AngularJS directive for email inputs, checking against the [Have I Been Pwned API](https://haveibeenpwned.com/).

## Installation

* Get `angular-pwned-directive.js` however you see fit (clone this repo, copy-and-paste, whatever).
* Put it somewhere.
* Optionally edit the `timerDelay` value.
* Use it as in the example.

## Usage

You'd want to use this directive in an `input` field, something like:

```
<input type="email" name="input" ng-model="myEmail" placeholder="Email Address" pwned />
```

If the email address is listed in the Have I Been Pwned database, then you can check the appropriate `$error.ispwned` value.

If you add a value to the attribute like:

```
<input type="email" name="input" ng-model="myEmail" placeholder="Email Address" pwned="pwnedErrorData" />
```

...then you can use that value in your current `$scope`, so you can tell the user which breaches their email address is found in.

You can also change up CSS to make the input field red, or have a little description telling the user not to re-use passwords.

## Notes

* It appears that this directive does not work with the Angular 1.3.x branch. Please use 1.2.2 until further notice.
* The reason behind the `timerDelay` is because you probably don't want to hammer the Have I Been Pwned API every time the user types a letter. Put a little delay on it, and it'll do the request when they've stopped typing.
