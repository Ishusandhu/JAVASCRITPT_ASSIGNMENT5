/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here
    class ContentItem {
        constructor(id, name, description, category) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category) {
            if (this.id === id) {
                if (name !== null) {
                    this.name = name;
                }
                if (description !== null) {
                    this.description = description;
                }
                if (category !== null) {
                    this.category = category;
                }
            }
        }

        toString() {
            return `<div class="content-item-wrapper" id="content-item-${this.id}">
            <h2>${this.name}</h2>
            <p>${this.description}</p>
            <div>${this.category}</div>
          </div>`;
        }

    }
    $("#content-item-list").css({
        'border': '1px solid #ccc',
        'width': '300px',
        'padding': '10px',
        'margin': '10px auto'
    })
    const contentItems = [
        new ContentItem(0, "Audi A4", "A compact luxury sedan from Audi.", "Sedan"),
        new ContentItem(1, "Ford Mustang", "Iconic American muscle car.", "Sports Car"),
        new ContentItem(2, "Tesla Model 3", "An electric car with advanced technology.", "Electric Vehicle"),
        new ContentItem(3, "Toyota Camry", "A popular midsize sedan from Toyota.", "Sedan"),
        new ContentItem(4, "Jeep Wrangler", "An off-road SUV for adventure seekers.", "SUV"),
    ];
    contentItems.forEach((contentItem) => {
        $('#content-item-list').append(contentItem.toString());
    });
});


