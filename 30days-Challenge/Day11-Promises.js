const promises1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let flag = true;
    if (flag) resolve();
    else {
      reject();
    }
  }, 2000);
});
promises1.then(() => {
  console.log("resolved");
});
promises1.catch(() => {
  console.log("rejected");
});

async function fetchData() {
  try {
    const response = await fetch("https://api.github.com/users/bhavyaGP");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();

