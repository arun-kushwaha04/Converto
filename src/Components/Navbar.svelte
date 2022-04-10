<header>
	<div class="img-div">
		<img src="/images/logo.png" alt="#" /><a href="/" id="logo"
			>&nbsp;CONVERTO</a
		>
	</div>
	<div class="link-div">
		<div class="link hover-underline-animation">How to Use</div>
		<span class="tooltiptext" id="tip1"
			><ul>
				<li>Just Drag and Drop your image into the dotted area</li>
				<li>
					Click the convert button to extract the text from your
					image.
				</li>
				<li>
					Next click on the copy button at the bottom to copy the
					extracted text and use it as required. Happy CONVERTING !!
				</li>
			</ul></span
		>
		<div class="link hover-underline-animation">
			<a href="https://github.com/anshrusia200/Converto">Contribute</a>
		</div>
		<span class="tooltiptext" id="tip2"
			>Click Contribute to go to our repository</span
		>
		<div class="link hover-underline-animation">About Us</div>
		<span class="tooltiptext" id="tip3"
			>This Project is Developed by
			<ul>
				<li>Arun Singh Kushwaha(2020IMT-016)</li>
				<li>Ansh Rusia(2020IMT-012)</li>
				<li>Modh Chirag Kumar Brijkishor(2020IMT-058)</li>
				<li>Harsh Gupta(2020IMT-035)</li>
			</ul>
		</span>
	</div>
</header>

<style>
	header {
		padding: 1rem 4rem;
		height: 10vh;
		background-color: transparent;
		display: flex;
		justify-content: space-between;
	}
	.img-div {
		height: 100%;
		width: 20%;
		font-size: 30px;
		display: flex;
		justify-content: center;
		font-family: Roboto, Arial, sans-serif;
		align-items: center;
	}

	.img-div img {
		width: auto;
		height: 100%;
	}
	#logo {
		background: -webkit-linear-gradient(#eee, #333);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.link-div {
		width: 30%;
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

	.tooltiptext {
		display: none;
		color: #fff;
		background: #04bccd;
		position: absolute;
		width: 20em;
		top: 7rem;
		font-size: 15px;
		text-align: center;
		padding: 5px 0;
		border-radius: 6px;
		padding: 1rem;
		text-align: left;
	}
	#tip2 {
		right: 8rem;
	}
	#tip3 {
		right: 5rem;
	}
	.link:hover + .tooltiptext {
		z-index: 2;
		display: block;
	}
	ul {
		list-style-position: inside;
	}
	a {
		text-decoration: none;
		color: #fff;
	}
	@media only screen and (max-width: 768px) {
		.link {
			font-size: 2rem;
		}
		header {
			padding: 1rem;
		}
		.img-div {
			width: 30%;
		}
		.link-div {
			width: 60%;
		}
	}
</style>
