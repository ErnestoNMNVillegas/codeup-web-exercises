(function(){
    "use strict";

    console.log('test')

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODOne:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let newPlanetsString = planetsArray.join('<br>');
    console.log(newPlanetsString);
    //Would be useful to use in html.

    // planetsString = planetsArray.join('<ul></ul><li></li>')
    // console.log(planetsString);
    //Note:  This did not work.

})();
