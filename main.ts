namespace progressAnimation{
    //% blockId=progressAnimationLoading
    //% block="progressAni LedSayisi = $ledSayisi, LedSirasi =  $ledSirasi, durum = $durum"
    //% ledSayisi.min=1 ledSayisi.max=5
    //% ledSirasi.min=0 ledSirasi.max=4
    



    export function progressAni(ledsayisi: number, sira: number, durum: boolean): void {
        ledsayisi |=0
        sira |=0
        durum ||true
        const leds=ledsayisi;
        const ledsirasi= sira;
        let state = durum;


        while (state == true) {
            for (let satir = 0; satir <= 4; satir++) {
                for (let sutun = 0; sutun <= ledsayisi - 1; sutun++) {
                    led.plot(satir, sutun + ledsirasi)
                    for (let index = 0; index <= 50; index++) {
                        led.setBrightness(index * 4 + 55)
                        basic.pause(10)
                    }
                    led.setBrightness(55)
                }
            }
            for (let index = 0; index < 4; index++) {
                led.enable(false)
                basic.pause(100)
                led.enable(true)
                basic.pause(100)
            }
            state = false
            led.setBrightness(255)
        }
        basic.pause(500)
        basic.clearScreen()
    }




}








