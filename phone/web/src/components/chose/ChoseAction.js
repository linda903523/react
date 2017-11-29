export function chosemore(morestatus){
    if(morestatus){
        return {
            type:'more'
        }
    }else{
        return {
            type: 'less'
        }
    }
}