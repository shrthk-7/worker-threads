# Worker Threads Example

This repository contains an example implementation of a Node.js application that uses worker threads to perform a computationally intensive task in the background.

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine
2. Run it using `node main.js`:

## How it works

This application uses worker threads to perform a computationally intensive task in the background. The application creates a new worker thread and an array to it. The worker thread sorts the array and sends the result back to the main thread, which then displays it on the page or in our case, outputs "Done".
