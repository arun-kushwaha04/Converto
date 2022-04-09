<script>
	import { onMount } from "svelte";
	let dragdrop;
	onMount(() => {
		dragdrop = document.querySelector(".dragdrop");
		dragdrop.addEventListener("dragover", (e) => {
			e.preventDefault();
			dragdrop.classList.add("hover");
		});

		dragdrop.addEventListener("dragleave", () => {
			dragdrop.classList.remove("hover");
		});

		dragdrop.addEventListener("drop", (e) => {
			e.preventDefault();
		});

		// const image = e.dataTransfer.files[0];
		// const type = image.type;

		// if (
		// 	type == "image/png" ||
		// 	type == "image/jpg" ||
		// 	type == "image/jpeg"
		// ) {
		// 	return upload(image);
		// } else {
		// 	dragdrop.setAttribute("class", "droparea invalid");
		// 	dragdrop.innerText = "Invalid File Format!";
		// 	return false;
		// }
	});

	const upload = (image) => {
		dragdrop.setAttribute("class", "droparea valid");
		dragdrop.innerText = "Added " + image.name;
	};
</script>

<div class="fileupload">
	<div class="dragdrop">
		<p style="font-size: 2.5em; color: #D2D2D2">
			Drag and Drop the image to convert
		</p>
		<img src="" alt="" />
		<!-- add image -->
	</div>
	<div class="uploadBtns">
		<button id="upload" class="btn"
			><img src="/images/Vector.png" alt="" /></button
		>
		<button id="link" class="btn"
			><img src="/images/link2.png" alt="" /></button
		>
		<button id="camera" class="btn"
			><img src="/images/camera2.png" alt="" /></button
		>
	</div>
	<div class="convertBtn">
		<button id="convert">Convert</button>
	</div>
</div>

<style>
	.fileupload {
		position: absolute;
		right: 4em;
		top: 20%;
		width: 35%;
		min-width: 250px;
		height: 70%;
		background: rgba(191, 184, 250, 0.15);
		border-radius: 10px;
		margin: 4em;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 5%;
	}
	.dragdrop {
		width: 90%;
		height: 60%;
		margin-top: 20px;
		border-radius: 10px;
		border: 2px dashed #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.uploadBtns {
		/* margin: 20px; */
		width: 100%;
	}
	.btn {
		background-color: transparent;
		border: none;
		cursor: pointer;
		margin: 0px 20px 0px 20px;
	}
	.btn:active {
		background-color: transparent;
	}
	.convertBtn {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	#convert {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 90%;
		background-color: #ff3e00;
		border: none;
		color: #fff;
		border-radius: 10px;
		/* padding: 10px 0px; */
		/* padding: 10% 70% 10% 70%; */
		font-size: 2em;
		margin: 10px;
		cursor: pointer;
	}
	.btn img {
		width: 40px;
	}
</style>
