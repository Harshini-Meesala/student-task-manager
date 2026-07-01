import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Header
        title="Student Task Manager"
        user="Harshini"
        date="1 July 2026"
      />

      <Profile
        name="Harshini"
        branch="CSE"
        year="4th Year"
        college="MRCET"
      />

      <Home />
      <Footer />
    </>
  );
}

export default App;