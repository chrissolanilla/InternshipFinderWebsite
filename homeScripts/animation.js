const movingTexts = [
    {
      element: document.querySelector("#movingText1"),
      x: 0,
      y: 0,
      dx: 2,
      dy: 2,
    },
    {
      element: document.querySelector("#movingText2"),
      x: 100,
      y: 100,
      dx: 3,
      dy: 3,
    },
    {
      element: document.querySelector("#movingText3"),
      x: 200,
      y: 200,
      dx: 4,
      dy: 4,
    },
  ];
  const container = document.querySelector("#container");

  function randomColor() {
    let colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function moveText() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    movingTexts.forEach((movingText) => {
      const textWidth = movingText.element.offsetWidth;
      const textHeight = movingText.element.offsetHeight;

      if (
        movingText.x + movingText.dx > containerWidth - textWidth ||
        movingText.x + movingText.dx < 0
      ) {
        movingText.dx = -movingText.dx;
      }
      if (
        movingText.y + movingText.dy > containerHeight - textHeight ||
        movingText.y + movingText.dy < 0
      ) {
        movingText.dy = -movingText.dy;
      }

      // If the text is in the corner, change the color
      if (
        (movingText.x === 0 && movingText.y === 0) ||
        (movingText.x >= containerWidth - textWidth &&
          movingText.y >= containerHeight - textHeight)
      ) {
        movingText.element.style.color = randomColor();
      }

      movingText.x += movingText.dx;
      movingText.y += movingText.dy;

      movingText.element.style.left = movingText.x + "px";
      movingText.element.style.top = movingText.y + "px";
    });
  }

  setInterval(moveText, 10);