/**
 * Converts carbon into number of trees needs to offset that carbon over 40 years.
 * @param totalCarbonKg should be carbon in KG
 */
function convertCarbonToTrees(){
    let userCarbonUsage = generateUserUsage();
    console.log(userCarbonUsage + " kg");
    let numberOfTrees = userCarbonUsage / 1000; // converts to tonnes
    console.log("number of trees " + numberOfTrees);

    return numberOfTrees
}

/**
 * Takes the fields values of hours in cars, and monthly spend from the form and converts into
 * yearly carbon in KG
 * @return {number} the users carbon usage in kg
 */
function generateUserUsage(){
  let userHoursDriven = $("#hoursInCar").val();
  let userEnergySpend = $("#elecInput").val();
  let userKMDrive = convertHoursToYearlyKm(userHoursDriven);
  let userKWHAverage = convertElectricityPrice(userEnergySpend);
  let userCarbonUsage = convertUsageToYearlyCarbon(userKWHAverage, userKMDrive);

  return userCarbonUsage;
}


function provideDataForGraph() {
    // generates NZ averages
    let yearlyKWHAverage = 2398; // average KWH usage in NZ
    let yearlyKMDrive = 5000; // average KM driven in NZ
    let nzAverageCarbon = convertUsageToYearlyCarbon(yearlyKWHAverage, yearlyKMDrive);
    // generates Users values
    let userCarbonUsage = generateUserUsage()
    // carbon goal for 2020 in NZ
    let carbonGoal = 4500
    convertCarbonToTrees()
    return [
        {
            key: "Emissions",
            values: [
                {
                    "label": "New Zealand Emission Target 2020",
                    "value": carbonGoal
                },
                {
                    "label": "New Zealand Average",
                    "value": nzAverageCarbon
                },
                {
                    "label": "Your Impact",
                    "value": userCarbonUsage
                }
            ]
        }
    ]

}

/**
 * Converts yearly energy usage into a carbon amount. 
 * @param kwh total kwh used per year
 * @param km total kms driven per year
 * @returns total number of kg of carbon produced yearly
 */
function convertUsageToYearlyCarbon(kwh, km){
    let electricityConstant = 1.476;
    let petrolConstant = 0.22;
    let carbonFromElectricity = kwh*electricityConstant; // gives carbon in kgs
    let carbonFromPetrol = km*petrolConstant; // gives carbon in kgs
    
    return carbonFromElectricity + carbonFromPetrol;
}

/**
 * Takes weekly hours spent in a car into average year distance driven. 
 * @param weeklyHours hours spent in car. 
 * @returns {number} total distance driven over the year.
 */
function convertHoursToYearlyKm(weeklyHours){
    let averageSpeed = 35; // NZ average for km/h
    let yearlyHours = weeklyHours*52;
    let yearlyDistance = yearlyHours*averageSpeed;

    return yearlyDistance;
}


/**
 * Converts monthly electricty spend into yearly energy usage. 
 * @param monthlySpend dollars spent on electricty each month.
 * @return {number} yearly kw hour usage.
 */
function convertElectricityPrice(monthlySpend) {
    let averagePrice = 0.28; // NZ average price per KwH in dollars
    let monthlyKwH = monthlySpend / averagePrice;
    let yearlyKwH = monthlyKwH * 12;
    
    return yearlyKwH;
}

$(function () {
  $("#hoursInCar").focusout(() => {
    provideDataForGraph()
  })
}) 
