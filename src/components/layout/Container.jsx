function Container({ children }) {
    return (
        <div className="
        max-w-6xl mx-auto  
        px-4 sm:px-6 lg:px-8 
        flex items-center justify-between">
            {children}
        </div>  
    )
}
export default Container;