window.promises = [];
     function getRandomTime() {
            return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds in milliseconds
        }

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        const promises = Array.from({ length: 5 }, () => {
            return delay(getRandomTime())
                .then(() => {
                    return `Promise resolved after ${ms / 1000} seconds`;
                });
        });

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
