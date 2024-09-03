mgraphics.init()
mgraphics.relative_coords = 0
mgraphics.autofill = 0

autowatch = 1;

var sinVal = 6.331;
var moduloVal = 0.9
var lcdcolor1 = [0.427451, 0.843137, 1., 1.]
var noiseVal = 0

function moduloDistortion(){
    with(mgraphics){
        for(i = 1; i <= 64; i++){

            sin = Math.sin(i * sinVal)
            modulo = sin % moduloVal
            fract = 1/moduloVal

            output = modulo * fract;
           // post(sin)

            set_line_cap("round")
            move_to(20 + i * 2, 200)
            line_to(20 + i * 2, output * -100 + 150)
            set_source_rgba(lcdcolor1[0], lcdcolor1[1], lcdcolor1[2], 0.5)

            move_to(20 + i * 2 + noiseVal, 200)
            line_to(20 + i * 2 + noiseVal, output * -100 + 150)
            set_source_rgba(lcdcolor1[0], lcdcolor1[1], lcdcolor1[2], 1)
            stroke()
        }


    }
}

function paint(){
    with(mgraphics){
        moduloDistortion()
        redraw()
    }
}