# GitHub Blog App

This application leverages the GitHub API to fetch issues from a repository and display them as a blog. It provides the following features:

- Listing of your GitHub profile with an image, number of followers, name, and other relevant information available through the GitHub API.
- List and filter all issues in the repository with a short summary of their contents.
- Create a page to display a complete post (issue) with detailed information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/github-blog-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd github-blog-app
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the application:

   ```shell
   npm run dev
   ```

5. Open the application in your browser:

   ```
   http://localhost:3000
   ```

## Usage

Once the application is running, you can navigate to the homepage to view the blog. The homepage displays your GitHub profile information and a list of issues from the specified repository.

- The profile section includes your profile picture, number of followers, name, and other relevant details.
- The issue section provides a summary of each issue, including the issue title, description, and any additional relevant information.

To view a complete post (issue), click on the desired issue from the list. You will be redirected to a page that displays detailed information about the selected issue.

## Features

- Fetches data from the GitHub API to dynamically populate your profile information and display a list of issues.
- Allows filtering and searching of issues based on specific criteria.
- Provides a complete post view with comprehensive details of each issue.

## Contributing

Contributions are welcome! If you have any improvements or bug fixes, feel free to submit a pull request. Please ensure your changes adhere to the following guidelines:

- Fork the repository.
- Create a new branch for your feature/fix.
- Make your changes and ensure they work as intended.
- Commit your changes and push them to your fork.
- Submit a pull request, explaining the changes you've made.
