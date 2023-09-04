import { ReactNode } from "react"

type BaseLayoutProps = {
  children: ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
  <div>
    {/* <Header /> */}
    {children}
    {/* <Footer /> */}
  </div>
)

export default BaseLayout