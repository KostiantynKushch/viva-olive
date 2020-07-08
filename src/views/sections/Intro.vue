<template>
  <section class="ba-intro">
      <div class="ba-intro__inner">
        <h5 class="ba-intro__inner--title">Шановні гості!</h5>
		  <p class="ba-intro__inner--text">Ми завжди раді бачити Вас<br><strong>з 10:00 до 23:00</strong> </p>
		 	<div class="ba-intro__inner--btn"><a class="ba-intro__inner--btn-link" href="#">Меню</a></div>
			
      </div>
      <!-- /.ba-intro__inner -->
  		 <div class="ba-intro__scroll">
			<a class="ba-intro__scroll--text" href="">Scroll</a>
			<a href="" class="ba-intro__scroll--link"><img class="ba-intro__scroll--link-img" src="../../assets/img/Scroll.png" alt="Scroll"></a>
	</div>
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
	flex-direction: column;
	background: url('../../assets/img/Intro-bg-mob.jpg') center center no-repeat;
	background-size: cover;
	height: 100vh;
	position: relative;
	
	@media (min-width: 768px) {
		background: url('../../assets/img/Intro-bg.png') center center no-repeat;
		background-size: cover;
		height: 100vh;
		
	}
	&__inner{
			@media (min-width: 768px) {
				padding-top: 50px;
			}
			@media (min-width: 1440px) {
				padding-top: 150px;
			}
		&--title{
			font-family: Montserrat;
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			line-height: 30px;
			text-align: center;
			margin: 0;
			@media (min-width: 768px) {
				font-weight: bold;
				font-size: 27px;
			
			}
			@media (min-width: 1024px) {
				font-size: 35px;
			}
			@media (min-width: 1440px) {
				font-size: 50px;
				line-height: 50px;
			}
		}
		&--text{
			font-family: Montserrat;
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 17px;
			text-align: center;
			margin: 25px 0;
			@media (min-width: 768px) {
				margin: 30px 0;
				font-size: 17px;
				line-height: 25px;
			}
			@media (min-width: 1024px) {
				margin: 35px 0;
				font-size: 20px;
				line-height: 25px;
			}
			@media (min-width: 1440px) {
				margin: 30px 0;
				font-size: 22px;
				line-height: 30px;
			}
		}
		&--btn{
			display: flex;
			justify-content: center;
			@media (min-width: 1440px) {
				padding: 30px;
			}
			&-link{
				padding: 10px 27px;
				border: 2px solid #F8F8F8;
				border-radius: 5px;
				text-decoration: none;
				color: #fff;
				text-transform: uppercase;
				&:hover{
				background: #fff;
				color:#C4CCA8;
				transition: 0.7s;
			}
			}
		}
	}
	&__scroll{
		display: block;
		margin: 0 auto;
		position: absolute;
		bottom: 0;
		&:hover{
			transform:scale(1.1);
		}
		&--text{
			font-family: Montserrat;
			font-style: normal;
			font-weight: normal;
			font-size: 18px;
			line-height: 32px;
			text-decoration: none;
			color: #2C2C11;
			opacity: 0.7;
			@media (min-width:768px) {
				font-size: 22px;
			}
		}
		&--link{

			&-img{
				display: block;
				margin: 0 auto;
				padding: 20px 0;
				width:20px;
			}
		}
	}
}


</style>