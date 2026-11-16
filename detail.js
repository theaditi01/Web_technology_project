
const params = new URLSearchParams(window.location.search);

const unitNumber = params.get("unit");
const topicIndex = Number(params.get("topic"));

const selectedUnit = units[unitNumber];

const title = document.getElementById("detail-title");
const content = document.getElementById("detail-content");
const backLink = document.getElementById("back-link");

if (selectedUnit && selectedUnit.topics[topicIndex] !== undefined) {

    const topicName = selectedUnit.topics[topicIndex];

    title.textContent = topicName;

    content.textContent =
        topicName + " is an important concept in Web Technology. " +
        "It helps us understand how websites and web applications work. " +
        "In this topic, we will learn its basic concepts, features, " +
        "working and importance in web development.";

    backLink.href = "topic.html?unit=" + unitNumber;

} else {

    title.textContent = "Topic Not Found";
    content.textContent = "Please select a valid topic.";

}
