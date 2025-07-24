function handleSearchQuery(...args) {
    console.log(...args) ;
}

function debounceHandler(func , ...args){
    let timer ; 
    return function(){
        clearTimeout(timer) ;
        timer = setTimeout(() =>  {
            func.apply(this , ...args)
        }
         , 500)


    }
}
const result = debounceHandler(handleSearchQuery , ["Hello" , "World" , "Nikla"]) ;