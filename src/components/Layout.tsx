import Navigation from "@/components/Navigation";

 
const Layout = ({ children }: any) => (
  <div>
    <Navigation/>
      {children}
  </div>
);
 
export default Layout;