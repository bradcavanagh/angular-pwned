angular-pwned
=============

AngularJS directive for email inputs, checking against the list of breached accounts via the [Have I Been Pwned API](https://haveibeenpwned.com/). A basic example can be found [here](http://canspice.org/local-documents/angular-pwned-example/).

## Installation

* Get `angular-pwned-directive.js` however you see fit (clone this repo, copy-and-paste, whatever).
* Put that file somewhere.
* Optionally edit the `timerDelay` value in that file.
* Add `pwned` to any email `input` field.

## Usage

You'd want to use this directive in an `input` field, something like:

```
<input type="email" name="input" ng-model="myEmail" placeholder="Email Address" pwned />
```

If the email address is listed in the Have I Been Pwned breached accounts database, then you can check the appropriate `$error.ispwned` value.

If you add a value to the attribute like:

```
<input type="email" name="input" ng-model="myEmail" placeholder="Email Address" pwned="pwnedErrorData" />
```

...then you can use that value in your current `$scope`, so you can tell the user which breaches their email address is found in. Using this example, you would use `$scope.pwnedErrorData`. The data is the raw JSON that comes back from [the Have I Been Pwned API](https://haveibeenpwned.com/API/v2), so either examine the data structure that comes back or go refer to the API.

## Notes

* It appears that this directive does not work with the Angular 1.3.x branch. Please use 1.2.2 until further notice. No, I haven't yet filed a bug report with AngularJS...
* The reason behind the `timerDelay` is because you probably don't want to hammer the Have I Been Pwned API every time the user types a letter. Put a little delay on it, and it'll do the request when the user has stopped typing for `timerDelay` milliseconds.
* This directive does not (yet) support the new [paste search API](http://www.troyhunt.com/2014/09/introducing-paste-searches-and.html).
