<header>
	<div class="img-div">
		<img
			src="https://upload.wikimedia.org/wikipedia/en/3/3b/Canva_Logo.png" alt=""
		/>
	</div>
	<div class="link-div">
		<div class="link hover-underline-animation">How to Use</div>
		<div class="link hover-underline-animation">Contribute</div>
		<div class="link hover-underline-animation">About Us</div>
	</div>
</header>

<style>
	header {
		padding: 1rem 4rem;
		height: 10vh;
		background-color: transparent;
		display: flex;
  justify-content:space-between;
	}
	.img-div {
		height: 100%;
  width:20%;
	}

	.img-div img {
		width: auto;
		height: 100%;
	}
	.link-div {
		width:30%;
		/* border: 2px solid red; */
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.link {
		text-decoration: none;
		color: #fff;
		font-size: 1.5rem;
		font-weight: 600;
		cursor: pointer;
		text-align: center;
	}
	.hover-underline-animation {
		display: inline-block;
		position: relative;
	}

	.hover-underline-animation:after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: -0.4rem;
		left: 0;
		background-color: #ff3e00;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.hover-underline-animation:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	@media only screen and (max-width: 768px) {
		.link {
			font-size: 2rem;
		}
  header{
   padding:1rem;
  }
  .img-div{
   width:30%;
  }
		.link-div {
			width:60%;
		}
	}
</style>
