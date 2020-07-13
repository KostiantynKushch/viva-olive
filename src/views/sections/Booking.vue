<template>
  <section class="ba-booking">
    <div class="ba-container">
      <div class="ba-booking__inner">
        <h5 class="ba-booking__inner-title">Забронювати столик</h5>
		  <img class="ba-booking__inner-img" src="../../assets/img/booking-section-img.png" alt="">
      </div>
      <!-- /.ba-booking__inner -->
    </div>
    <!-- /.ba-container -->
  </section>
  <!-- /.ba-booking -->
</template>

<script>
export default {};
</script>

<style lang="scss">
.ba-booking{
			@media (max-width:767px) {
				display:none;
			}
			
			&__inner{
				
				&-title{
					display: block;
					margin: 0 auto;
					text-align: center;
					position: relative;
					
					color: #fff;
					font-size: 30px;
					@media (min-width: 768px) {
						font-size: 25px;
						padding: 150px 0;
					}
					@media (min-width: 1024px) {
						font-size: 25px;
						padding: 150px 0;
					}
					@media (min-width: 1440px) {
						font-size: 30px;
						padding: 150px 0;
					}
					
					&:before{
						content: '';
						position: absolute;
						background-image: url("../../assets/img/section_bg_title_left.png") ;
						background-size: cover;
						z-index:-1;
						@media (min-width: 768px) {
						top:30%;
						left:10%;
						width: 520px;
						height: 157px;
						}
						@media (min-width: 900px) {
						left:25%;
						}
						@media (min-width: 1024px) {
						left:25%;
						}
						@media (min-width: 1440px) {
						left:30%;
						}
					}
}
			}

}



</style>