import './App.css'
import FamilyTree from './components/ContextApi/FamilyTree'
import ControlledForm from './components/ControlledForm'
import CustomHook from './components/CustomHook'
import FormAction from './components/FormAction'
import ProductManagement from './components/ProductManagement/ProductManagement'
import SimpleForm from './components/SimpleForm'
import UncontrolledForm from './components/UncontrolledForm'

function App() {

  return (
    <>
      <h1>Explore React Form</h1>
      <SimpleForm/>
      <br />
      <FormAction/>
      <br />
      <ControlledForm/>
      <br />
      <UncontrolledForm/>
      <CustomHook/>
      <ProductManagement/>
      <FamilyTree/>
    </>
  )
}

export default App
