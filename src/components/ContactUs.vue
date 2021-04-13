<template>
  <section class="contact-us bg-dark">
    <div class="container">
      <div class="contact-us__list-item d-flex ff-montserrat">
        <article
          class="contact-us__item"
          v-for="(item, index) in dataArray"
          :key="index"
        >
          <div class="contact-us__img d-i-block">
            <img :src="getLinkImage(item.image)" alt="icon-contact" />
          </div>
          <h1 class="font-weight-light text-white">{{ item.title }}</h1>
          <p class="text-grey">{{ item.p1 }}</p>
          <p class="text-grey">{{ item.p2 }}</p>
          <p class="text-grey">{{ item.p3 }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { linkImage } from "../config";
export default {
  name: "contact-us",
  data() {
    return {
      dataArray: [
        {
          image: "adress.png",
          title: "ADDRESS",
          p1: "908 New Hampshire Avenue",
          p2: "Northwest #100, Washington, DC",
          p3: "20037, United States",
        },
        {
          image: "phone.png",
          title: "PHONES",
          p1: "Phone: +1 916-875-2235",
          p2: "NMobile: +1 916-875-2235",
          p3: "Fax: +1 916-875-2235",
        },
        {
          image: "contacts.png",
          title: "CONTACTS",
          p1: "info@domain.ltd",
          p2: "thegem@domain.ltd",
          p3: "www.codex-themes.com",
        },
        {
          image: "working-out.png",
          title: "WORKING HOURS",
          p1: "Monday-Friday: 9:00 – 18:00",
          p2: "Saturday: 11:00 – 17:00",
          p3: "Sunday: Closed",
        },
      ],
    };
  },
  methods: {
    getLinkImage(imageName) {
      const link = linkImage;
      return require(`@/${link}/${imageName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ContactUs.scss";
</style>
