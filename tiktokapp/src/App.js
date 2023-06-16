import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Following from './pages/Following';
import { publicRoutes } from './routes';
import DefaultLayout from './components/GlobalStyles/Layout/DefaultLayout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        //const Layout = route.layout || DefaultLayout  //Nếu k có layout được setting thì sẽ lấy Layout = Defaulylayout
                        //const Layout = route.layout === false ? Fragment : DefaultLayout  //Nếu k có layout được setting thì sẽ lấy Layout = Defaulylayout
                        const Page = route.component

                        let Layout = DefaultLayout

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === false) {
                            Layout = Fragment
                        }
                        return <Route
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    })}
                    <Route path='/' element={<Home />} />
                    <Route path='/following' element={<Following />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
