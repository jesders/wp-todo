# Favorite Wrestlers Gutenberg Block
This project is a custom WordPress Gutenberg block that allows users to manage their favorite wrestlers. It includes both backend and frontend editing capabilities and is built with React, modern JavaScript, and WordPress.

## Features
- Add and manage a list of favorite wrestlers
- Semantic HTML and custom CSS for styling
- Built with React and modern JavaScript
- Accessibility considerations

## Prerequisites
- Docker: Required to set up the local development environment.
- wp-env: WordPress environment tool to easily spin up a WordPress instance.
Getting Started

### 1. Clone the Repository
Clone this repository to your local machine:

```git clone git@github.com:jesders/wp-todo.git```
```cd favorite-wrestlers```

### 2. Install Dependencies
Ensure Docker and wp-env are installed on your system. Then install Node.js dependencies:

```npm install```

### 3. Set Up the Development Environment
Using Docker and wp-env, start the WordPress environment

```wp-env start```

This command will set up and start a local WordPress environment using Docker.

Access the WordPress admin dashboard (usually at http://localhost:8888/wp-admin).
- username: admin
- password: password

Navigate to Plugins and activate the Favorite Wrestlers plugin, if it isn't already.


## Build the Project
Build the JavaScript and CSS files:

```npm run build```


## Using the Block
##### Add the Block

1. In the WordPress editor, click on the Add Block button.
2. Search for Favorite Wrestlers and add the block to your post or page.

##### Editing

On the backend, you can add and manage wrestlers through the block editor.
