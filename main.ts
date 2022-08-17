/**
 * Version 1.4
 * updated fill block and improve new custome
 * 
 */

enum NeoPixelColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}

enum SerialPinTx {
    //% block=P0
    P0 = DigitalPin.P0,
    //% block=P1
    P1 = DigitalPin.P1,
    P2 = DigitalPin.P2,
    P8 = DigitalPin.P8,
    P12 = DigitalPin.P12,
    P13 = DigitalPin.P13,
    P14 = DigitalPin.P14,
    P15 = DigitalPin.P15,
    P16 = DigitalPin.P16
};

enum Pic {
    //% block=smile
    smile = 0,
    //% block=eagleEye
    eagleEye = 1,
    //% block=embarrassed
    embarrassed = 2,
    //% block=sad
    sad = 3,
    //% block=scaleEys
    scaleEys = 4,
    //% block=dumbfounded
    dumbfounded = 5,
    //% block=distress
    distress,
    //% block=spades
    spades,
    //% block=square
    square,
    //% block=glance
    glance,
    //% block=blink
    blink,
    //% block=anger
    anger,
    //% block=crossEyed
    crossEyed,
    //% block=terrorist
    terrorist,
    //% block=dinosaurEgg
    dinosaurEgg,
    //% block=whale
    whale,
    //% block=grizzlies
    grizzlies,
    //% block=butterfly
    butterfly,
    //% block=dog
    dog,
    //% block=owl
    owl,
    //% block=rocket
    rocket,
    //% block=comma
    comma,
    //% block=exclamation
    exclamation,
    //% block=lifting
    lifting,
    //% block=peach
    peach,
    //% block=doubt
    doubt,
    //% block=left
    left,
    //% block=left
    right,
    //% block=down
    down,
    //% block=up
    up,
    //% block=true
    true,
    //% block=key
    key,
    //% block=hanger
    hanger,
    //% block=tv
    tv,
    //% block=sailing
    sailing,
    //% block=squirrel
    squirrel,
    //% block=et
    et,
    //% block=alien
    alien,
    //% block=mushroom
    mushroom,
    //% block=longEars
    longEars,
    //% block=surprised
    surprised,
    //% block=home
    home,
    //% block=false
    false

}

enum _Dir {
    //% block=east
    east = 0,
    //% block=southeast
    southeast = 1,
    //% block=south
    south = 2,
    //% block=southwest
    southwest = 3,
    //% block=west
    west = 4,
    //% block=northwest
    northwest = 5,
    //% block=north
    north = 6,
    //% block=northeast
    northeast = 7
}



/**
 * Functions to operate NeoPixel strips.
 */
