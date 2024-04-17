# CanSat Serial Testing Server

This server sends orientation data on 'ws://localhost:8888' which can be used to position a 3D model such that it mimics the orientation of actual device

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- Git installed on your local machine.

### Installation

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/k4nishkk/cansat-serial-testing-server.git
   ```
2. cd cansat-serial-testing-server
   ```sh
   cd cansat-serial-testing-server
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Development Server

To start the development server, run:

```sh
npm start
```

### Configuration

Configure:

* Local host server port at index.js, line 11
* COM and baudrate at index.js, line 16