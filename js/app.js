class TacheApp extends React.Component{
  render(){
    return <ListeDeTache />
  }
}

class ListeDeTache extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        taches : [
          {
            id: 1,
            description: 'Learn HTML, CSS, Bootstrap and WordPress',
            complete: "success",
          },
          {
            id: 2,
            description: ' Learn JavaScript and JQuery',
            complete: "success"
          },
          {
            id: 3,
            description: ' Learn PHP and Laravel ',
            complete: "active"
          },
          {
            id: 4,
            description: 'Learn React and React Native',
            complete: "active"
          },
          {
            id: 5,
            description: 'Learn Java and Java EE',
            complete: "active"
          }
        ]      
    };
  }

  render(){      
    return (
      <div>
        <h1 className="text-center" >Liste des taches - TodoList</h1>
        {this.state.taches.map(tache => <Tache key={tache.id} tache={tache} />)}
      </div>
    )
  }
}


/*utilisation des heros fonctions*/
const Tache = (props) =>(
   <article className="col-sm-8 table-responsive">
      <table className="table table-bordered table-striped table-condensed" >
        <thead>
          <tr>
          <th>Identifiant</th>
          <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className={props.tache.complete} >
            <td><h1>{props.tache.id}</h1> </td>
            <td><h1> {props.tache.description}</h1></td>
          </tr>
        </tbody>
      </table>
   </article>
)


ReactDOM.render(
    <TacheApp />,
    document.getElementById('root')
);