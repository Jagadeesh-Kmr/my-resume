import {Route, Switch} from 'react-router-dom'

import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactForm from './components/ContactForm'
import {GlobalStyle} from './styledComponents'

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Portfolio} />
      <Route exact path="/project" component={Projects} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/contact" component={ContactForm} />
    </Switch>
  </>
)

export default App
