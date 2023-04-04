import dynamic from 'next/dynamic'

const NoSsr = ({ children }: ChildrenProps) => <>{children}</>

export default dynamic(() => Promise.resolve(NoSsr), { ssr: false })