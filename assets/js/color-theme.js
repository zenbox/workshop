let primaryHue = 270;
let primarySaturation = 100;
let primaryLuminance = 30;

let secondaryHue = primaryHue + 240;
let secondarySaturation = primarySaturation;
let secondaryLuminance = primaryLuminance + 10;
let color, box;

// Primary and Secondary Color
// - - - - - - - - - -
const primary = color = new HSL(primaryHue, primarySaturation, primaryLuminance);
const boxPrimary = new Box(color, ['big'], '#colors figure ol');

const secondary = color = new HSL(secondaryHue, secondarySaturation, secondaryLuminance);;
const boxSecondary = new Box(color, ['big'], '#colors figure ol');
// - - - - - - - - - -

let hueSimilar = [0, 15, 30, 45];
let hueTriades = [0, 120, 240];
let hueQuadrats = [0, 90, 180, 270];
let huePentatonics = [0, 72, 144, 216, 288];

let luminanceVariants = [
    -100, -80, -60, -40, -20,
    0, 20, 40, 60, 80, 100
];

let saturationVariants = [-100, -80, -60, -40, -20, 0];

// Primary
luminanceVariants.forEach(l => {
    luminance = primaryLuminance + l;
    if (luminance >= 0 && luminance <= 100) {
        color = new HSL(primaryHue, primarySaturation, luminance);
        if (l === 0) {
            box = new Box(color, ['small', 'default'], '#luminance-variation figure ol');
        } else {
            box = new Box(color, ['small'], '#luminance-variation figure ol');
        }
    }
});

// Secondary
luminanceVariants.forEach(l => {
    luminance = secondaryLuminance + l;
    if (luminance >= 0 && luminance <= 100) {
        color = new HSL(secondaryHue,
            secondarySaturation, luminance);
        if (l === 0) {
            box = new Box(color,
                ['small', 'default'], '#luminance-variation figure ol');
        } else {
            box = new
            Box(color, ['small'], '#luminance-variation figure ol');
        }
    }
});

// Primary
saturationVariants.forEach(s => {
    saturation = primarySaturation + s;
    if (saturation >= 0 && saturation <= 100) {
        color = new HSL(primaryHue, saturation, primaryLuminance);
        if (s === 0) {
            box = new Box(color, ['small', 'default'], '#saturation-variation figure ol');
        } else {
            box = new Box(color, ['small'], '#saturation-variation figure ol');
        }
    }
});

// Secondary
saturationVariants.forEach(s => {
    saturation = secondarySaturation + s;
    if (saturation >= 0 && saturation <= 100) {
        color = new HSL(secondaryHue, saturation, secondaryLuminance);

        if (s === 0) {
            box = new Box(color,
                ['small', 'default'], '#saturation-variation figure ol');
        } else {
            box = new
            Box(color, ['small'], '#saturation-variation figure ol');
        }
    }
});

// Harmonics
hueSimilar.forEach(hue => {
    hue = primaryHue + hue;
    if (hue > 360) hue -= 360;
    color = new HSL(hue, primarySaturation, primaryLuminance);
    box = new Box(color, ['small'], '#similar ol');
});
hueTriades.forEach(hue => {
    hue = primaryHue + hue;
    if (hue > 360) hue -= 360;
    color = new HSL(hue, primarySaturation, primaryLuminance);
    box = new Box(color, ['small'], '#triades ol');
});

hueQuadrats.forEach(hue => {
    hue = primaryHue + hue;
    if (hue > 360) hue -= 360;
    color = new HSL(hue, primarySaturation, primaryLuminance);
    box = new Box(color, ['small'], '#quadrats ol');
});


huePentatonics.forEach(hue => {
    hue = primaryHue + hue;
    if (hue > 360) hue -= 360;
    color = new HSL(hue, primarySaturation, primaryLuminance);
    box = new Box(color, ['small'], '#pentatonics ol');
});