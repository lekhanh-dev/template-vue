<template>
  <section class="open-vacancies">
    <div class="container">
      <div class="open-vacancies__list-item d-flex">
        <div class="open-vacancies__item">
          <header
            class="open-vacancies__title font-weight-bold ff-montserrat text-dark"
          >
            OUR TEAM
          </header>
          <ul class="open-vacancies__our-team">
            <li class="bg-grey-light">
              <div class="open-vacancies__person-box d-flex">
                <div class="open-vacancies__person-box-left">
                  <div class="open-vacancies__avatar border-rounded-circle">
                    <img src="../assets/img/avatar.jpg" alt="avatar" />
                  </div>
                </div>
                <div class="open-vacancies__person-box-right">
                  <div class="open-vacancies__name font-weight-light text-dark">
                    Emerson Anderson
                  </div>
                  <div
                    class="open-vacancies__position font-weight-bold text-grey"
                  >
                    Senior Sales Manager
                  </div>
                  <div
                    class="open-vacancies__phone-number font-weight-bold ff-montserrat text-blue-light"
                  >
                    +1 (987) 1625346
                  </div>
                </div>
              </div>
            </li>
            <li class="bg-grey-light">
              <div class="open-vacancies__person-box d-flex">
                <div class="open-vacancies__person-box-left">
                  <div class="open-vacancies__avatar border-rounded-circle">
                    <img src="../assets/img/avatar.jpg" alt="avatar" />
                  </div>
                </div>
                <div class="open-vacancies__person-box-right">
                  <div class="open-vacancies__name font-weight-light text-dark">
                    Emerson Anderson
                  </div>
                  <div
                    class="open-vacancies__position font-weight-bold text-grey"
                  >
                    Senior Sales Manager
                  </div>
                  <div
                    class="open-vacancies__phone-number font-weight-bold ff-montserrat text-blue-light"
                  >
                    +1 (987) 1625346
                  </div>
                </div>
              </div>
            </li>
            <li class="bg-grey-light">
              <div class="open-vacancies__person-box d-flex">
                <div class="open-vacancies__person-box-left">
                  <div class="open-vacancies__avatar border-rounded-circle">
                    <img src="../assets/img/avatar.jpg" alt="avatar" />
                  </div>
                </div>
                <div class="open-vacancies__person-box-right">
                  <div class="open-vacancies__name font-weight-light text-dark">
                    Emerson Anderson
                  </div>
                  <div
                    class="open-vacancies__position font-weight-bold text-grey"
                  >
                    Senior Sales Manager
                  </div>
                  <div
                    class="open-vacancies__phone-number font-weight-bold ff-montserrat text-blue-light"
                  >
                    +1 (987) 1625346
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="open-vacancies__item">
          <header class="open-vacancies__title font-weight-bold ff-montserrat">
            OPEN VACANCIES
          </header>
          <div class="open-vacancies__wrap-position">
            <ul class="open-vacancies__list-position ff-montserrat text-grey">
              <li
                class="open-vacancies--button-active font-weight-bold d-i-block"
              >
                WEB DESIGNER
              </li>
              <li class="font-weight-light bg-grey-light d-i-block">
                MANAGER
              </li>
              <li class="font-weight-light bg-grey-light d-i-block">
                PROGRAMER
              </li>
              <li class="font-weight-light bg-grey-light d-i-block">
                SUPPORT STAFF
              </li>
            </ul>
            <div class="open-vacancies__position-content d-flex flex-wrap">
              <div class="open-vacancies__position-image pos-relative">
                <img
                  class="pos-absolute"
                  src="../assets/img/position.jpg"
                  alt="position-image"
                />
              </div>
              <div class="open-vacancies__position-detail">
                <h1 class="ff-montserrat font-weight-bold text-dark">
                  WEB DESIGNER
                </h1>
                <p class="text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint
                </p>
              </div>
              <ul
                class="open-vacancies__position-requirements d-flex flex-wrap text-grey"
              >
                <li class="pos-relative">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li class="pos-relative">
                  Adipisicing elit, sed do eiusmod tempor
                </li>
                <li class="pos-relative">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li class="pos-relative">
                  Incididunt ut labore dolore magna aliqua
                </li>
                <li class="pos-relative">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li class="pos-relative">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li class="pos-relative">
                  Enim ad minim veniam, quis nostrud
                </li>
                <li class="pos-relative">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "open-vacancies",
};
</script>

<style lang="scss" scoped>
@import "../styles/components/OpenVacancies.scss";
</style>

