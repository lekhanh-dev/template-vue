<template>
  <section class="contact-us bg-dark">
    <div class="container">
      <div class="contact-us__list-item d-flex ff-montserrat">
        <article class="contact-us__item">
          <div class="contact-us__img d-i-block">
            <img src="../assets/img/adress.png" alt="icon-contact" />
          </div>
          <h1 class="font-weight-light text-white">ADDRESS</h1>
          <p class="text-grey">908 New Hampshire Avenue</p>
          <p class="text-grey">Northwest #100, Washington, DC</p>
          <p class="text-grey">20037, United States</p>
        </article>
        <article class="contact-us__item">
          <div class="contact-us__img d-i-block">
            <img src="../assets/img/phone.png" alt="icon-contact" />
          </div>
          <h1 class="font-weight-light text-white">PHONES</h1>
          <p class="text-grey">Phone: +1 916-875-2235</p>
          <p class="text-grey">NMobile: +1 916-875-2235</p>
          <p class="text-grey">Fax: +1 916-875-2235</p>
        </article>
        <article class="contact-us__item">
          <div class="contact-us__img d-i-block">
            <img src="../assets/img/contacts.png" alt="icon-contact" />
          </div>
          <h1 class="font-weight-light text-white">CONTACTS</h1>
          <p class="text-grey">info@domain.ltd</p>
          <p class="text-grey">thegem@domain.ltd</p>
          <p class="text-grey">www.codex-themes.com</p>
        </article>
        <article class="contact-us__item">
          <div class="contact-us__img d-i-block">
            <img src="../assets/img/working-out.png" alt="icon-contact" />
          </div>

          <h1 class="font-weight-light text-white">WORKING HOURS</h1>
          <p class="text-grey">Monday-Friday: 9:00 – 18:00</p>
          <p class="text-grey">Saturday: 11:00 – 17:00</p>
          <p class="text-grey">Sunday: Closed</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact-us",
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ContactUs.scss";
</style>
