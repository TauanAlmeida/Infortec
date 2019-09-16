import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home.js'
import Metodologia from './pages/Metodologia.js'
import Portfolio from './pages/Portfolio.js'
import Contato from './pages/Contato.js'
import Equipe from './pages/Equipe.js'
import Ferramentas from './pages/Ferramentas.js'

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/equipe" exact component={Equipe}/>
        <Route path="/contato" exact component={Contato}/>
        <Route path="/metodologia" exact component={Metodologia}/>
        <Route path="/portfolio" exact component={Portfolio}/>
        <Route path="/ferramentas" exact component={Ferramentas}/>
        <Route path="*" component={() => <h1>Error 404: Page not found</h1>} />
    </Switch>

)

export default Routes