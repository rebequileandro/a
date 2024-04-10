import React from 'react'

const PartyCard = ({name, id, address, image}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const  handleClickEdit = (e) => {
            e.preventDefault()
            dispatch(detailsParty({id}))
            navigate(`/editmyparty/${id}`)
    }
  return (
      <div className='card-party-container'>
            <button className='edit' onClick={(e) => handleClickEdit(e)}>
                <img src={edit} alt="editar"/>
            </button>
        <div key={id} className='my-party'>
            {name ? 
            <>
                <img src={image} alt="boliche"/>
                <div className='shadow-filter'>
                    <h2>{name}</h2>
                    <p>{address}</p>
                </div>
            </>
            :
            <Loading/>
            }
        </div>
      </div>
  )
}

export default PartyCard