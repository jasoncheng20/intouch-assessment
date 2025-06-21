## Webpage: The Whole Church
A simple, responsive webpage with a header, subheader, and interactive accordion components.
Built with HTML, CSS, and vanilla JavaScript. Also used heroicons (https://heroicons.com/).

## How to Run
To view the application, you must run it using a local web server to avoid CORS errors.

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd intouch-assessment

2. Start a local web server:
   ```bash
   npm install -g http-server
   http-server

3. Verify that the web page loads by navigating to http://localhost:8000 in your browswer.
   Please feel free to reach out to me (jasoncheng20@gmail.com) if any issues arise!

## Notes
Please do not open index.html directly in the browser (via file://), as this will cause CORS errors and prevent main.js from loading.

## Thoughts
This was pretty straigthforward, I just tried to mimic the original design.
I tried to make the Accordion sections like a component, tried to use semantic HTML as much as possible, as well as some accessibility labels (i.e. aria labels).
