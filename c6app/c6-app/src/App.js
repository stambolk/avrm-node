import React from 'react';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      students: []
    };
    this.fetchStudents();
  }

  fetchStudents = ()=>{
     fetch('http://localhost:4200/api/v1/students')
      .then(res => res.json())
      .then(data=>{
        this.setState({
          students: data
        });
      })
      .catch(err=>{
        console.error(err)
      });
  };

  addStudent = () => {
    
  }

  render(){
    return (
      <div>
        {this.state.students.map((v)=>{
         return (
          <div key={v._id}>
            <span>
              {v.first_name}
              {v.last_name}
            </span>
          </div>
         ) 
        })}
      </div>
    );
  }
}

export default App;
