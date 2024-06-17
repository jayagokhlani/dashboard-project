import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import TablesPage from "./pages/TablesPage";
import ChartsPage from "./pages/ChartsPage";
import CalendarPage from "./pages/CalendarPage";
import KanbanPage from "./pages/KanbanPage";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => setDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/tables" component={TablesPage} />
          <Route path="/charts" component={ChartsPage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/kanban" component={KanbanPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
