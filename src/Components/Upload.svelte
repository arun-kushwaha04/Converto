<script>
	import { onMount } from "svelte";
	let dragdrop;
	let base64String;
	let maxAllowedSize = 20 * 1024 * 1024;
	let uploadStatus;
	var imageTypes = ["image/png", "image/bmp", "image/jpeg"];
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

			const image = e.dataTransfer.files[0];
			const type = image.type;
			console.log(type);

			if (image.size <= maxAllowedSize) {
				if (imageTypes.includes(type)) {
					upload(image);
				} else {
					console.log("Invalid file format");
					// dragdrop.classList.add("uploadFailed");
					uploadStatus = "failed";
					dragdrop.children[0].innerText = "Invalid File Format!";
				}
			} else {
				console.log("Max Size Limit exceeded");
				//showToast("Max file size is 100MB");
			}
		});

		let browseBtn = document.querySelector(".selectFile");
		let fileInput = document.querySelector("#fileInput");

		browseBtn.addEventListener("click", () => {
			console.log("Browse Button Clicked");
			fileInput.click();
		});

		fileInput.addEventListener("change", (e) => {
			e.preventDefault();

			const image = fileInput.files[0];
			console.log(image);

			if (image.size <= maxAllowedSize) {
				upload(image);
			} else {
				console.log(maxAllowedSize - image.size);
				console.log("Max Size Limit exceeded");
				//showToast("Max file size is 100MB");
			}
		});
	});

	const upload = (image) => {
		uploadStatus = "success";
		dragdrop.children[0].innerText = "Selected " + image.name;
		var reader = new FileReader();
		console.log("next");

		reader.onload = function () {
			base64String = reader.result
				.replace("data:", "")
				.replace(/^.+,/, "");

			// alert(imageBase64Stringsep);
			console.log(base64String);
		};
		reader.readAsDataURL(image);
	};
</script>

<div class="div-wrapper">
	<div class="about-text">
		<h1 class="bantext">ONLINE OCR</h1>
		<h2 class="bantext2">Extract text from images easily and accurately</h2>
	</div>
	<div class="fileupload-wrapper">
		<div class="fileupload">
			<div
				class={!uploadStatus
					? "dragdrop"
					: uploadStatus === "success"
					? "dragdrop uploadSuccess"
					: "dragdrop uploadFailed"}
			>
				<p style="font-size: 2.5em; color: #D2D2D2">
					Drag Your Image Here, or <span class="selectFile"
						>Browse</span
					>
				</p>
				<input type="file" id="fileInput" accept="image/*" />

				<img src="" alt="" />
				<!-- add image -->
			</div>
			<!-- <div class="uploadBtns">
				<button id="upload" class="btn"
					><img src="/images/Vector.png" alt="" /></button
				>
				<button id="link" class="btn"
					><img src="/images/link2.png" alt="" /></button
				>
				<button id="camera" class="btn"
					><img src="/images/camera2.png" alt="" /></button
				>
			</div> -->
			<div
				class={uploadStatus === "success" ? "convertBtn" : "nodisplay"}
			>
				<button id="convert">Convert</button>
			</div>
		</div>
	</div>
</div>

<style>
	.div-wrapper {
		display: flex;
		height: 90vh;
		align-items: center;
	}

	.fileupload-wrapper {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.fileupload {
		width: 80%;
		height: auto;
		background: rgba(191, 184, 250, 0.15);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 5%;
		padding: 2rem 0;
	}

	.about-text {
		width: 50%;
		padding: 1rem;
		color: white;
		display: grid;
		align-items: center;
		justify-content: center;
	}

	.about-text h1 {
		font-size: 3.5rem;
	}

	.about-text h2 {
		font-size: 2rem;
		font-weight: 500;
		font-style: italic;
	}
	.dragdrop {
		width: 90%;
		height: 50vh;
		border-radius: 1rem;
		border: 2px dashed #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.uploadSuccess {
		border: 2px dashed green !important;
	}

	.uploadSuccess p {
		color: green !important;
	}

	.uploadFailed {
		border: 2px dashed red !important;
	}

	.uploadFailed p {
		color: red !important;
	}

	.nodisplay {
		display: none;
	}

	#fileInput {
		display: none;
	}

	.selectFile {
		color: steelblue;
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
		margin-top: 2rem;
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
		font-size: 2em;
		margin: 10px;
		cursor: pointer;
	}
	.btn img {
		width: 40px;
	}
</style>
