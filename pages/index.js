import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Navbar blendIntoColor={true} />
      <Sidebar />
      <Header />
    </div>
  )
}
