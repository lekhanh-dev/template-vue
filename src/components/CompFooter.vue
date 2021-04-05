<template>
  <footer class="footer">
    <div class="footer-widgets bg-dark">
      <div class="container">
        <div class="footer__list-item d-flex flex-wrap">
          <div class="footer__item">
            <div class="footer__wrap-logo d-flex">
              <div class="footer__logo">
                <img src="../assets/img/logo-outline.png" alt="logo" />
              </div>
              <div class="footer__logo-text ff-montserrat text-white">
                <p class="font-weight-light">THE</p>
                <p class="font-weight-bold">GEM</p>
              </div>
            </div>
            <div class="footer__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              corrupti cumque totam eius veritatis saepe laudantium voluptatibus
              optio
            </div>
          </div>
          <div class="footer__item">
            <div
              class="footer__title d-i-block font-weight-bold text-white ff-montserrat pos-relative"
            >
              USEFUL LINK
            </div>
            <ul class="footer__list-link text-grey">
              <li class="pos-relative">General Information For Users</li>
              <li class="pos-relative">Interactive Fairy Tales</li>
              <li class="pos-relative">Official Storybook Maker Website</li>
              <li class="pos-relative">Everyday Mathematics Links</li>
              <li class="pos-relative">Basic Knowledge and Experience</li>
            </ul>
          </div>
          <div class="footer__item">
            <div
              class="footer__title d-i-block font-weight-bold text-white ff-montserrat pos-relative"
            >
              NEWSLETTER
            </div>
            <div class="footer__newsletter text-grey">
              Subscribe to our MailChimp newsletter and stay up to date with all
              events coming straight in your mailbox:
            </div>
            <div class="footer__text-box pos-relative">
              <input
                class="text-grey border-rounded-low bg-black"
                type="text"
                name="address"
                placeholder="Your email address"
              />
              <button
                class="btn pos-absolute bg-grey-light d-flex flex-align-i-center flex-jus-c-center"
              >
                <i class="fas fa-chevron-right" aria-hidden="true"></i>
              </button>
              <p class="text-grey">Personal data will be encrypted</p>
            </div>
          </div>
          <div class="footer__item">
            <div
              class="footer__title d-i-block font-weight-bold text-white ff-montserrat pos-relative"
            >
              RECENT POSTS
            </div>
            <div class="footer__list-post">
              <div class="footer__post d-flex flex-align-i-center">
                <div class="footer__image border-rounded-circle pos-relative">
                  <img
                    class="pos-absolute"
                    src="../assets/img/picture1.jpg"
                    alt="image"
                  />
                </div>
                <div class="footer__post-content text-grey">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorum corrupti cumque totam eius veritatis saepe
                    laudantium voluptatibus optio mollitia ipsam
                  </p>
                  <div class="d-flex flex-jus-c-space-between">
                    <span class="footer__date">27 Dec 2015</span>
                    <span class="footer__like d-flex flex-align-item-baseline"
                      ><img
                        src="../assets/img/comment-none.png"
                        alt="comment"
                      />
                      0</span
                    >
                  </div>
                </div>
              </div>
              <div class="footer__post d-flex flex-align-i-center">
                <div class="footer__image border-rounded-circle pos-relative">
                  <img
                    class="pos-absolute"
                    src="../assets/img/picture1.jpg"
                    alt="image"
                  />
                </div>
                <div class="footer__post-content text-grey">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorum corrupti cumque totam eius veritatis saepe
                    laudantium voluptatibus optio mollitia ipsam
                  </p>
                  <div class="d-flex flex-jus-c-space-between">
                    <span class="footer__date">27 Dec 2015</span>
                    <span class="footer__like d-flex flex-align-item-baseline"
                      ><img src="../assets/img/comment.png" alt="comment" />
                      0</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-nav text-grey bg-black">
      <div
        class="container d-flex flex-align-i-center flex-dir-column-reverse flex-dir-md-row"
      >
        <div class="footer__nav-item">2019 © Copyrights CodexThemes</div>
        <div class="footer__nav-item">
          <ul class="footer__contact">
            <li class="d-i-block">Support</li>
            <li class="d-i-block">Contact Us</li>
            <li class="d-i-block">Disclaimer</li>
            <li class="d-i-block">Add More</li>
          </ul>
        </div>
        <div class="footer__nav-item">
          <ul class="footer__list-social-network d-flex flex-jus-c-center">
            <li class="d-flex flex-align-i-center">
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li class="d-flex flex-align-i-center">
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
            <li class="d-flex flex-align-i-center">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li class="d-flex flex-align-i-center">
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li class="d-flex flex-align-i-center">
              <a href="#"><i class="fab fa-google-plus-g"></i></a>
            </li>
            <li class="d-flex flex-align-i-center">
              <a href="#"><i class="fab fa-youtube"></i></a>
            </li>
            <li class="d-flex flex-align-i-center">
              <a href="#"><i class="fab fa-pinterest-p"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div></footer
></template>

<script>
import "../styles/components/CompFooter.scss";
export default {
  name: "comp-footer",
};
</script>
