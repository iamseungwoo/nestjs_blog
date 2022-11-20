const Navigator = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href={`/home`}>Home</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href={`/signIn`}>signIn</a>
                </li>
            </ul>
            <style>{
                `ul {
                  list-style-type: none;
                  margin: 0;
                  padding: 0;
                }
                    
                li {
                  display: inline;
                  float: left;
                }
                
                a {
                  padding : 5px;
                }
                `

                }
            </style>
        </nav>
    )
}

export default Navigator;