
//  Miles.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-21 File created.   2016-11-21 Last modification.

/*  The result of the calculation is printed in four different
    ways in this program.
    
    It seems that you cannot format much with the standard
    util.format() function.

*/

const util = require("util"); // to access the util(ities) module

const tools = require("./externals/tools.js"); // for sprintf() and printf()

//var user_selection = String(input_from_user).charAt(0);
//if (user_selection == 'm' || user_selection == 'M') {

process.stdout.write("\n This program converts miles to kilometers. Type a letter to select a meter or kilometers table"
    + "\n Please, write M or K :  ");

process.stdin.on("data", function (input_from_user) {
    // The following statements will be executed after the user
    // of this program has typed in a response.

    // given_letter will refer to the first letter
    // of the user response.

    var given_letter = (String(input_from_user))[0];

    if (given_letter == 'M' || given_letter == 'm') {
        process.stdout.write("\n 'You want to transform miles to kilometers.' \n\n");

        process.stdout.write('Introduce a number of miles')

        process.stdout.write("\n " + distance_in_miles + " miles is "
            + distance_in_kilometers + " kilometers.\n");
    }
    else if (given_letter == 'K' || given_letter == 'k') {
        process.stdout.write("\n Kilometers. "
            + "\n I hope you change your mind soon.\n\n");
    }
    else {
        process.stdout.write("\n I do not understand \""
            + given_letter + "\".\n\n");
    }


    process.stdin.on("data", function (input_from_user) {
        // The statements below will be executed automatically after
        // the user has typed in the value.

        var distance_in_miles = Number(input_from_user.toString());

        var distance_in_kilometers = 1.6093 * distance_in_miles;



        // Loop
        var distance_in_miles = 10;
        var distance_in_kilometers;
        tools.printf("\n\tmiles\tkilometers \n");

        while (distance_in_miles < 120) {
            distance_in_kilometers = 1.6093 * distance_in_miles;
            tools.printf("\n %10.2f %10.2f", distance_in_miles, distance_in_kilometers);
            distance_in_miles = distance_in_miles + 10;
        }

        // process.stdout.write( "\n "  +  distance_in_miles  +  " miles is "
        //    +  distance_in_kilometers  +  " kilometers.\n" ) ;

        // process.stdout.write( util.format( "\n %d miles is %d kilometers.\n",
        //      distance_in_miles,  distance_in_kilometers ) ) ;

        // process.stdout.write( tools.sprintf( "\n %.3f miles is %.3f kilometers.\n",
        //     distance_in_miles,  distance_in_kilometers ) ) ;

        // tools.printf( "\n %.3f miles is %.3f kilometers.\n\n",
        //   distance_in_miles,  distance_in_kilometers ) ;


        process.exit();

    })
});
