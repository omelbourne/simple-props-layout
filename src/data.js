import segway from "./images/segway.jpg"
import photography from "./images/photography.png"
import escape from "./images/escape.png"
import biking from "./images/biking.png"

export default [
    {
        id: 1,
        title: "Group Segway Adventure",
        description: "",
        price: 30,
        coverImg: segway,
        stats: {
            rating: 4.9,
            reviewCount: 6
        },
        location: "Bristol",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Food Photography Course",
        description: "",
        price: 115,
        coverImg: photography,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 5,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "",
        price: 50,
        coverImg: biking,
        stats: {
            rating: 4.7,
            reviewCount: 2
        },
        location: "Bristol",
        openSpots: 10,
    },
    {
        id: 4,
        title: "Escape Room - Exit the Room in Time",
        description: "",
        price: 20,
        coverImg: escape,
        stats: {
            rating: 4.8,
            reviewCount: 24
        },
        location: "Online",
        openSpots: 8,
    }
]