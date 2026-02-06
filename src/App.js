import React from 'react';
import { Switch, Route } from "wouter";
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Services from './pages/services.jsx';
import Contact from './pages/contact.jsx';
import Blogs from './pages/blogs.jsx';
import Donate from './pages/donate.jsx';
import Volunteer from './pages/volunteer.jsx';
import Test from './pages/test.jsx';
import BlogDetail from './pages/BlogDetails.jsx'
import Gallery from './pages/gallery.jsx';
import Press from './pages/press.jsx';
import Testc from './pages/testc.jsx';

import { Toaster } from "./components/ui/toaster.tsx";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { TooltipProvider } from "./components/ui/tooltip.tsx";


const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/donate" component={Donate} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/test" component={Test} />
      <Route path="/blogs/:id" component={BlogDetail} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/press" component={Press} />
      <Route path="/testc" component={Testc} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  </QueryClientProvider>
  );
}

export default App;