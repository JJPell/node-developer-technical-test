# Pokémon API - Developer Technical Test

## How to start the API

Ensure that you have node.js v18+ installed.

Clone the repository from github.

With your terminal open in the root directory of the repository run `npm install`.

Start the server by running `npm start`.

There is also the option to pass the server port using the `PORT` environment variable. For example `PORT=8080 && npm start` would start the server on port 8080.

## How to get pokemon variations

Once the server is running, send a `HTTP GET` request to the following:

`/variations/{pokemon name}`

For example `/variations/pikachu` would result in:

```json
{
    "name": "pichu",
    "variations": [
        {
            "name": "pikachu",
            "variations": [
                {
                    "name": "raichu",
                    "variations": []
                }
            ]
        }
    ]
}
```

## How run tests

To run tests, simply run the command `npm run tests`.
