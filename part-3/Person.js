const Person = (props) => {
    let age = props.age
    let name = props.name;
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)

    //Checks to see if age is greater than 18
    if( age >= 18){
        age = "Please go vote!";

    } else{
        age = "You must be 18 to vote";
    };

    //Checks if name is longer than 8 characters
    if( name.length > 8){
        name = props.name.slice(0,6)
    }

    return (
        <div>
            <h3>{name}: {age}</h3>
            <ul>
                {hobbies}
            </ul>
        </div>
    )


}