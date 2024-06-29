const array = null;
// try to return all elements of the array
function getMyArray(){
    //if the array has elements then return all elements
    try{
       array.forEach(element => {
            console.log(element);
       });
    }catch{
        console.error('Array is null'); //else return this message
    }
}


getMyArray();