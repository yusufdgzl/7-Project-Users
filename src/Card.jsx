export default function Card({item}){

    return(
        <>
        <div className="card">
            <div className="cardİmage">
              <img className="imgStyle" src={item.picture.large} alt="" />
            </div>
            <div className="cardInfos">
              <h3>{item.name.first} {item.name.last}</h3>
              <p>{item.email}</p>
              <p>{item.location.country}/{item.location.city}</p>
            </div>
          </div>
        </>
    )
}