//% color=#019b9b weight=6 icon="\uf121" block="Matrix"
namespace Matrix {
    /**
     * A NeoPixel strip
     */
    let chrs: string[] = ['0', ' ', '!', '?', '@', '$', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let chrsNo: number = 67; // number of chrs

    let chr: number[] = [0x3C, 0x66, 0x42, 0x42, 0x42, 0x66, 0x3C, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x18, 0x3C, 0x3C, 0x18, 0x18, 0x00, 0x18, 0x00,
        0x3c, 0x66, 0x66, 0x0c, 0x18, 0x00, 0x18, 0x00,
        0x3c, 0x66, 0x5e, 0x56, 0x5c, 0x40, 0x7c, 0x00,
        0x3c, 0x5a, 0x58, 0x3c, 0x1a, 0x5a, 0x3C, 0x00,
        0x10, 0x70, 0x10, 0x10, 0x10, 0x10, 0x7C, 0x00,
        0x3C, 0x42, 0x02, 0x04, 0x18, 0x22, 0x7E, 0x00,
        0x3C, 0x42, 0x02, 0x1C, 0x02, 0x42, 0x3C, 0x00,
        0x0C, 0x14, 0x24, 0x44, 0x7E, 0x04, 0x0C, 0x00,
        0x7E, 0x40, 0x7C, 0x02, 0x02, 0x42, 0x3C, 0x00,
        0x3C, 0x20, 0x40, 0x7C, 0x42, 0x42, 0x3C, 0x00,
        0x7E, 0x44, 0x08, 0x10, 0x10, 0x10, 0x10, 0x00,
        0x3C, 0x42, 0x42, 0x3C, 0x42, 0x42, 0x3C, 0x00,
        0x38, 0x46, 0x42, 0x3E, 0x02, 0x04, 0x3C, 0x00,
        0x10, 0x18, 0x28, 0x24, 0x7C, 0x42, 0xE7, 0x00,
        0xFC, 0x44, 0x78, 0x46, 0x42, 0x42, 0xFC, 0x00,
        0x3E, 0x42, 0x80, 0x80, 0x80, 0x42, 0x3C, 0x00,
        0xF8, 0x46, 0x42, 0x42, 0x42, 0x44, 0xF8, 0x00,
        0xFC, 0x42, 0x40, 0x78, 0x40, 0x46, 0xFC, 0x00,
        0xFC, 0x42, 0x48, 0x78, 0x48, 0x40, 0xE0, 0x00,
        0x3C, 0xC4, 0x80, 0x80, 0x8E, 0x44, 0x78, 0x00,
        0xE7, 0x42, 0x42, 0x7E, 0x42, 0x42, 0xE7, 0x00,
        0x7C, 0x10, 0x10, 0x10, 0x10, 0x10, 0x7C, 0x00,
        0x3E, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0xF0,
        0xFE, 0x48, 0x70, 0x70, 0x48, 0x44, 0xEE, 0x00,
        0xE0, 0x40, 0x40, 0x40, 0x40, 0x42, 0xFE, 0x00,
        0xEE, 0x6C, 0x6C, 0x54, 0x54, 0x54, 0xC6, 0x00,
        0xC7, 0x62, 0x52, 0x4A, 0x4A, 0x46, 0xE2, 0x00,
        0x3C, 0x46, 0x82, 0x82, 0x82, 0x44, 0x38, 0x00,
        0xFC, 0x42, 0x42, 0x7C, 0x40, 0x40, 0xE0, 0x00,
        0x78, 0xC6, 0x82, 0x82, 0xB2, 0xCE, 0x38, 0x06,
        0xFE, 0x42, 0x7C, 0x48, 0x44, 0x46, 0xE3, 0x00,
        0x3E, 0x42, 0x60, 0x18, 0x06, 0x42, 0x7C, 0x00,
        0xFE, 0x92, 0x10, 0x10, 0x10, 0x10, 0x38, 0x00,
        0xE7, 0x42, 0x42, 0x42, 0x42, 0x42, 0x3C, 0x00,
        0xE7, 0x42, 0x64, 0x24, 0x28, 0x18, 0x10, 0x00,
        0xD6, 0x92, 0x92, 0xAA, 0xAE, 0x44, 0x44, 0x00,
        0xE7, 0x66, 0x24, 0x18, 0x34, 0x26, 0xE7, 0x00,
        0xEE, 0x44, 0x28, 0x10, 0x10, 0x10, 0x38, 0x00,
        0x7E, 0x84, 0x08, 0x10, 0x20, 0x42, 0xFC, 0x00,
        0x00, 0x00, 0x3C, 0x42, 0x3E, 0x42, 0x3F, 0x00,
        0xC0, 0x40, 0x5C, 0x62, 0x42, 0x42, 0x7C, 0x00,
        0x00, 0x00, 0x3C, 0x62, 0x40, 0x42, 0x3C, 0x00,
        0x06, 0x02, 0x1E, 0x62, 0x42, 0x42, 0x3F, 0x00,
        0x00, 0x00, 0x3C, 0x42, 0x7E, 0x40, 0x3E, 0x00,
        0x0F, 0x10, 0x7E, 0x10, 0x10, 0x10, 0x7C, 0x00,
        0x00, 0x00, 0x3E, 0x44, 0x38, 0x60, 0x5E, 0x7E,
        0xC0, 0x40, 0x5C, 0x62, 0x42, 0x42, 0xE7, 0x00,
        0x30, 0x00, 0x70, 0x10, 0x10, 0x10, 0x7C, 0x00,
        0x0C, 0x00, 0x1C, 0x04, 0x04, 0x04, 0x04, 0x78,
        0xC0, 0x40, 0x4E, 0x58, 0x70, 0x48, 0xEE, 0x00,
        0x70, 0x10, 0x10, 0x10, 0x10, 0x10, 0x7C, 0x00,
        0x00, 0x00, 0xFF, 0x49, 0x49, 0x49, 0xED, 0x00,
        0x00, 0x00, 0xD8, 0x66, 0x42, 0x42, 0xE7, 0x00,
        0x00, 0x00, 0x3C, 0x42, 0x42, 0x42, 0x3C, 0x00,
        0x00, 0x00, 0xF8, 0x46, 0x42, 0x42, 0x7C, 0xE0,
        0x00, 0x00, 0x3E, 0x42, 0x42, 0x42, 0x3E, 0x07,
        0x00, 0x00, 0xEE, 0x30, 0x20, 0x20, 0xF8, 0x00,
        0x00, 0x00, 0x3E, 0x40, 0x3C, 0x42, 0x7C, 0x00,
        0x10, 0x10, 0x7C, 0x10, 0x10, 0x10, 0x0C, 0x00,
        0x00, 0x00, 0xC6, 0x42, 0x42, 0x42, 0x3F, 0x00,
        0x00, 0x00, 0xE7, 0x46, 0x24, 0x28, 0x10, 0x00,
        0x00, 0x00, 0xD7, 0x92, 0xAA, 0x6A, 0x44, 0x00,
        0x00, 0x00, 0x6E, 0x3C, 0x18, 0x3C, 0x76, 0x00,
        0x00, 0x00, 0xE7, 0x66, 0x3C, 0x18, 0x10, 0xE0,
        0x00, 0x00, 0x7E, 0x44, 0x18, 0x32, 0x7E, 0x00];

    let dirs: number[] = [
        // 0x00,0x04,0x06,0xFF,0xFF,0x06,0x04,0x00, //->       
        // 0xC0,0xE0,0x70,0x39,0x1D,0x0F,0x07,0x1F,
        // 0x18,0x18,0x18,0x18,0x18,0x7E,0x3C,0x18, //|
        // 0x03,0x07,0x0E,0x9C,0xB8,0xF0,0xE0,0xF8,
        // 0x00,0x20,0x60,0xFF,0xFF,0x60,0x20,0x00, //<-
        // 0xF8,0xE0,0xF0,0xB8,0x9C,0x0E,0x07,0x03,
        // 0x18,0x3C,0x7E,0x18,0x18,0x18,0x18,0x18, //^
        // 0x1F, 0x07, 0x0F, 0x1D, 0x39, 0x70, 0xE0, 0xC0
        0x00, 0x20, 0x60, 0xFF, 0xFF, 0x60, 0x20, 0x00,
        0xF8, 0xE0, 0xF0, 0xB8, 0x9C, 0x0E, 0x07, 0x03,
        0x18, 0x3C, 0x7E, 0x18, 0x18, 0x18, 0x18, 0x18,
        0x1F, 0x07, 0x0F, 0x1D, 0x39, 0x70, 0xE0, 0xC0,
        0x00, 0x04, 0x06, 0xFF, 0xFF, 0x06, 0x04, 0x00,
        0xC0, 0xE0, 0x70, 0x39, 0x1D, 0x0F, 0x07, 0x1F,
        0x18, 0x18, 0x18, 0x18, 0x18, 0x7E, 0x3C, 0x18,
        0x03, 0x07, 0x0E, 0x9C, 0xB8, 0xF0, 0xE0, 0xF8,
    ]


    let queue: number[] = [0];
    let screen: number[] = [0];
    let NoBlk: number = 1;

    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: number;
        _matrixWidth: number; // number of leds in a matrix - if any
        len: number;
        NoBlk: number; // No of Matrix block

        //% blockId="showPixel" block="%strip| display pixel x %x| y %y| Block %BlkNo| color %color"
        //% x.min=0 x.max=7
        //% y.min=0 y.max=7
        //% BlkNo.min=0 BlkNo.max= 5 advanced=true weight=85
        setPixel(x: number, y: number, BlkNo: number, color: number): void {
            let offset = (y * 8 + x) + (BlkNo * 64)
            this.setPixelColor(offset, color)
            this.show()
        }

        setPixel2(x: number, y: number, BlkNo: number, color: number): void {
            let offset = (y * 8 + x) + (BlkNo * 64)
            this.setPixelColor(offset, color)
        }

        display(color: number, BlkNo: number): void {
            let i = 0;
            let j = 0;
            let k = 0;
            for (k = 0; k < 8; k++) {
                for (i = 0; i < 8; i++) {
                    if (((screen[k] >> i) & 0x1) == 1) {
                        this.setPixel2(7 - i, k, BlkNo, color);
                    }
                }
            }
            this.show()
        }

        displayAll(color: number): void {
            let i = 0;
            let j = 0;
            let k = 0;
            for (j = 0; j < this.NoBlk; j++) {
                for (k = 0; k < 8; k++) {
                    for (i = 0; i < 8; i++) {
                        if (((screen[k + (j * 8)] >> i) & 0x1) == 1) {
                            this.setPixel(7 - i, k, j, color);
                        }
                    }
                }
            }
        }

        // blockId="showCustomNew" block="%strip| display New Custom Icon string %str| Block %BlkNo| color %color"
        // BlkNo.min=0 BlkNo.max= 5 advanced=true weight=75
        showCustomNew0(str: string, BlkNo: number, color: number): void {
            screen = [0];
            this.update(BlkNo);
            screen = [hex2dec(str.substr(0, 2)), hex2dec(str.substr(2, 2)), hex2dec(str.substr(4, 2)), hex2dec(str.substr(6, 2)), hex2dec(str.substr(8, 2)), hex2dec(str.substr(10, 2)), hex2dec(str.substr(12, 2)), hex2dec(str.substr(14, 2))];
            this.display(color, BlkNo);
            serial.writeString(str);
        }

        //% blockId="showCustomNew" block="%strip| display New Custom Icon string %str| Block %BlkNo| color %color"
        //% BlkNo.min=0 BlkNo.max= 5 advanced=true weight=72
        showCustomNew(str: string, BlkNo: number, color: number): void {
            screen = [0];
            this.update(BlkNo);
            screen = [m2l(hex2dec(str.substr(14, 2))), m2l(hex2dec(str.substr(12, 2))), m2l(hex2dec(str.substr(10, 2))), m2l(hex2dec(str.substr(8, 2))), m2l(hex2dec(str.substr(6, 2))), m2l(hex2dec(str.substr(4, 2))), m2l(hex2dec(str.substr(2, 2))), m2l(hex2dec(str.substr(0, 2)))];
            //    serial.writeNumbers(screen);
            this.display(color, BlkNo);

        }


        //% blockId="showCustomUpdate" block="%strip| display Update Custom Icon string %str| Block %BlkNo| color %color"
        //% BlkNo.min=0 BlkNo.max= 5 advanced=true weight=70
        showCustomUpdate(str: string, BlkNo: number, color: number): void {
            screen = [m2l(hex2dec(str.substr(14, 2))), m2l(hex2dec(str.substr(12, 2))), m2l(hex2dec(str.substr(10, 2))), m2l(hex2dec(str.substr(8, 2))), m2l(hex2dec(str.substr(6, 2))), m2l(hex2dec(str.substr(4, 2))), m2l(hex2dec(str.substr(2, 2))), m2l(hex2dec(str.substr(0, 2)))];
            this.display(color, BlkNo);
            //    serial.writeString(str);
        }


        setChar(color: number): void {
            let i = 0;
            let j = 0;
            let k = 0;
            // basic.showNumber(this.NoBlk);
            for (i = 0; i < (8 * this.NoBlk); i++) {
                screen[i] = queue[i];
            }
            this.displayAll(color);
            basic.pause(100);

            if (this.len > (this.NoBlk + 1)) {
                while (k++ < (this.len + this.NoBlk)) {
                    for (i = 0; i < 8; i++) {
                        // this.clear();

                        for (j = 0; j < 8 * this.NoBlk; j++) {
                            screen[j] = (screen[j] << 1) | ((queue[k * 8 + j] & (0x1 << (7 - i))) >> (7 - i));
                        }
                        this.updateAll();
                        this.displayAll(color);
                        basic.pause(100);
                    }
                    this.updateAll();
                    this.show();
                }
            }
            queue = [0];
        }

        //% blockId="clearPixel" block="%strip| clear pixel x %x| y %y | Block %BlkNo"
        //% BlkNo.min=0 BlkNo.max= 5 advanced=true weight=80
        clearPixel(x: number, y: number, BlkNo: number): void {
            this.setPixel(x, y, BlkNo, NeoPixelColors.Black);
        }

        //% blockId="showNumber" block="%strip| show number %num| color %color"
        //% parts="neopixel"
        showNumber(num: number, color: number): void {
            this.updateAll();
            this.showString(num.toString(), color);
        }

        //% blockId="showString" block="%strip| display string %str| color %color"
        showString(str: string, color: number): void {
            let l = str.length;
            this.len = l + 1;
            let i = 0;
            let index = 0;
            let j = 0;
            let k = 0;
            let sub = 0;
            this.updateAll();
            this.show();
            for (i = 0; i < l; i++) {
                for (j = 0; j < chrsNo; j++) {
                    if (str[i] == chrs[j]) {
                        index = j;
                        break;
                    }
                }
                for (k = 0; k < 8; k++) {
                    queue[sub++] = chr[index * 8 + k];
                }
            }
            for (i = 0; i < 8 * this.NoBlk; i++) {
                queue[sub++] = 0;
            }
            //            serial.writeNumber(this.len);
            this.setChar(color);
        }

        //% blockId="showCompass" block="%strip| display dir %dir| Block %BlkNo | color %color"
        //% BlkNo.min=0 BlkNo.max= 5 advanced=true
        showCompass(dir: _Dir, BlkNo: number, color: number): void {
            let i = 0;
            let j = 0;
            let index = 0;
            index = dir * 8;
            this.update(BlkNo);
            for (i = 0; i < 8; i++) {
                for (j = 0; j < 8; j++) {
                    if (((dirs[index + i] >> j) & 0x1) == 1) {
                        this.setPixel(j, 7 - i, BlkNo, color);
                    }
                }
            }
        }

        //% blockId="neopixel_set_strip_color" block="%strip|fill color %rgb"
        //% weight=85 blockGap=8
        //% parts="neopixel"
        //% BlkNo.min=0 BlkNo.max= 5 
        showColor(rgb: number) {
            this.update(0);
            this.setAllRGB(rgb);
            this.show();
        }

        //% blockId="neopixel_set_strip_color_blk" block="%strip|fill color %rgb| Block %BlkNo"
        //% weight=85 blockGap=8
        //% parts="neopixel"
        //% BlkNo.min=0 BlkNo.max= 5 advanced=true weight=89
        showColorBlk(rgb: number, BlkNo: number) {
            //    this.update(BlkNo);
            //    this.setAllRGB(rgb);
            //    this.show();
            this.showCustomNew("FFFFFFFFFFFFFFFF", BlkNo, rgb)

        }

        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset, rgb);
        }

        show() {
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        //% blockId="clear" block="%strip|clear"
        //% weight=76
        //% parts="neopixel"
        //% BlkNo.min=0 BlkNo.max= 5 
        clear(): void {
            this.update(0);
            this.show();
        }
        //% blockId="clearBlk" block="%strip|clear | Block %BlkNo"
        //% weight=76
        //% parts="neopixel"
        //% BlkNo.min=0 BlkNo.max= 5 advanced=true weight=87
        clearBlk(BlkNo: number): void {
            this.update(BlkNo);
            this.show();
        }

        update(BlkNo: number): void {
            const stride = this._mode === 1 ? 4 : 3;
            this.buf.fill(0, BlkNo * 64 * stride, (BlkNo + 1) * 64 * stride);
        }

        updateAll(): void {
            let j = 0;
            const stride = this._mode === 1 ? 4 : 3;
            for (j = 0; j < this.NoBlk; j++) {
                this.buf.fill(0, j * 64 * stride, (j + 1) * 64 * stride);
            }
        }

        //% weight=59
        //% parts="neopixel" 
        //% blockId="setBrightness" block="%strip|set brightness %brightness" blockGap=8
        //% brightness.min=0 brightness.max=255
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }

        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === 2) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === 1 ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }

        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === 1 ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        // blockGap=50
        // blockId="showIcons" block="%strip| display Icon %index |Block %BlkNo"
        // index.fieldEditor="gridpicker" index.fieldOptions.columns=4 advanced=true
        showIcons(index: Pic, BlkNo: number): void {
            screen = [0];
            this.update(BlkNo);
            switch (index) {
                case Pic.smile:
                    screen = [0x00, 0x42, 0xE7, 0x42, 0x00, 0x42, 0x3C, 0x00];
                    this.display(0xFF00FF, BlkNo);
                    break;
                case Pic.eagleEye:
                    screen = [0x81, 0xC3, 0xA5, 0xFF, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xFFFF00, BlkNo)
                    screen = [0x00, 0x00, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xFFFFFF, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7E, 0x3C];
                    this.display(0x8a2be2, BlkNo);
                    break;
                case Pic.embarrassed:
                    screen = [0x24, 0x24, 0x24, 0x42, 0x81, 0x00, 0x00, 0x00];
                    this.display(0x8a2be2, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3C, 0x42];
                    this.display(0x00ffff, BlkNo);
                    break;
                case Pic.sad:
                    screen = [0x42, 0xA5, 0xA5, 0xA5, 0x00, 0x00, 0x00, 0x00];
                    this.display(0x8a2be2, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3C, 0x42];
                    this.display(0x0000ff, BlkNo);
                    break;
                case Pic.scaleEys:
                    screen = [0xF0, 0x90, 0x90, 0xF0, 0x00, 0x00, 0x00, 0x00];
                    this.display(0x0000FF, BlkNo);
                    screen = [0x00, 0x66, 0x66, 0x00, 0x00, 0x00, 0x00, 0x00];
                    this.display(0x4b0082, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x42, 0x7E, 0x42];
                    this.display(0xFFFF00, BlkNo);
                    break;
                case Pic.dumbfounded:
                    screen = [0x00, 0x00, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xFFFF00, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x3C, 0x42, 0x00];
                    this.display(0xFF0000, BlkNo);
                    break;
                case Pic.distress:
                    screen = [0x20, 0x47, 0x80, 0x00, 0x00, 0x00, 0x3C, 0x42];
                    this.display(0x4b0082, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x24, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xFF00FF, BlkNo);
                    break;
                case Pic.spades:
                    screen = [0x18, 0x3C, 0x7E, 0xFF, 0xFF, 0x5A, 0x18, 0x3C];
                    this.display(0x8a2be2, BlkNo);
                    break;
                case Pic.square:
                    screen = [0x18, 0x3C, 0x7E, 0xFF, 0xFF, 0x7E, 0x3C, 0x18];
                    this.display(0xFF0000, BlkNo);
                    break;
                case Pic.glance:
                    screen = [0x00, 0xE7, 0x63, 0x00, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xaaaaaf, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x3C, 0x00];
                    this.display(0x0000ff, BlkNo);
                    break;
                case Pic.blink:
                    screen = [0x00, 0xE2, 0xE4, 0xE7, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xaaaaaf, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x42, 0x3C, 0x00];
                    this.display(0x00ffaa, BlkNo);
                    break;
                case Pic.anger:
                    screen = [0x80, 0x42, 0x24, 0xE6, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xFF0000, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3C, 0x42];
                    this.display(0xaaaaaf, BlkNo);
                    break;
                case Pic.crossEyed:
                    screen = [0x24, 0xE7, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xFFA500, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x3C, 0x3C, 0x00];
                    this.display(0xFF00FF, BlkNo);
                    break;
                case Pic.terrorist:
                    screen = [0x81, 0x66, 0x00, 0x00, 0x00, 0x00, 0x3C, 0x42];
                    this.display(0xFF0000, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xCD6839, BlkNo);
                    break;
                case Pic.dinosaurEgg:
                    screen = [0x24, 0x66, 0xE7, 0xE7, 0x66, 0x24, 0x00, 0x00];
                    this.display(0x8a2be2, BlkNo);
                    screen = [0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x00, 0x00];
                    this.display(0x00FF00, BlkNo);
                    screen = [0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x00, 0x00];
                    this.display(0x4b0082, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x83, 0xFF];
                    this.display(0xFFFFFF, BlkNo);
                    break;
                case Pic.whale:
                    screen = [0x44, 0x28, 0x10, 0x00, 0x00, 0x30, 0x78, 0xFC];
                    this.display(0xFFFFFF, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x30, 0x78, 0xCD, 0x87, 0x03];
                    this.display(0x0000FF, BlkNo);
                    break;
                case Pic.grizzlies:
                    screen = [0xC3, 0xC3, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xFFFFFF, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x18, 0x3C, 0x3C, 0x99, 0x7E];
                    this.display(0xCD6839, BlkNo);
                    break;
                case Pic.butterfly:
                    screen = [0x66, 0x99, 0x81, 0x42, 0x24, 0x42, 0x42, 0x24];
                    this.display(0x00FF00, BlkNo);
                    break;
                case Pic.dog:
                    screen = [0xC3, 0xC3, 0x7E, 0x5A, 0x7E, 0x7E, 0xC3, 0xFF];
                    this.display(0xaaaaaf, BlkNo);
                    break;
                case Pic.owl:
                    screen = [0x42, 0x66, 0x7E, 0xFF, 0xDB, 0xFF, 0x7E, 0x3C];
                    this.display(0x00FF00, BlkNo);
                    break;
                case Pic.rocket:
                    screen = [0x18, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0xA5];
                    this.display(0xFF0000, BlkNo);
                    screen = [0x00, 0x24, 0x24, 0x24, 0x24, 0x24, 0x00, 0x00];
                    this.display(0xFFFFFF, BlkNo);
                    screen = [0x00, 0x18, 0x18, 0x00, 0x00, 0x00, 0x5A, 0x00];
                    this.display(0xFFFF00, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x18, 0x18, 0x00, 0x00];
                    this.display(0x00FF00, BlkNo);
                    break;
                case Pic.comma:
                    screen = [0x7E, 0x7E, 0x7E, 0x7E, 0x7E, 0x00, 0x00, 0x00];
                    this.display(0x0000FF, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x0E, 0x0C, 0x18];
                    this.display(0xaaaaaf, BlkNo);
                    break;
                case Pic.exclamation:
                    screen = [0x18, 0x18, 0x18, 0x18, 0x18, 0x00, 0x18, 0x18];
                    this.display(0x0000FF, BlkNo);
                    break;
                case Pic.lifting:
                    screen = [0x00, 0x42, 0xC3, 0xC3, 0xC3, 0xC3, 0x42, 0x00];
                    this.display(0x0000FF, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x3C, 0x3C, 0x00, 0x00, 0x00];
                    this.display(0x4b0082, BlkNo);
                    break;
                case Pic.peach:
                    screen = [0x00, 0x66, 0xFF, 0xFF, 0xFF, 0x7E, 0x3C, 0x18];
                    this.display(0xFF0000, BlkNo);
                    break;
                case Pic.doubt:
                    screen = [0x3C, 0x7E, 0x66, 0x06, 0x0C, 0x18, 0x00, 0x18];
                    this.display(0x0000FF, BlkNo);
                    break;
                case Pic.left:
                    screen = [0x00, 0x20, 0x60, 0xFF, 0xFF, 0x60, 0x20, 0x00];
                    this.display(0x00FF00, BlkNo);
                    break;
                case Pic.right:
                    screen = [0x00, 0x04, 0x06, 0xFF, 0xFF, 0x06, 0x04, 0x00];
                    this.display(0x00FF00, BlkNo);
                    break;
                case Pic.down:
                    screen = [0x18, 0x18, 0x18, 0x18, 0x18, 0x7E, 0x3C, 0x18];
                    this.display(0x00FF00, BlkNo);
                    break;
                case Pic.up:
                    screen = [0x18, 0x3C, 0x7E, 0x18, 0x18, 0x18, 0x18, 0x18];
                    this.display(0x00FF00, BlkNo);
                    break;
                case Pic.true:
                    screen = [0x00, 0x00, 0x03, 0x06, 0xCC, 0x78, 0x30, 0x00];
                    this.display(0xFF0000, BlkNo);
                    break;
                case Pic.key:
                    screen = [0x38, 0x08, 0x38, 0x08, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xFFFFFF, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x7E, 0x42, 0x42, 0x7E];
                    this.display(0x0000FF, BlkNo);
                    break;
                case Pic.hanger:
                    screen = [0x00, 0x00, 0x00, 0x18, 0x24, 0x42, 0x81, 0xFF];
                    this.display(0x00FF00, BlkNo);
                    screen = [0x18, 0x24, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xFFA500, BlkNo);
                    break;
                case Pic.tv:
                    screen = [0x81, 0x42, 0x24, 0x7E, 0x42, 0x42, 0x42, 0x7E];
                    this.display(0x0000FF, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x3C, 0x3C, 0x3C, 0x00];
                    this.display(0x00ff00, BlkNo);
                    break;
                case Pic.sailing:
                    screen = [0x10, 0x10, 0x10, 0x10, 0x10, 0xFF, 0x7E, 0x3C];
                    this.display(0x4b0082, BlkNo);
                    screen = [0x00, 0x08, 0x0C, 0x08, 0x00, 0x00, 0x00, 0x00];
                    this.display(0xFF0000, BlkNo);
                    break;
                case Pic.squirrel:
                    screen = [0x00, 0x00, 0x00, 0x24, 0x00, 0x18, 0x3C, 0x7E];
                    this.display(0xFFFFFF, BlkNo);
                    screen = [0x24, 0x24, 0x3C, 0x5A, 0xFF, 0xE7, 0xC3, 0x00];
                    this.display(0xFFA500, BlkNo);
                    break;
                case Pic.et:
                    screen = [0x3C, 0xFF, 0x99, 0xFF, 0x7E, 0x3C, 0x5A, 0x81];
                    this.display(0xFF00FF, BlkNo);
                    break;
                case Pic.alien:
                    screen = [0x81, 0x42, 0x3C, 0xFF, 0x99, 0xFF, 0x7E, 0x3C];
                    this.display(0x4b0082, BlkNo);
                    break;
                case Pic.mushroom:
                    screen = [0x18, 0x3C, 0x7E, 0xFF, 0xC9, 0xDB, 0x00, 0x00];
                    this.display(0xFFA500, BlkNo);
                    screen = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7E, 0x66];
                    this.display(0x00FF00, BlkNo);
                    break;
                case Pic.longEars:
                    screen = [0xE7, 0x3C, 0x7E, 0x5A, 0xFF, 0xBD, 0x3C, 0x7E];
                    this.display(0xFFA500, BlkNo);
                    break;
                case Pic.surprised:
                    screen = [0x24, 0x7E, 0x5A, 0xFF, 0xFF, 0x66, 0x66, 0x24];
                    this.display(0x0000FF, BlkNo);
                    break;
                case Pic.home:
                    screen = [0x18, 0x3C, 0x7E, 0xFF, 0x00, 0x00, 0x00, 0x00];
                    this.display(0x0000FF, BlkNo);
                    screen = [0x02, 0x02, 0x00, 0x00, 0x5E, 0x7E, 0x7A, 0x7A];
                    this.display(0xaaaaaf, BlkNo);
                    break;
                case Pic.false:
                    screen = [0x00, 0x42, 0x24, 0x18, 0x18, 0x24, 0x42, 0x00];
                    this.display(0x0000FF, BlkNo);
                    break;
            }
        }



    }
    /**
     * Functions to create NeoPixel strips.
     * @param NoBlk is number of block in the matrix, eg:1
    */
    //% blockId="neopixel_Mcreate" block="create Matrix Pin %SerialPinTx| Number of Block %NoBlk"
    //% weight=90 blockGap=8 
    //% NoBlk.min=1 NoBlk.max= 6 advanced=true
    export function create(SerialPinTx: DigitalPin, NoBlk: number): Strip {
        let strip = new Strip();
        let mode = 0;
        let numleds = 64 * NoBlk;
        let stride = mode === 1 ? 4 : 3;
        strip.buf = pins.createBuffer(numleds * stride);
        strip.start = 0;
        strip._length = numleds;
        strip._mode = mode;
        strip._matrixWidth = 0;
        strip.setBrightness(30)
        strip.setPin(SerialPinTx)
        strip.NoBlk = NoBlk
        return strip;
    }

    //% weight=90
    //% blockId="neopixel_Screate" block="create Matrix Pin %SerialPinTx"
    export function SCreate(SerialPinTx: DigitalPin): Strip {
        return create(SerialPinTx, 1);
    }

    //% weight=1
    //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    //% weight=2 blockGap=8
    //% blockId="neopixel_colors" block="%color"
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }

    function hex2dec(s: string): number {
        let digits = "0123456789ABCDEFabcdef";
        let val = 0;
        let i = 0;
        let j = 0;
        let d = 0;
        for (i = 0; i < s.length; i++) {
            let c = s.charAt(i);
            for (j = 0; j < 22; j++) {
                if (c == digits.charAt(j)) {
                    d = j;
                    break;
                }
            }
            if (d > 15) {
                d = d - 6;
            }
            val = 16 * val + d;
        }
        return val;
    }

    function flipnrot(s: string): number {
        let digits = "084C2A6E195D3B7F";
        return s.compare(digits)
    }
    export function m2l(n: number): number {
        let i = 0;
        let j = 7;
        let ret = 0;
        for (i = 0; i < 8; i++) {
            if (((n >> i) & 0x1) == 1) {
                ret = ret + 2 ** j;
            }        // Add code here
            j = j - 1;
        }
        return ret;
    }


}
