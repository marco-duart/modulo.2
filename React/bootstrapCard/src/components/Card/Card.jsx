const Card = (props) => {
    return (
        <div style={{width: '300px', padding: '30px', display: 'flex', flexDirection: 'column', borderRight: '1px solid #e2e2e2', borderBottom: '1px solid #e2e2e2', borderLeft: '1px solid #e2e2e2', borderRadius: '5px'}}>
            <h3 style={{fontFamily: 'Poppins, sans-serif'}}>{props.title}</h3>
            <small style={{fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: 'grey'}}>{props.subtitle}</small>
            <p style={{fontFamily: 'Poppins, sans-serif', color: 'darkgray'}}>{props.content}</p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <a style={{textDecoration: 'none', fontFamily: 'Poppins, sans-serif', color: 'lightblue', fontWeight: 'bold'}} href="#">Card link</a>
                <a style={{textDecoration: 'none', fontFamily: 'Poppins, sans-serif', color: 'lightblue', fontWeight: 'bold'}} href="#">Another link</a>
            </div>
        </div>
    )
}


export default Card