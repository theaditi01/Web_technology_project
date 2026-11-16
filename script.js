
const topicList = document.getElementById("topic-list");
const unitTitle = document.getElementById("unit-title");

if (topicList && unitTitle) {

    const urlParams = new URLSearchParams(window.location.search);
    const unitNumber = urlParams.get("unit");

    const selectedUnit = units[unitNumber];

    if (selectedUnit) {

        unitTitle.textContent = selectedUnit.title;

        selectedUnit.topics.forEach(function(topic, index) {

            const card = document.createElement("div");

            card.className = "unit-card";

            card.innerHTML = `
                <span>TOPIC ${index + 1}</span>
                <h2>${topic}</h2>
                <p>Learn the basic concepts of ${topic} with simple explanations and examples.</p>
                <a href="detail.html?unit=${unitNumber}&topic=${index}" class="topic-link">Read Topic →</a>
            `;

            topicList.appendChild(card);

        });

    } else {

        unitTitle.textContent = "Unit Not Found";

        topicList.innerHTML = "<p>Please select a valid study unit.</p>";

    }
}
