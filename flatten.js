const fs = require('fs');

const ARGV = process.argv;

if (ARGV.length == 2) {
  return console.log("ERROR : One or two arguments are needed...")
} else if (ARGV.length >= 5) {
  return console.log("ERROR : Only one or two arguments are needed...")
} else {

  fs.readFile(ARGV[2], function(err, input) {
    if (err) {
      return console.log("ERROR : Unable to read the file... Does it exists ?")
    }
    try {
      var inputObject = JSON.parse(input);
      var outputObject = {};

      var flatten = function(properties, obj) { // recursive function to flatten at all levels
        if (!(obj instanceof Object)) { // recursive endpoint
          outputObject[properties] = obj;
        } else { //subobject
          for (const property in obj) {
            if (properties == "") {
              flatten(property, obj[property])
            } // first case => not a dot
            else {
              flatten(properties + "." + property, obj[property])
            }; // other cas => place a dot
          }
        }
      }

      flatten("", inputObject); // calling the recursive flatten fonction on our inputObject

      if (ARGV.length == 3) { // if no output file path print on stdout
        return console.log(JSON.stringify(outputObject)) // no prettyprint in stdout
      } else { // write at the mentioned output file path
        fs.writeFileSync(ARGV[3], JSON.stringify(outputObject, null, 2)); // prettyprint in output
        return console.log("SUCCESS : Successfully flaten your JSON object at " + ARGV[3])
      }

    } catch (err) {
      return console.log("ERROR : JSON input is invalid...")
    }

  })

}
