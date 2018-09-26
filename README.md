# JavaScript Episode 3

In this exercise your objective will be to write the following functions:

- `logger(array)`:
  - takes an array
  - logs every element from that array to the console
  - should use `forEach`

* `toCelsius(temperaturesInFahrenheit)`:
  - takes an array of temperatures in Fahrenheit
  - returns an array of those temperatures converted to Celsius
  - should use `map`

- `hottestDays(temperatures, threshhold)`:
  - takes an array of temperatures
  - takes a threshhold
  - returns an array with every temperature above the threshhold
  - should use `filter`

* `logHottestDays(temperaturesInFahrenheit, threshhold)`:
  - takes an array of temperatures in Fahrenheit
  - takes a threshhold
  - logs only temperatures that exceed the threshold from that array to the console
  - logs temperatures in Celsius.

## Instructions

#### Tools

- Install `node`:
  ```bash
  $ brew install node
  ```
- Install `yarn`:
  ```bash
  $ brew install yarn --without-node
  ```

#### The Files

**Fork** this repository and clone your fork (make sure you clone it into your `development` directory):

```bash
$ git clone https://github.com/<your_username>/JSEpisode3.git
```

Inside you'll find two `.js` files:

- `iterators.js` - this is the file you'll be editing
- `iterators.spec.js` - this is a testing file. It checks that your functions have the features discussed above.  
  **DO NOT EDIT THIS FILE**

#### Running The Tests

Install all the requirements:

1. Navigate to the project root (you'll find a file called `package.json` there).
2. Install the requirments using `yarn install`.

Run the tests:

```bash
$ yarn test
```

This command will run the testing file.

You'll know when you're done when your code passes all the tests.
