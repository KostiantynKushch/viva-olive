<template>
  <footer class="ba-footer">
	  <div class="container">
      <div class="ba-footer__inner mobile">
        <div class="ba-footer__inner-content">
			  <router-link to="/" class="ba-logo__link">
                <img alt="Logo" src="@/assets/logo.png" class="ba-logo__img" />
         	</router-link>
				<div class="ba-footer__inner-content--text">
					<p class="ba-footer__inner-content--text-discription">При використанні матеріалів з сайту посилання на ресурс обов'язкове</p>
					<a href="www.viv-live.com.ua" class="ba-footer__inner-content--text--link">www.viv-live.com.ua</a>
					<p class="ba-footer__inner-content--text-icon">Також нас можна знайти в соціальних мережах, приєднуйтесь до нас:</p>
				</div>
		  </div>
		  <div class="ba-footer__inner-icons">
			  <a href="" class="ba-footer__inner-icons--icon"><img src="../assets/img/Instagram.png" alt=""></a>
			  <a href="" class="ba-footer__inner-icons--icon"><img src="../assets/img/VK.png" alt=""></a>
			  <a href="" class="ba-footer__inner-icons--icon"><img src="../assets/img/Twitter.png" alt=""></a>
			  <a href="" class="ba-footer__inner-icons--icon"><img src="../assets/img/Facebook.png" alt=""></a>
			  <a href="" class="ba-footer__inner-icons--icon"><img src="../assets/img/Odnoklassniki.png" alt=""></a>
		  </div>
      </div>
		<div class="ba-destop-footer__inner destop">
        <div class="ba-destop-footer__inner-content">
			  <p class="ba-destop-footer__inner-content--text-discription">При використанні матеріалів з сайту посилання на ресурс обов'язкове
				  <a href="www.viv-live.com.ua" class="ba-destop-footer__inner-content--text--link" target="_blank">www.viv-live.com.ua</a>
			  </p>
			 <a class="ba-footer-logo__img" href="#">
				 <img alt="Logo" src="../assets/img/footer-logo.png"  />
			 </a>
                
         	
			<div class="ba-destop-footer__inner-icons">
				<p class="ba-destop-footer__inner-icons--text">Також нас можна знайти в соціальних мережах, приєднуйтесь до нас:</p>
				 <div class="ba-destop-footer__inner-wrapper--icons">
			  <a href="#" class="ba-destop-footer__inner-wrapper-icons--icon"><img src="../assets/img/Instagram.png" alt=""></a>
			  <a href="#" class="ba-destop-footer__inner-wrapper-icons--icon"><img src="../assets/img/VK.png" alt=""></a>
			  <a href="#" class="ba-destop-footer__inner-wrapper-icons--icon"><img src="../assets/img/Twitter.png" alt=""></a>
			  <a href="#" class="ba-destop-footer__inner-wrapper-icons--icon"><img src="../assets/img/Facebook.png" alt=""></a>
			  <a href="#" class="ba-destop-footer__inner-wrapper-icons--icon"><img src="../assets/img/Odnoklassniki.png" alt=""></a>
		  </div>
			</div>
		  </div>
      </div>
      <!-- /.ba-footer__inner -->
		</div>
    <!-- /.ba-container -->
  </footer>
  <!-- /.ba-footer -->
</template>

<script>
export default {};
</script>

<style lang="scss">
.container{
	padding: 0 30px;
	@media screen and (min-width:1024px){
		padding: 0 75px;
	}
}
.ba-footer{
	background: #C4CCA8;
	&__inner{
		display:flex;
		flex-direction: column;
		&-icons{
			display: flex;
			justify-content:space-between;
		}
		&-content{
			display: flex;
			flex-direction: row;
			&--text{
				font-family: Montserrat;
				font-style: normal;
				font-weight: normal;
				font-size: 8px;
				line-height: 10px;
				padding: 9px 0px 8px 13px;
				margin: 0;
				color: #2C2C11;
				&-discription{
					margin: 0;
				}
				&--link{
					text-decoration: none;
					cursor: pointer;
					color: #2C2C11;
				}
			}
		}
	}
}
.mobile{
	@media screen and (min-width:639px){
		display:none;
	}
}
.destop{
	@media screen and (min-width:640px){
		padding-top: 50px;
		padding-bottom: 35px;
	}
	@media screen and (min-width:1024px){
		padding-top: 90px;
		padding-bottom: 35px;
	}
	
	@media screen and (max-width:639px){
		display:none;
	}
}
.ba-destop-footer__inner-content{
	display:flex;
	flex-direction: row;
	justify-content: space-between;
}
.ba-destop-footer__inner-content--text-discription{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	@media screen and (min-width:640px){
		padding: 10px 0px;
	}
	@media screen and (min-width:1024px){
		padding: 10px 0px;
		font-size: 14px;
	}
	@media screen and (min-width:1440px){
		max-width: 337px;
		font-size: 20px;
		line-height: 27px;
		
	}
}
.ba-footer-logo__img{
	@media screen and (min-width:640px){
		padding: 0 25px 0 0;
	}
	@media screen and (min-width:1024px){
		padding: 0 75px 0 25px;
	}
	@media screen and (min-width:1440px){
	
		max-width: none;
	}
	& img{
		max-width: 140px;
		@media screen and (min-width:1024px){
		max-width: none;
	}
	}

}
.ba-destop-footer__inner-icons--text{
		font-family: Montserrat;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		padding-left: 10px;
		@media screen and (min-width:1024px){
		padding: 10px 10px;
		font-size: 14px;
	}
		@media screen and (min-width:1440px){
		max-width: 281px;
		font-size: 20px;
		line-height: 27px;
		padding-left: 30px;
	}
}
.ba-destop-footer__inner-wrapper-icons--icon{
	padding-left: 10px;
	@media screen and (min-width:1440px){
		padding-left: 30px;
		
	}
	
}
.ba-destop-footer__inner-content--text--link{
	color: #2C2C11;
	text-decoration: none;
	cursor: pointer;
}
.ba-destop-footer__inner-wrapper-icons--icon:hover,.ba-footer__inner-wrapper-icons--icon:hover{
	opacity: 0.5;
}

</style>