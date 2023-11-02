
# AI Image Generator

This is a simple React application that uses the OpenAI GPT-3 API to generate images based on user-provided prompts. Users can describe what they want to generate, and the application will fetch an image from the OpenAI API based on that description.

## Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

Before you begin, make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository_url>
   ```



2. Navigate to the project's directory

```bash
cd ai-image-generator
```
3. Install the required dependencies
```bash
npm install
```
### Configuration
You need to obtain an API key from OpenAI to use their services. Once you have the API key you can use it. API key is only generated once you have to save it.
- Replace the API key in the ImageGenerator.jsx file on line 21.

### Running the Application
Now that the project is set up, you can run it locally:
```bash
npm start
```
The application should start, and you can access it in your web browser at http://localhost:3000

### Usage
- Enter a description of what you want to generate in the input box.
- Choose the desired image size from the dropdown.
- Click the "Generate" button to generate the image.
- Once the image is generated, click the "Download Image" button to save the image to your local device.

### Troubleshooting
If you encounter any issues or errors, please check the following:

- Ensure your API key is correct and it is access to generate the image .
- Confirm that you are connected to the internet.
- Verify that the OpenAI API is operational and not undergoing maintenance.
