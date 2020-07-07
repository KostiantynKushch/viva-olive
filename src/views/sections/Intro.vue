<template>
  <section class="ba-intro">
      <div class="ba-intro__inner">
        <h5 class="ba-intro__inner--title">Шановні гості!</h5>
		  <p class="ba-intro__inner--text">Ми завжди раді бачити Вас з 10:00 до 23:00 </p>
		 	<a class="ba-intro__inner--btn" href="#">Меню</a>
      </div>
      <!-- /.ba-intro__inner -->
    
    <!-- /.ba-container -->
  </section>
  <!-- /.ba-intro -->
</template>

<script>
export default {};
</script>

<style lang='scss'>

.ba-intro{
	display: flex;
	justify-content:center;
	align-items: center;
	background: url('../../assets/img/Intro-bg-mob.png') center center no-repeat;
	background-size: cover;
	height: 100vh;
	
	@media (min-width: 768px) {
		background: url('../../assets/img/Intro-bg.png') center center no-repeat;
		background-size: cover;
		height: 100vh;
	}
	&__inner{

		&--title{
			font-family: Montserrat;
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			line-height: 30px;
			text-align: center;
			@media (min-width: 768px) {
				font-weight: bold;
				font-size: 30px;
			}
			@media (min-width: 1024px) {
				font-size: 40px;
			}
			@media (min-width: 1440px) {
				font-size: 50px;
				line-height: 50px;
			}
		}
	}
}


</style>