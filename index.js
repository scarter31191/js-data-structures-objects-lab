const driver = {}; //object

function updateDriverWithKeyAndValue(driver, key, value) {
//it does not modify the original driver, but rather returns a clone with the new data
    return Object.assign({}, driver, { [key]: value }); //returns a driver with the original key value pairs and the new key value pair
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    //updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver); //does not modify the original driver (it is non-destructive)

    delete newDriver[key]; //deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];

    return driver
}