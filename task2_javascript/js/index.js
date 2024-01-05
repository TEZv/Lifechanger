document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 30,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      const swiperWrapper = document.querySelector(".swiper-wrapper");

      posts.slice(0, 10).forEach((post) => {
        const slide = document.createElement("div");
        const postTitle = document.createElement("h3");
        const postText = document.createElement("p");

        slide.classList.add("swiper-slide");
        postTitle.classList.add("post-title");
        postText.classList.add("post-text");

        postTitle.innerHTML = post.title;
        postText.innerHTML = post.body;

        slide.append(postTitle, postText);
        swiperWrapper.appendChild(slide);
      });

      swiper.update();
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const usersList = document.querySelector(".users-card__post");

      users.slice(0, 10).forEach((user) => {
        const userCard = document.createElement("li");
        const userName = document.createElement("span");
        const userPhoto = document.createElement("img");

        userName.textContent = user.name;
        userPhoto.src = `https://via.placeholder.com/220/${user.id}`;
        userCard.classList.add("users-card__item");
        userName.classList.add("users-card__name");
        userPhoto.classList.add("users-card__photo");

        userCard.appendChild(userName);
        userCard.appendChild(userPhoto);
        usersList.appendChild(userCard);

        userCard.addEventListener("click", () => {
          window.location.href = `../pages/user.html?id=${user.id}`;
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
});

const getQueryParam = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};
const userId = getQueryParam("id");
if (userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      const userInfoContainer = document.getElementById("user-info");

      const userName = document.createElement("h2");
      userName.textContent = user.name;

      const userAddress = document.createElement("p");
      userAddress.textContent = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

      const userEmail = document.createElement("p");
      userEmail.textContent = `Email: ${user.email}`;

      const userPhone = document.createElement("p");
      userPhone.textContent = `Phone: ${user.phone}`;

      const userWebsite = document.createElement("p");
      userWebsite.textContent = `Website: ${user.website}`;

      userInfoContainer.appendChild(userName);
      userInfoContainer.appendChild(userAddress);
      userInfoContainer.appendChild(userEmail);
      userInfoContainer.appendChild(userPhone);
      userInfoContainer.appendChild(userWebsite);
    })
    .catch((error) => {
      console.error("Error fetching user details:", error);
    });
}
