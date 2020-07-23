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
			
			
			&__inner{
				
				&-title{
					display: block;
					margin: 0 auto;
					text-align: center;
					position: relative;
					color: #fff;
					font-size: 18px;
					padding: 50px 0;
					@media (min-width: 640px) {
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
						background: url("../../assets/img/section_bg_title_left.png")  center no-repeat ;
						content: "";
     				   position: absolute;
      				top: 10%;
      				left: 0;
      				right: 0;
      				height: 100px;
      				background-color: transparent;
      				background-size: contain;
      				z-index: -1;
						@media (min-width: 640px) {
						top:30%;
						height: 157px;
						}
						
					}
}
			}

}



</style>