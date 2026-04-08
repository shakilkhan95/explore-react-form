import './App.css'
import ControlledForm from './components/ControlledForm'
import FormAction from './components/FormAction'
import SimpleForm from './components/SimpleForm'

function App() {

  return (
    <>
      <h1>Explore React Form</h1>
      <SimpleForm/>
      <br />
      <FormAction/>
      <br />
      <ControlledForm/>
    </>
  )
}

export default App
