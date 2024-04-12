function slugify(title) {
    return title.toLowerCase().split(" ").join("-");
}

console.log("Task 1");
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
console.log("\n");
