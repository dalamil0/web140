/* ========================================
   COLOR THEORY PROJECT
======================================== */


/* ========================================
   COLOR PALETTES

   Students should replace these colors
   with their own colors.
======================================== */

const palettes = {

    palette1: {

        name: "Palette 1",

        primary: "#6D28D9",

        secondary: "#7C3AED",

        accent: "#FBBF24",

        background: "#FFFBEB",

        surface: "#F5F3FF",

        text: "#2E1065"

    },


    palette2: {

        name: "Palette 2",

        primary: "#DB2777",

        secondary: "#9333EA",

        accent: "#F43F5E",

        background: "#FFF7FB",

        surface: "#FCE7F3",

        text: "#4A1633"

    },


    palette3: {

        name: "Palette 3",

        primary: "#2563EB",

        secondary: "#DC2626",

        accent: "#EAB308",

        background: "#F8FAFC",

        surface: "#EFF6FF",

        text: "#172554"

}

};


/* ========================================
   APPLY SELECTED PALETTE
======================================== */

function applyPalette(palette) {

    const root =
        document.documentElement;


    /* Apply palette colors */

    root.style.setProperty(
        "--primary",
        palette.primary
    );


    root.style.setProperty(
        "--secondary",
        palette.secondary
    );


    root.style.setProperty(
        "--accent",
        palette.accent
    );


    root.style.setProperty(
        "--background",
        palette.background
    );


    root.style.setProperty(
        "--surface",
        palette.surface
    );


    root.style.setProperty(
        "--text",
        palette.text
    );


    /* Update HEX values */

    document.getElementById("primaryHex").textContent =
        palette.primary;


    document.getElementById("secondaryHex").textContent =
        palette.secondary;


    document.getElementById("accentHex").textContent =
        palette.accent;


    document.getElementById("backgroundHex").textContent =
        palette.background;


    document.getElementById("textHex").textContent =
        palette.text;

}


/* ========================================
   PALETTE BUTTONS
======================================== */

const paletteButtons =
    document.querySelectorAll("[data-palette]");


paletteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const paletteName =
            button.dataset.palette;


        const selectedPalette =
            palettes[paletteName];


        applyPalette(selectedPalette);

    });

});


/* ========================================
   INITIAL PALETTE
======================================== */

applyPalette(palettes.palette1);