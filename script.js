const promise1=delay(getRandomTime());
const promise2=delay(getRandomTime());
const promise3=delay(getRandomTime());
const promise4=delay(getRandomTime());
const promise5=delay(getRandomTime());
window.promises = [promise1,promise2,promise3,promise4,promise5];
     function getRandomTime() {
            return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds in milliseconds
        }

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve("hello"), ms));
        }

     

        Promise.any(promises)
            .then(result => {
                const resultDiv = document.getElementById('output');
                resultDiv.innerText = result;
            })
            .catch(error => {
                console.error("All promises rejected:", error);
            });

// Do not change the code above this
// add your promises to the array `promises`
