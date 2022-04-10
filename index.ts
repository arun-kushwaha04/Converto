import type { RequestHandler } from "@sveltejs/kit";

// `dotenv` loads the environment variables
import "dotenv/config";

export const get: RequestHandler = async () => {
	// it's also safe to use the Vite import here
	// const secret = import.meta.env.VITE_UNSECURE_SECRET

	// we can access the value using `process.env`
	const secret = process.env.SECURE_SECRET;

	if (secret === "secret") {
		return {
			status: 200,
			body: { message: "Success! 🥳" },
		};
	}

	throw new Error(`You're a failure. 💩`);
};
