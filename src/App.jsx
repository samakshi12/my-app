import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home /> }/>
    <Route path="/Starred" element={ <Starred />}/>
    <Route path="*" element={<div>NOT FOUND</div>}/> 

       {/* /* <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route>
      <Route path="contact-us" element={<Contact />} /> */ }
    </Routes>
  </BrowserRouter>
  );
}

export default App;
