/*
<div class="hero">
            <img class="arrow-left" src="assets/chevron-left.svg" alt="arrow left"> 
            <div class="image-wrapper">
                <img src="assets/heroImage.jpg" class="hero-image" alt="food">
                <div class="text-box">
                    <div>Savor the Art of </div>
                    <div>MODERN DINING</div>
                    <div>Experience the vibrant flavors of India with a contemporary twist. From bold spices to fresh, locally-sourced ingredients, our dishes honor tradition while embracing modern culinary creativity.</div>
                </div>
            </div>
            <img class="arrow-right" src="assets/chevron-right.svg" alt="arrow right">
        </div>
        <div class="book-table-container">
            <div class="book-table-button">BOOK A TABLE</div>
        </div>
*/
import heroImageSrc from "./assets/heroImage.jpg";
import arrowLeftSrc from "./assets/chevron-left.svg";
import arrowRightSrc from "./assets/chevron-right.svg";


export function homePage(document) {

    const createHero = () => {
        const heroDiv = document.createElement("div");
        heroDiv.classList.add("hero");
        
        const arrowLeft = document.createElement("img");
        arrowLeft.classList.add("arrow-left");
        arrowLeft.src = arrowLeftSrc;
        arrowLeft.alt = "arrow left";

        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("image-wrapper");

        const heroImg = document.createElement("img");
        heroImg.classList.add("hero-image");
        heroImg.src = heroImageSrc;
        heroImg.alt = "food";

        const textBox = document.createElement("div");
        textBox.classList.add("text-box");

        const line1 = document.createElement("div");
        line1.textContent = "Savor the Art of";

        const line2 = document.createElement("div");
        line2.textContent = "MODERN DINING";

        const line3 = document.createElement("div");
        line3.textContent = "Experience the vibrant flavors of India with a contemporary twist. From bold spices to fresh, locally-sourced ingredients, our dishes honor tradition while embracing modern culinary creativity.";

        textBox.append(line1, line2, line3);
        imgWrapper.append(heroImg, textBox);

        const arrowRight = document.createElement("img");
        arrowRight.classList.add("arrow-right");
        arrowRight.src = arrowRightSrc;
        arrowRight.alt = "arrow right";

        heroDiv.append(arrowLeft, imgWrapper, arrowRight);
        
        const content = document.querySelector("div.content");
        content.appendChild(heroDiv);
    }

    const createBookingSection = () => {
        const bookingsDiv = document.createElement("div");
        bookingsDiv.classList.add("book-table-container");

        const bookingsButton = document.createElement("div");
        bookingsButton.classList.add("book-table-button");
        bookingsButton.textContent = "BOOK A TABLE";

        bookingsDiv.appendChild(bookingsButton);

        const content = document.querySelector("div.content");
        content.appendChild(bookingsDiv);

    }

    const createHomePage = () => {
        createHero();
        createBookingSection();
    }

    return {createHomePage}

}