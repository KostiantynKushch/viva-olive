<template>
  <section class="ba-hero">
    <div class="ba-container">
      <div class="ba-hero__inner">
        <h5 class="ba-hero__inner--title">Ресторан "VIVA OLIVE" запрошує всіх бажаючих на обід!</h5>
        <p class="ba-hero__inner--text">
          Наш ресторан може запропонувати Вам послуги найвищого рівня (літня тераса, затишний закритий зал, домашня атмосфера).
          <br />Наші шеф-кухарі задовольнять самі витончені запити гурманів. Всі наші страви припадуть до смаку як дітям, так і доросл им шанувальникам вишуканої кухні.
          <br />Гурмани зможуть по достоїнству оцінити всі наші страви!
          <br />Наш ресторан може запропонувати Вам домашній затишок в поєднанні з високою якістю обслуговування і величезним асортиментом цікавих страв.
        </p>
      </div>
      <!-- /.ba-hero__inner -->
    </div>
    <!-- /.ba-container -->
  </section>
  <!-- /.ba-hero -->
</template>         

<script>
export default {};
</script>

<style lang="scss">
.ba-hero {
  background: url("../../assets/img/side-decoration-mob.png") top right
    no-repeat;
  @media (min-width: 1024px) {
    background: url("../../assets/img/side-decoration.png") top right no-repeat;
    background-size: contain;
  }
  &__inner {
    &--title {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 30px;
      padding: 50px 30px 50px 10px;
      margin: 0;
      @media (min-width: 1024px) {
        padding: 70px 100px 60px 70px;
        font-size: 46px;
        line-height: 52px;
      }
      @media (min-width: 1440px) {
        padding: 110px 530px 110px 155px;
        font-size: 46px;
        line-height: 52px;
      }
    }
    &--text {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 25px;
      padding-left: 10px;
      margin: 0;
      @media (min-width: 1024px) {
        padding: 40px 230px 60px 70px;
        font-size: 18px;
        line-height: 32px;
      }
      @media (min-width: 1440px) {
        padding: 0px 450px 20px 160px;
        font-size: 18px;
        line-height: 32px;
      }
    }
  }
}
</style>