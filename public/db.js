let db;
// create a new db request for a "budget" database.
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
  // create object store called "pending" and set autoIncrement to true
  const db = event.target.result;
  const objectStore = db.createObjectStore("transactions");
};

request.onsuccess = function (event) {
  //db = event.target.result;
  console.log(request.result);
};

request.onerror = function (event) {
  console.log("Woops! " + event.target.errorCode);
};
