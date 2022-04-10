<script>
	import { onMount } from "svelte";
	let dragdrop;
	let base64String;
	let maxAllowedSize = 20 * 1024 * 1024;
	let uploadStatus;
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

			if (image.size <= maxAllowedSize) {
				if (
					type == "image/jpg" ||
					type == "iimage/png" ||
					type == "mage/jpeg"
				) {
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

<div class="fileupload">
	<div
		class={!uploadStatus
			? "dragdrop"
			: uploadStatus === "success"
			? "dragdrop uploadSuccess"
			: "dragdrop uploadFailed"}
	>
		<p style="font-size: 2.5em; color: #D2D2D2">
			Drag Your Image Here, or <span class="selectFile">Browse</span>
		</p>
		<input type="file" id="fileInput" accept="image/*" />

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
