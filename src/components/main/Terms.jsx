const Term = ({id,name,terms})=>{
    return (
        <div>
            <div>
                <ul>
                   {terms.map((term,index)=>{
                    <li key={index}>{term}</li>
                   })}
                </ul>
            </div>
        </div>
    )
}