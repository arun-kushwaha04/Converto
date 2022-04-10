var ghpages = require("gh-pages");

ghpages.publish(
    "public", // path to public directory
    {
        branch: "gh-pages",
        repo: "https://github.com/anshrusia200/Converto.git", // Update to point to your repository
        user: {
            name: "Arun Singh Kushwaha", // update to use your name
            email: "arunkushwaha89765@gmail.com", // Update to use your email
        },
    },
    () => {
        console.log("Deploy Complete!");
    }
);