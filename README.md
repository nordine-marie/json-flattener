# READ ME

This file can be used to flatten JSON file.
The assumptions are :  
- The input you receive will be a JSON object
- All keys named in the original object will be simple strings without ‘.’ characters
- The input JSON will not contain arrays
- You may use a library to parse JSON from a string to an object
- Command line should correspond to linux conventions, eg using pipes cat test.json | mycode
- Your code will be judged on correctness and code quality, but you do not need to focus on performance optimizations
- Please add tests to validate that your code works correctly.  
   
## Example :

input :

```
{
    "a": 1,
    "b": true,
    "c": {
        "d": 3,
        "e": "test"
    }
}
```

flattened output :
```
{
    "a": 1,
    "b": true,
    "c.d": 3,
    "c.e": "test"
}
```

## Requirements
- NodeJS

## User Guide

Clone the repository and change directory

```
$ git clone https://github.com/nordine-marie/json-flattener.git
$ cd json-flattener
```

### 1. Output in stdout

```
$ node flatten.js /path/to/inputjsonfile.json
```


### 2. Output written in a file

```
$ node flatten.js /path/to/inputjsonfile.json /path/to/$outputjsonfile.json
```

## Tests

Multiple tests (input & output) are provided in the *tests* folder.
**You can recompute the output files yourself !**
