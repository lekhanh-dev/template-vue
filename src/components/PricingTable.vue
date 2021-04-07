<template>
  <section class="pricing-table">
    <div class="container">
      <header
        class="pricing-table__header font-weight-light ff-montserrat text-dark"
      >
        <span class="font-weight-bold">PRICING</span> TABLE
      </header>
      <div class="pricing-table__content text-grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        incidunt deserunt repudiandae dolore libero, dolor cumque minima
        reprehenderit recusandae sequi inventore possimus, non saepe? Libero
        nulla consequatur omnis a beatae.Doloribus incidunt deserunt repudiandae
        dolore libero, dolor cumque minima reprehenderit recusandae sequi
        inventore possimus, non saepe? Libero nulla consequatur omnis a beatae.
      </div>
      <div
        class="pricing-table__list-item d-flex flex-align-i-flex-start bg-primary"
      >
        <article
          class="pricing-table__item ff-montserrat bg-white-medium pos-relative"
        >
          <div class="pricing-table__item-title text-grey">BEGINNER</div>
          <div
            class="pricing-table__item-number bg-green d-flex flex-dir-column text-white font-weight-light"
          >
            $10
            <span class="ff-source-san-pro font-weight-medium">Per Month</span>
          </div>
          <ul class="ff-source-san-pro text-grey">
            <li>Photo sharing school</li>
            <li>Drop out ramen hustle</li>
            <li>Coworking viral landing</li>
            <li>Crush revenue traction</li>
            <li>User base minimum viable</li>
            <li>Lorem ipsum dolor</li>
          </ul>
          <div class="pricing-table__item-order">
            <button
              class="btn ff-source-san-pro border-rounded-high d-flex flex-align-i-center text-white margin-0-auto font-weight-bold"
            >
              <div class="pricing-table__icon-triangle d-i-block"></div>
              ORDER
            </button>
          </div>
        </article>

        <article
          class="pricing-table__item ff-montserrat bg-white-medium pos-relative"
        >
          <div class="pricing-table__item-title text-grey">ADVANCED</div>
          <div
            class="pricing-table__item-number bg-caribbean-green d-flex flex-dir-column text-white font-weight-light"
          >
            $45
            <span class="ff-source-san-pro font-weight-medium">Per Month</span>
          </div>
          <ul class="ff-source-san-pro text-grey">
            <li>Photo sharing school</li>
            <li>Drop out ramen hustle</li>
            <li>Coworking viral landing</li>
            <li>Crush revenue traction</li>
            <li>User base minimum viable</li>
            <li>Lorem ipsum dolor</li>
          </ul>
          <div class="pricing-table__item-order">
            <button
              class="btn ff-source-san-pro border-rounded-high d-flex flex-align-i-center text-white margin-0-auto font-weight-bold"
            >
              <div class="pricing-table__icon-triangle d-i-block"></div>
              ORDER
            </button>
          </div>
        </article>

        <article
          class="pricing-table__item ff-montserrat bg-white pos-relative"
        >
          <div
            class="pricing-table__icon-new pos-absolute d-flex flex-align-i-center flex-jus-c-center font-weight-bold text-white border-rounded-circle bg-dark"
          >
            NEW
          </div>
          <div
            class="pricing-table__item-title text-grey d-flex flex-dir-column pos-relative"
          >
            MASTER
            <span class="ff-source-san-pro">The best price/quantity plan</span>
          </div>

          <div
            class="pricing-table__item-number bg-blue d-flex flex-dir-column text-white font-weight-light"
          >
            $249
            <span class="ff-source-san-pro font-weight-medium">Per Month</span>
          </div>
          <ul class="ff-source-san-pro text-grey">
            <li>Photo sharing school</li>
            <li>Drop out ramen hustle</li>
            <li>Coworking viral landing</li>
            <li>Crush revenue traction</li>
            <li>User base minimum viable</li>
            <li>Lorem ipsum dolor</li>
          </ul>
          <div class="pricing-table__item-order">
            <button
              class="btn ff-source-san-pro border-rounded-high d-flex flex-align-i-center text-white margin-0-auto font-weight-bold"
            >
              <div class="pricing-table__icon-triangle d-i-block"></div>
              ORDER
            </button>
          </div>
        </article>

        <article
          class="pricing-table__item ff-montserrat bg-white-medium pos-relative"
        >
          <div class="pricing-table__item-title text-grey">INSANE</div>
          <div
            class="pricing-table__item-number bg-blue-violet d-flex flex-dir-column text-white font-weight-light"
          >
            $1399
            <span class="ff-source-san-pro font-weight-medium">Per Month</span>
          </div>
          <ul class="ff-source-san-pro text-grey">
            <li>Photo sharing school</li>
            <li>Drop out ramen hustle</li>
            <li>Coworking viral landing</li>
            <li>Crush revenue traction</li>
            <li>User base minimum viable</li>
            <li>Lorem ipsum dolor</li>
          </ul>
          <div class="pricing-table__item-order">
            <button
              class="btn ff-source-san-pro border-rounded-high d-flex flex-align-i-center text-white margin-0-auto font-weight-bold"
            >
              <div class="pricing-table__icon-triangle d-i-block"></div>
              ORDER
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "pricing-table",
};
</script>

<style lang="scss" scoped>
@import "../styles/components/PricingTable.scss";
</style>
