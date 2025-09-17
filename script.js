function showSurprise() {
      document.getElementById('surprise').style.display = 'block';
    }

    // Falling hearts
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (3 + Math.random() * 2) + "s"; 
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
    setInterval(createHeart, 500);

    // Slideshow
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slideshow img");

    function showSlides() {
      slides.forEach((img) => img.classList.remove("active"));
      slides[slideIndex].classList.add("active");
      slideIndex = (slideIndex + 1) % slides.length;
    }
    setInterval(showSlides, 3000); // change every 3 seconds