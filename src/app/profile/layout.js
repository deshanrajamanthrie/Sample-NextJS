export default function ProfileLayout({ children }) {
  return (
    <>
    <hr/>
      <div className="row">
        <h1>Profile Header</h1>
      </div>
      {children}
      <div className="row">
        <h1>Profile Footer</h1>
      </div>
      <hr/>
    </>
  );
}
