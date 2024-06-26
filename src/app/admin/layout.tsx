import Sidebar from "./adminComponents/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex">
          <Sidebar />
      </div>
      {children}
    </>
  )
}