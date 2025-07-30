import { Outlet, NavLink } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <nav className="p-4 bg-black text-white flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
