import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {ShirtCreateForm, UINavBar, UINoteCardCollection, UIShirt, UIShirtCollection, NoteUpdateForm, NoteCreateForm, UINoteCardNEW, UINewNote, UINewShirt} from "./ui-components";
import { Routes, Route } from 'react-router-dom'

class App extends Component {
    render() {
    return (
        <div className="App"><header className="App-header">
            <Routes>
                <Route exact path='/' element={<div><UINavBar/><UIShirtCollection isPaginated itemsPerPage={1} /></div>}/>
                <Route exact path='/NewShirt' element={<div><UINavBar/><ShirtCreateForm/></div>}/>
                <Route exact path='/NewNote' element={<UINewNote/>}/>
                <Route exact path='/EditNote' element={<NoteUpdateForm/>}/>
                <Route exact path='/NoteCreateForm' element={<NoteCreateForm/>}/>
                <Route exact path='/UINoteCardNEW' element={<UINoteCardNEW/>}/>
                <Route exact path='/UINewShirt' element={<UINewShirt/>}/>
            </Routes>

            </header></div>
    )
    }
}

export default withAuthenticator(App);