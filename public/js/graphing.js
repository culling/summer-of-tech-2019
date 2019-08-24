/**
 * Converts carbon into number of trees needs to offset that carbon over 40 years.
 * @param totalCarbonKg should be carbon in KG
 */
function convertCarbonToTrees(totalCarbonKg){
    let numberOfTrees = totalCarbonKg / 1000 // converts to tonnes
    return numberOfTrees
}

/**
 * Converts yearly energy usage into a carbon amount. 
 * @param kwh total kwh used per year
 * @param km total kms driven per year
 * @returns total number of kg of carbon produced yearly
 */
function covertUsageToYearlyCarbon(kwh, km){
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
    console.log(convertCarbonToTrees(10000));
}) 
