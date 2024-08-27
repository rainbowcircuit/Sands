mgraphics.init()
mgraphics.relative_coords = 0
mgraphics.autofill = 0

autowatch = 1
canvasSize = 150
var selectionArray = [1, 2, 3, 4, 5, 6, 7, 8]
var invertBool = [1, 1, 1, 1, 1, 1, 1, 1]

var lcdcolor1 = [0.427451, 0.843137, 1., 1.]
var lcdcolor2 = [1,1,1, 1.]
var numOffset = 0

display1 = [0, 0, 1, 0, 0,
            0, 1, 1, 0, 0,
            1, 0, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0,
            1, 1, 1, 1, 1]

display2 = [0, 1, 1, 1, 0,
            1, 0, 0, 0, 1,
            0, 0, 0, 0, 1,
            0, 0, 0, 1, 0,
            0, 0, 1, 0, 0,
            0, 1, 0, 0, 0,
            1, 1, 1, 1, 1]

display3 = [0, 1, 1, 1, 0,
            1, 0, 0, 0, 1,
            0, 0, 0, 0, 1,
            0, 0, 1, 1, 0,
            0, 0, 0, 0, 1,
            1, 0, 0, 0, 1,
            0, 1, 1, 1, 0]

display4 = [0, 0, 0, 1, 0,
            0, 0, 1, 1, 0,
            0, 1, 0, 1, 0,
            1, 0, 0, 1, 0,
            1, 1, 1, 1, 1,
            0, 0, 0, 1, 0,
            0, 0, 0, 1, 0]

display5 = [1, 1, 1, 1, 1,
            1, 0, 0, 0, 0,
            1, 1, 1, 1, 0,
            0, 0, 0, 0, 1,
            0, 0, 0, 0, 1,
            1, 0, 0, 0, 1,
            0, 1, 1, 1, 0]

display6 = [0, 1, 1, 1, 0,
            1, 0, 0, 0, 1,
            1, 0, 0, 0, 0,
            1, 1, 1, 1, 0,
            1, 0, 0, 0, 1,
            1, 0, 0, 0, 1,
            0, 1, 1, 1, 0]    

display7 = [1, 1, 1, 1, 1,
            0, 0, 0, 0, 1,
            0, 0, 0, 1, 0,
            0, 0, 1, 0, 0,
            0, 1, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 1, 0, 0, 0]

display8 = [0, 1, 1, 1, 0,
            1, 0, 0, 0, 1,
            1, 0, 0, 0, 1,
            0, 1, 1, 1, 0,
            1, 0, 0, 0, 1,
            1, 0, 0, 0, 1,
            0, 1, 1, 1, 0] 

function matrixNumber(number, bool, xPos, yPos){
    with(mgraphics){
        for(i = 0; i < 35; i++){
            j = Math.floor(i/5)
            k = i % 5

            arc(xPos + (k * 3), yPos + (j * 3), 1, 0, 6.28)
            
            if (number[i + numOffset] == 0){ 
                set_source_rgba(0.35, 0.35, 0.35, 0)

                fill()
            } else if (bool){
                set_source_rgba(lcdcolor1[0], lcdcolor1[1], lcdcolor1[2], 1)
                fill()
            } else if (!bool){
                set_source_rgba(lcdcolor2[0], lcdcolor2[1], lcdcolor2[2], 1)
                fill()  
            }
        }
    }
}

function selectNumber(selection){

    
    return number;
}

function paint(){
    with(mgraphics){


        for (l = 0; l < 8; l++){
            m = 8 - l
            display = "display"
            selection = selectionArray[l]
            displayNum = display.concat(selection)
            matrixNumber(eval(displayNum), invertBool[l],(l * 20) + 10, selectionArray[l] * 27.5 + 10);
        }
        redraw()
    }
}