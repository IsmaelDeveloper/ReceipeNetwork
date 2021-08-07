import React from 'react'
const AdminForm = ({id: key, updateRecette, recettes, deleteRecette}) =>{
    const recette = recettes[key]
    const handleChange = (event, key)=> {
        const { name, value} = event.target
        const recette = recettes[key]
        recette[name] = value
        updateRecette(key, recette)
    }
return(
    <div className="card">
        <form className="admin-form">
                  <input value={recette.nom} onChange={e =>handleChange(e, key)} name="nom" type="text" placeholder="receipe name"></input>
                  <input value={recette.image} onChange={e =>handleChange(e, key)} name="image" type="text" placeholder="image name"></input>
                  <textarea value={recette.ingredients} onChange={e =>handleChange(e, key)} name="ingredients" rows="15" placeholder="ingredients list"></textarea>
                  <textarea value={recette.instructions} onChange={e =>handleChange(e, key)} name="instructions" rows="15" placeholder="instructions list"></textarea>
        </form>
        <button onClick={() => deleteRecette(key)}>Delete</button>
    </div>

)
}
export default AdminForm