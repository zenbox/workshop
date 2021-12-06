 class RGB {

     constructor(r, g, b) {
         this._hue = r;
         this._saturation = g;
         this._luminance = b;
         this.toHsl(this._hue, this._saturation, this._luminance);
     }

     toHsl(r, g, b) {
         r /= 255, g /= 255, b /= 255;
         let max = Math.max(r, g, b),
             min = Math.min(r, g, b);
         let h, s, l = (max + min) / 2;
         if (max == min) {
             h = s = 0; // achromatic
         } else {
             let d = max - min;
             s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
             switch (max) {
                 case r:
                     h = (g - b) / d + (g < b ? 6 : 0);
                     break;
                 case g:
                     h = (b - r) / d + 2;
                     break;
                 case b:
                     h = (r -
                         g) / d + 4;
                     break;
             }
             h /= 6;
         }
         this._hue = h;
         this._saturation = s;
         this._luminance = l;
     }

     get r() {
         return this._hue;
     };

     get g() {
         return this._saturation;
     };

     get b() {
         return this._luminance;
     };

     get hue() {
         return parseInt(360 * this._hue);
     };

     get saturation() {
         return parseInt(100 * this._saturation);
     };

     get luminance() {
         return parseInt(100 * this._luminance);
     };
 }

 class HSL {

     constructor(h, s, l) {
         this._hue = h;
         this._saturation = s;
         this._luminance = l;
         this.toRgb(this._hue, this._saturation, this._luminance);
     }

     toRgb(h, s, l) {
         let r, g, b;

         if (s == 0) {
             r = g = b = l; // achromatic
         } else {
             function hue2rgb(p, q, t) {
                 if (t < 0) t += 1;
                 if (t > 1) t -= 1;
                 if (t < 1 / 6) return p + (q - p) * 6 * t;
                 if (t < 1 / 2) return q;
                 if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                 return p;
             }

             let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
             let p = 2 * l - q;

             r = hue2rgb(p, q, h + 1 / 3);
             g = hue2rgb(p, q, h);
             b = hue2rgb(p, q, h - 1 / 3);

             this._r = r * 255;
             this._g = g * 255;
             this._b = b * 255;
         }

         //     return [r * 255, g * 255, b * 255];
         // } // HSL zu RGB

     }

     get r() {
         return this._r;
     };

     get g() {
         return this._g;
     };

     get b() {
         return this._b;
     };

     get hue() {
         return parseInt(this._hue);
     };

     get saturation() {
         return parseInt(this._saturation);
     };

     get luminance() {
         return parseInt(this._luminance);
     };
 }

class Daltonismn {
    constructor() { }

    rgbToLms() { }
    lmsToRgb() { }
    simulateColorBlindness() { }
}

 class Box {
     constructor(color, classes, selector) {
         this.build(color, classes, selector);
     }

     build(color, classes, selector) {

         if (typeof classes === 'string') classes = [classes];

         let el = document.createElement('li');
         let colorValue = `hsl(${color.hue}, ${color.saturation}%, ${color.luminance}%)`;

         el.classList.add('box');

         classes.forEach(name => el.classList.add(name));

         el.setAttribute(
             'style',
             `background-color:${colorValue}`
         );

         document.querySelector(selector).appendChild(el);
     }
 }