import lax from "lax.js"
export const animations = () => {
  // Setup lax
  lax.init();

  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });
  lax.addElements(
    "#traslate-right-to-left",
    {
      scrollY: {
        translateX: [
          ["elInY", "elOutY"],
          {
            768: [400, 0],
            1440: [200, 0],
          },
        ],
        rotate: [
          [0, 1e9],
          [0, 1e9]
        ]
      },
    }
  );
  lax.addElements(
    "#traslate-left-to-right",
    {
      scrollY: {
        translateX: [
          ["elInY", "elOutY"],
          {
            768: [-100, 400],
            1440: [-100, 200],
          },
        ],
        rotate: [
          [0, 1e9],
          [0, 1e9]
        ]
      },
    }
  );
  lax.addElements(
    "#traslate-top-to-bottom",
    {
      scrollY: {
        translateY: [
          ["elInY", "elOutY"],
          [-100, 100],
        ],
        rotate: [
          [0, 1e9],
          [0, 1e9]
        ]
      }
    }
  );
  lax.addElements(
    "#traslate-bottom-to-top",
    {
      scrollY: {
        translateY: [
          ["elInY", "elOutY"],
          [100, -100],
        ],
        rotate: [
          [0, 1e9],
          [0, 1e9]
        ]
      }
    }
  );
  lax.addElements(
    "#traslate-to-bottom",
    {
      scrollY: {
        translateY: [
          ["elInY", "elOutY"],
          [-100, 100],
        ]
      }
    }
  );
  lax.addElements(
    "#traslate-to-top",
    {
      scrollY: {
        translateY: [
          ["elInY", "elOutY"],
          [100, -100],
        ]
      }
    }
  );
  lax.addElements(
    "#traslate-to-bottom-mobile",
    {
      scrollY: {
        translateY: [
          ["elInY", "elOutY"],
          [-20, 100],
        ]
      }
    }
  );
  lax.addElements(
    "#traslate-to-top-mobile",
    {
      scrollY: {
        translateY: [
          ["elInY", "elOutY"],
          [20, -100],
        ]
      }
    }
  );
  lax.addElements(
    "#traslate-to-left",
    {
      scrollY: {
        translateX: [
          ["elInY", "elOutY"],
          [5, -200],
        ],
        rotate: [
          ["elInY", "elOutY"],
          [0, -1e1]
        ]
      }
    }
  );
  lax.addElements(
    "#traslate-to-right",
    {
      scrollY: {
        translateX: [
          ["elInY", "elOutY"],
          [-5, 100],
        ],
        rotate: [
          ["elInY", "elOutY"],
          [0, 1e1]
        ]
      }
    }
  );
  lax.addElements(
    "#spin",
    {
      scrollY: {
        rotate: [
          [0, 1e9],
          [0, 1e9]
        ]
      }
    },
    []
  );
}