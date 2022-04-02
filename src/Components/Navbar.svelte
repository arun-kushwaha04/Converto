<header>
	<div class="img-div" />
	<div class="link-div">
		<div class="link hover-underline-animation">How to Use</div>
		<div class="link hover-underline-animation">Contribute</div>
		<div class="link hover-underline-animation">About Us</div>
	</div>
</header>

<style>
	header {
		padding: 1rem;
		height: 10vh;
		background-color: transparent;
		display: flex;
	}
	.img-div {
		flex: 1;
		border: 1px solid green;
	}
	.link-div {
		flex: 2;
		/* border: 2px solid red; */
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
	.link {
		text-decoration: none;
		color: #fff;
		font-size: 2rem;
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
</style>
