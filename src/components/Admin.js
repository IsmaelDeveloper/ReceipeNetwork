import React, {Component} from "react"
import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'
import Login from './Login'
import firebase from "firebase/app"
import 'firebase/auth'
import base, {firebaseApp} from "../base"
class Admin extends Component{
    state= {
        uid: null,
        chef : null
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.handleAuth({ user})
            }
        })
    }

    handleAuth = async authData =>{
        const box = await base.fetch(this.props.pseudo, {context: this})

        if(!box.chef){
            await base.post(`${this.props.pseudo}/chef`, {data: authData.user.uid})
        }

        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })
    }
    authenticate = () =>{
        const authProvider = new firebase.auth.FacebookAuthProvider
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }

    logout = async () =>{
        console.log('deconnection')
        await firebase.auth().signOut()
        this.setState({
            uid: null
        })
    }
    render(){
        const {recettes, updateRecette, ajouterRecette, chargeExemple, deleteRecette} = this.props
        const logout = <button onClick={this.logout}>Deconnection</button>


        // si l'utilisateur n'est pas connecté 
        if(!this.state.uid){
            return <Login authenticate={this.authenticate}></Login>
        }

        if(this.state.uid !== this.state.chef){
            return(
                <div>
                    <p>You're not the chef of this list</p>
                    {logout}
                </div>
            )
        }
        return(
            <div className="cards">
                <AjouterRecette ajouterRecette={ajouterRecette}>

                </AjouterRecette>
                {
                    Object.keys(recettes)
                    .map(key => <AdminForm deleteRecette={deleteRecette} updateRecette={updateRecette} recettes={recettes} key={key} id={key}>

                    </AdminForm>)
                }
                <footer>
                    {logout}
                    <button onClick={chargeExemple}>
                        Remplir
                    </button>
                </footer>
            </div>
            
        )
    }
}

export default Admin