function GetSlideAngle(dx,dy){
     return Math.atan2(dy, dx) * 180 / Math.PI;  
}

export default {
    GetSlideDirection: (startX, startY, endX, endY) =>{
        var dy = startY - endY;  
        var dx = endX - startX;  
        var result = 0;  
        //如果滑动距离太短  
        if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {  
            return result;  
        }  
        var angle =GetSlideAngle(dx, dy);  
        if(angle >= -45 && angle < 45) {  
            result = 4;  
        }else if (angle >= 45 && angle < 135) {  
            result = 1;  
        }else if (angle >= -135 && angle < -45) {  
            result = 2;  
        }  
        else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {  
            result = 3;  
        }  
        return result;  
    }
}