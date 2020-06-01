 

namespace progressAnimation{
    //% blockId=progressAnimationLoading
    //% block="progressAni LedSayisi = $ledsayisi, LedSirasi =  $sira, durum = $durum"
    //% ledsayisi.defl=3,  sira.defl=1
    //% durum.defl=true
    //% ledsayisi.min=1 ledsayisi.max=5
    //% sira.min=0 sira.max=4
   //% color="#FF5733" weight=10 icon="\uf0a4"
    //% 
 
    



    export function progressAni(ledsayisi: number, sira: number, durum: boolean): void {
       
        const leds=ledsayisi;
        const ledsirasi= sira;
        let state = durum;


        while (state == true) {
            for (let satir = 0; satir <= 4; satir++) {
               
                for (let sutun = 0; sutun <= leds - 1; sutun++) {
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








