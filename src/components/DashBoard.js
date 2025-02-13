import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem'
import Header from '../Layout/Header';
import CreateProjectButton from './Project/CreateProjectButton';

class DashBoard extends Component {
    render() {
        return (
<div className="projects">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />
                <CreateProjectButton/>
                <br />
                <hr />

               <ProjectItem/>

            </div>
        </div>
    </div>
</div>

        );
    }
}

export default DashBoard;