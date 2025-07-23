// Not just use useState in React  make your Own useState bro !

function useState(initialValue) {
    function getValue() {
        return initialValue ;
    }
    function setValue(newValue){
        initialValue = newValue ;
    }
    return [getValue , setValue]
}

const [count, setCount] = useState(0) ;

console.log(count()) ;
setCount(1) ;
console.log(count()) ;
setCount(35) ;
console.log(count());