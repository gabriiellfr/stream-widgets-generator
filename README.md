## Getting Started

**To get started, follow the instructions below**

To get a local copy up and running follow these simple steps.

-   git clone the repo

```
git clone https://github.com/gabriiellfr/stream-widgets-generator && cd stream-widgets-generator
```

-   Install all the required packages with

```
npm install
```

-   Run

```
npm start
```

Example

## OBS
- Copy your widget link
- Head over to the page for the widget you want to add. At the top copy the unique link for that widget.

- Add your browser source
- In OBS create a new browser source then when prompted for a link, paste your widget link.

** http://localhost:3000/home

![Alt text](https://i.ibb.co/0CsphCF/ps-Widgets.png)

-   http://localhost:3000/widgets/:text/:textColor/:bgColor/:imageName?/:imageFormat?

    -   RGB Text/Background color replace "#" for "@"
        -   http://localhost:3000/widgets/back%20soon!/@0065ff/@15191F/loading/gif