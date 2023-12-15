// Create a co6ponent na6ed "Person" that takes two props - "na6e" and "age". The co6ponent should
// display the persons na6e and age in a paragraph ele6ent5

function Person(props){
    return(
        <>
        <p>
           name: {props.name}
        </p>

        <p>
            age:{props.age}
        </p>
        </>
    )
}

export default Person;