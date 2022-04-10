<script>
	import { onMount } from "svelte";
	let dragdrop;
	let base64String;
	let isImageConverted = false;
	let maxAllowedSize = 20 * 1024 * 1024;
	let uploadStatus;
	let imageTypes = ["image/png", "image/bmp", "image/jpeg"];

	let ENDPOINT_URL = `https://vision.googleapis.com/v1/images:annotate`;

	let convertedText = "";

	const getResultFromModel = async () => {
		let jsonBody = {
			requests: [
				{
					image: {
						content: base64String,
					},
					features: [
						{
							type: "DOCUMENT_TEXT_DETECTION",
						},
					],
				},
			],
		};
		let API_KEY = "AIzaSyDP82kHStfg7L57MnTBZscQmkK63ZKvgT8";
		let NEW_ENDPOINT_URL = ENDPOINT_URL + `?key=${API_KEY}`;
		console.log(NEW_ENDPOINT_URL);
		jsonBody = JSON.stringify(jsonBody);
		// const res = await fetch(NEW_ENDPOINT_URL, {
		// 	method: "POST",
		// 	body: jsonBody,
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// });
		// const data = await res.json();
		// convertedText = data.responses[0].fullTextAnnotation.text;
		document.querySelector("#convert").innerHTML = "Converting ...";
		console.log(convertedText);
		document.querySelector("#convert").innerHTML = "Convert";
		isImageConverted = true;
	};

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

	const copyConvertedText = () => {
		navigator.clipboard.writeText(convertedText);
		document.querySelector("#copy").innerText = "Text Copied ✔️";
		setTimeout(() => {
			document.querySelector("#copy").innerText = "Copy";
		}, 2000);
	};

	const reset = () => {
		convertedText = undefined;
		uploadStatus = undefined;
		isImageConverted = false;
		location.reload();
	};

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
		};
		reader.readAsDataURL(image);
	};
</script>

<div class="div-wrapper">
	<div class="about-text">
		<h1 class="bantext">ONLINE OCR</h1>
		<h2 class="bantext2">Extract text from images easily and accurately</h2>
	</div>
	{#if isImageConverted === true}
		<div class="convert-text-wrapper">
			<div class="converted-text-div">
				<h1 class="converted-message">
					Hurray!! Your Image Is Been Processed
				</h1>
				<div class="converted-text-selection">
					<p class="converted-text">{convertedText}</p>
				</div>
				<div class="coverted-options">
					<button
						class="button-converted"
						id="copy"
						on:click={copyConvertedText}>Copy To Clipboard</button
					>
					<button
						class="button-converted"
						id="reload"
						on:click={reset}>Convert Again</button
					>
				</div>
			</div>
		</div>
	{:else}
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
					class={uploadStatus === "success"
						? "convertBtn"
						: "nodisplay"}
				>
					<button id="convert" on:click={getResultFromModel}
						>Convert</button
					>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.div-wrapper {
		display: flex;
		height: 90vh;
		align-items: center;
	}

	.fileupload-wrapper,
	.convert-text-wrapper {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.fileupload,
	.converted-text-div {
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
	.dragdrop,
	.converted-text-selection {
		width: 90%;
		height: 50vh;
		border-radius: 1rem;
		border: 2px dashed #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.converted-text-selection {
		cursor: default;
		border: none;
		overflow-y: scroll;
		background-color: #221d4954;
		border: solid 1px #fff;
	}

	.converted-text-selection p {
		color: #fff;
		font-size: 1.7rem;
		font-weight: 400;
		text-align: left;
		height: 100%;
		width: 100%;
		padding: 2rem;
	}

	.converted-message {
		color: #fff;
		font-size: 1.5rem;
		font-weight: 400;
		word-spacing: 0.25rem;
		letter-spacing: 0.05rem;
		padding: 1rem 0;
	}

	.converted-text-selection::-webkit-scrollbar {
		display: none;
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

	.convertBtn {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: 2rem;
	}
	#convert,
	.button-converted {
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

	.coverted-options {
		display: flex;
		gap: 1rem;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 70%;
		padding: 1rem 0;
	}

	.coverted-options button {
		font-size: 1.4rem;
		width: 50% !important;
	}
</style>
