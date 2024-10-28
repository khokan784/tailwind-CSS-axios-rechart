import './App.css'
import LineChart from './LineChart'
// import DaisyNav from './daisynav/DaisyNav'
import Navber from './Navber'
import PriceOption from './PriceOption'

function App() {

  return (
    <>
      <Navber></Navber>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOption></PriceOption>
      <LineChart></LineChart>

    </>
  )
}

export default App
