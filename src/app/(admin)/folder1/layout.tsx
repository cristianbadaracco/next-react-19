const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-300 ">
      <div>LAYOUT - /folder1</div>
      {children}
    </div>
  );
};

export default Layout;
