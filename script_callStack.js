let counter = 0;
function incrementsCounter() {
    counter++;
    incrementsCounter();
}
try {
    incrementsCounter();
} catch (err) {

    console.log("The value of counter " + counter);
    console.log(err);
}
