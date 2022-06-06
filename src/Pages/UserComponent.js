import Reacrt from 'react';
import UserService from '../UserService'



class UserComponent extends Reacrt.Component {
    constructor(props){
        super(props)
        this.state = {
            people:[] 
        }
    }

    componentDidMount() {
        UserService.getAllPeople().then((response) => {
            this.setState({people: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className="text-center">Talents list</h1>
                <table className="table  table-striped">

            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>age</td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.people.map(
                        person =>
                        <tr key= {person.id} >                 
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.email}</td>
                            <td>{person.age}</td>                   
                        </tr>
                    )
                }
            </tbody>
                </table>
            </div>

        )
    }
}

export default UserComponent;